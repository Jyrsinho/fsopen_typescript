import axios from "axios";
import type {DiaryEntry, NewDiaryEntry} from "../../../backend/src/types.ts";

const baseURL = '/api/diaries'

const getAll = () => {
    return axios
        .get<DiaryEntry[]>(baseURL)
        .then(response => response.data)
}

const addDiaryEntry = (object: NewDiaryEntry) => {
    console.log('newDiaryEntry', object)
    return axios
        .post(baseURL, object)
        .then(response => response.data)
}


export default {
    getAll,
    addDiaryEntry
}