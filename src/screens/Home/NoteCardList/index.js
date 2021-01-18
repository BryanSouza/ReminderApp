/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  ScrollView, Text, View,
} from 'react-native';
import NoteCard from './NoteCard';
import { noteService } from '../../../services';

const NoteCardList = (props) => {
  const { list, refresh } = props;

  function onHandleSave(message, id) {
    console.log(`saving item: ${id}`);
    noteService.updateNote({ message }, id).then((data) => {
      refresh();
    });
  }

  function onHandleDelete(id) {
    console.log(`deleting item: ${id}`);
    noteService.deleteNote(id).then((data) => {
      refresh();
    });
  }

  return (
    list && list.length !== 0 ? (
      <ScrollView>
        {list.map((item) => (
          <NoteCard
            key={item.id}
            onSave={onHandleSave}
            onDelete={() => onHandleDelete(item.id)}
            content={item}
          />
        ))}
      </ScrollView>
    ) : (
      <View style={{ flex: 1 }}>
        <Text>Banco de notas vazio!</Text>
      </View>
    )
  );
};

export default NoteCardList;
