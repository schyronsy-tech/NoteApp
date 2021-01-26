import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    View,
    TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNote } from '../actions/noteAction';

const Item = ({ title, description }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
);

const NoteList = () => {
    const state = useSelector(state => state.noteReducer);
    const [page, setPage] = useState(1);
    const [prevPage, setPreviousPage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if((Object.keys(state.noteList).length === 0 && state.noteList.constructor === Object) || prevPage !== page ) {
            setPreviousPage(page);
            dispatch(fetchNote(page));
        }
    });


    const renderItem = ({ item }) => (
        <Item title={item.title} description={item.description} />
    );

    const handlePrev = () => {
        const newPage = page - 1;
        setPage(newPage);
    }

    const handleNext = () => {
        const newPage = page + 1;
        setPage(newPage);
    }

    const renderPrev = () => {
        if (state.noteList.previous) {
            return(
                <TouchableOpacity
                activeOpacity={0.9}
                onPress={handlePrev}
                style={styles.navigationButton}
                >
                    <Text style={styles.btnText}>Previous</Text>
                </TouchableOpacity>
            )
        } else {
            return null;
        }
    }

    const renderNext = () => {
        if (state.noteList.next) {
            return(
                <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleNext}
                style={styles.navigationButton}
                >
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            )
        } else {
            return null;
        }
    }

    const renderFooter = () => {
        return (
          <View style={styles.footer}>
            {renderPrev()}
            {renderNext()}
          </View>
        );
      };


    return (
        <FlatList style={styles.listContainer}
            data={state.noteList.results}
            renderItem={renderItem}
            ListFooterComponent={renderFooter}
    />
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 30,
        border: 'solid 1px #ccc',
    },
    title: {
        fontSize: 32,
    },
    description: {
        fontsize: 20,
    },
    navigationButton: {
        padding: '35px',
        width: '400px',
        marginBottom: '30px',
        backgroundColor: '#5fc9f8',
        borderRadius: '8px',
        textAlign: 'center',
    },
    btnText: {
        color: '#ffffff',
        fontSize: '20px',
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default NoteList;