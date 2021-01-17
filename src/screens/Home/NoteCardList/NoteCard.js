/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button, Card, Paragraph, TextInput,
} from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    margin: 8,
    backgroundColor: '#2A5DFF',
  },
  editButton: {
    backgroundColor: '#fecd1a',
    margin: 4,
  },
  saveButton: {
    backgroundColor: '#61b15a',
    margin: 4,
  },
  deleteButton: {
    backgroundColor: '#f05454',
    margin: 4,
  },
});

const NoteCard = (props) => {
  const { content, onSave, onDelete } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(content.message);

  return (
    <Card style={styles.card}>
      <Card.Title title={content.title} subtitle={content.date} />
      <Card.Content>
        {!isEditing ? (
          <Paragraph>{currentMessage}</Paragraph>
        ) : (
          <TextInput
            label=""
            value={currentMessage}
            onChangeText={(text) => setCurrentMessage(text)}
            mode="flat"
            multiline
          />
        )}
      </Card.Content>
      <Card.Actions>
        {!isEditing ? (
          <Button
            icon="pencil"
            style={styles.editButton}
            onPress={() => { setIsEditing(true); }}
            mode="contained"
          >
            Edit
          </Button>
        ) : (
          <Button
            icon="content-save"
            style={styles.saveButton}
            onPress={() => {
              setIsEditing(false);
              if (currentMessage !== content.message) {
                onSave(currentMessage, content.id);
              }
            }}
            mode="contained"
          >
            Save
          </Button>
        )}
        <Button icon="delete" style={styles.deleteButton} onPress={onDelete} mode="contained">Delete</Button>
      </Card.Actions>
    </Card>
  );
};

export default NoteCard;
