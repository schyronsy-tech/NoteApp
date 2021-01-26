import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/noteAction';

const NoteForm = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isSuccess, setSuccess] = useState(false)
    const dispatch = useDispatch();

    const submitNote = (title, description) => dispatch(addNote(title, description));

    const successMessage = () => {
        if(isSuccess) {
            return(
                <View>
                    <Text style={styles.successMessage}>Note has been added</Text>
                </View>
            )
        } else {
            return null;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Note</Text>
            <TextInput
                value={title}
                placeholder='Enter Title Here'
                style={styles.noteInput}
                onChangeText={(title) => setTitle(title)}
            />
            <TextInput
                value={description}
                placeholder='Enter Description Here'
                style={styles.noteInput}
                onChangeText={(description) => setDescription(description)}
            />
            <TouchableOpacity
                style={styles.action}
                onPress={() => {
                    submitNote(title, description).then(setSuccess(true))
                    setTitle('')
                    setDescription('')
            }}>
            {successMessage()}
            <Text style={styles.actionContent}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  noteInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  },
  successMessage: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#2abb9b',
    padding: 10,
    borderRadius: 13,
    marginBottom: 16,
  },
  action: {
      display: 'flex',
  },
  actionContent: {
      fontSize: 20,
      color: '#ffffff',
      width: '210px',
      backgroundColor: '#5fc9f8',
      padding: 10,
      borderRadius: 13,
      textAlign: 'center',
  }
});


export default NoteForm;
