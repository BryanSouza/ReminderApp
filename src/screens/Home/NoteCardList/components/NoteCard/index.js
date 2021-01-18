import React, { useState } from 'react';
import {
  Button, Card, Paragraph, TextInput,
} from 'react-native-paper';
import moment from 'moment';
import styles from './styles';

const NoteCard = (props) => {
  const { content, onSave, onDelete } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(content.message);
  return (
    <Card style={styles.card}>
      <Card.Title title={content.id} subtitle={moment(content.date).format('DD/MM/YY')} />
      <Card.Content>
        {!isEditing ? (
          <Paragraph>{content.message}</Paragraph>
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
          <>
            <Button
              icon="pencil"
              style={styles.editButton}
              onPress={() => setIsEditing(true)}
              mode="contained"
            >
              Edit
            </Button>
            <Button
              icon="delete"
              style={styles.deleteButton}
              onPress={onDelete}
              mode="contained"
            >
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button
              icon="content-save"
              style={styles.saveButton}
              onPress={() => {
                setIsEditing(false);
                if (currentMessage !== content.message) {
                  onSave(currentMessage, content.id);
                  setCurrentMessage(currentMessage);
                }
              }}
              mode="contained"
            >
              Save
            </Button>
            <Button
              icon="close"
              style={styles.deleteButton}
              onPress={() => {
                setIsEditing(false);
                setCurrentMessage(content.message);
              }}
              mode="contained"
            >
              Cancel
            </Button>
          </>
        )}

      </Card.Actions>
    </Card>
  );
};

export default NoteCard;
