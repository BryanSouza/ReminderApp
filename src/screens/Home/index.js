/* eslint-disable no-console */
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Appbar } from 'react-native-paper';
import NoteCardList from './NoteCardList';

const styles = StyleSheet.create({
  bottom: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const myList = [
  {
    id: 1, title: 'ItemOne', message: 'Welcome', date: '01/2020',
  },
  {
    id: 2, title: 'ItemTwo', message: 'Bye!', date: '01/2020',
  },
];

const Home = () => {
  function addNote() {
    console.log(myList);
  }

  function refresh() {
    console.log('Pressed refresh');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NoteCardList list={myList} />
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="plus"
          onPress={addNote}
        />
        <Appbar.Action
          icon="refresh"
          onPress={refresh}
        />
      </Appbar>
    </SafeAreaView>
  );
};

export default Home;
