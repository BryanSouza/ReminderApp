/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  ScrollView, Text, View,
} from 'react-native';
import NoteCard from './NoteCard';

const NoteCardList = (props) => {
  const { list } = props;

  function onHandleSave(message, id) {
    console.log(`saving item: ${id}`);
  }

  function onHandleDelete(id) {
    console.log(`deleting item: ${id}`);
  }

  return (
    list ? (
      <ScrollView>
        {list && list.map((item) => (
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
