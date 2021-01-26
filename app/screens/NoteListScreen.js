import React from 'react';
import { View } from 'react-native';

import NoteList from '../components/noteList';

class NoteListContainer extends React.Component {

    render() {
        const noteList = <NoteList />
        return(
            <View>{noteList}</View>
        )
    }
}

export default NoteListContainer;