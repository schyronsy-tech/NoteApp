import React from 'react';
import { View } from 'react-native';

import NoteForm from '../components/noteForm';

class NoteFormContainer extends React.Component {

    render() {
        const noteAddForm = <NoteForm />
        return(
            <View style={{ height: '100vh' }}>{noteAddForm}</View>
        )
    }
}

export default NoteFormContainer;