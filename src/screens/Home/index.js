/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';
import NoteCardList from './NoteCardList';
import { noteService } from '../../services';

const styles = StyleSheet.create({
  bottom: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Home = () => {
  const [notes, setNotes] = useState(null);

  function refresh() {
    noteService.getAllNotes().then((data) => {
      const newNotes = [];

      data.forEach((snapshot) => {
        const note = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        newNotes.push(note);
      });

      setNotes(newNotes);
    });
  }

  function deleteAll() {
    noteService.deleteAll().then(() => {
      console.log('deleting all notes');
      refresh();
    });
  }

  function addNote() {
    const newNote = {
      message: 'Digite algo',
      date: new Date(Date.now()),
    };

    noteService.addNewNote(newNote).then((data) => {
      console.log('Note\'s Id: ', data.id);
      refresh();
    });
  }

  useEffect(() => {
    refresh();
    return function clear() {
      setNotes(null);
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NoteCardList refresh={refresh} list={notes} />
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="plus"
          onPress={addNote}
        />
        <Appbar.Action
          icon="refresh"
          onPress={refresh}
        />
        <Appbar.Action
          icon="delete"
          onPress={deleteAll}
        />
      </Appbar>
    </SafeAreaView>
  );
};

export default Home;
