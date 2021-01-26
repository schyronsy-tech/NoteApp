import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity
                title="Add Note"
                onPress={() =>
                    navigation.navigate('NoteForm')
                }
                style={styles.navigationButton}
            >
                <Text style={styles.navigationText}>Add Note</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Notes"
                onPress={() =>
                    navigation.navigate('NoteList')
                }
                style={styles.navigationButton}
            >
                <Text style={styles.navigationText}>Notes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navigationButton: {
        padding: '35px',
        width: '500px',
        marginBottom: '30px',
        backgroundColor: '#5fc9f8',
        borderRadius: '8px',
        textAlign: 'center',
    },
    navigationText: {
        color: '#ffffff',
        fontSize: '20px',
    },
    container: {
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;