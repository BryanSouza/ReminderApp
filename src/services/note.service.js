import firestore from '@react-native-firebase/firestore';

class NoteService {
  constructor() {
    this.collection = firestore().collection('notes');
  }

  getAllNotes() {
    return this.collection.orderBy('date', 'asc').get();
  }

  addNewNote(data) {
    return this.collection.add(data);
  }

  updateNote(data, id) {
    return this.collection.doc(id).update(data);
  }

  deleteNote(id) {
    return this.collection.doc(id).delete();
  }

  deleteAll() {
    return this.collection.get().then((data) => {
      data.forEach(({ id }) => {
        this.collection.doc(id).delete();
      });
    });
  }
}

const noteService = new NoteService();

export { noteService };
