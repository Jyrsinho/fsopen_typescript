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
    try {
        return axios
            .post(baseURL, object)
            .then(response => response.data)
    }catch (error) {
        console.log(error)
        return error
    }
}


export default {
    getAll,
    addDiaryEntry
}