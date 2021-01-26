import { ADD_NOTE, FETCH_NOTES } from './types';
import axios from 'axios';

export const addNote = (title, description) => async dispatch => {
    try{
        const res = await axios.post(`http://localhost:3000/notes`, { title, description })
        dispatch( 
            {
            type: ADD_NOTE,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ADD_NOTE,
            payload: console.log(e),
        })
    }

};


export const fetchNote = (pageNum) => async dispatch => {
    const page = pageNum === undefined || null ? 1 : pageNum;

    try{
        const res = await axios.get(`http://localhost:3000/notes?page=${page}&limit=10`)
        dispatch( 
            {
            type: FETCH_NOTES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: FETCH_NOTES,
            payload: console.log(e),
        })
    }

};