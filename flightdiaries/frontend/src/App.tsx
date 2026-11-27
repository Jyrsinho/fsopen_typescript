import {useEffect, useState} from 'react'
import axios from 'axios';
import type {DiaryEntry, NewDiaryEntry} from './../../backend/src/types.ts';
import {DiaryEntries} from "./DiaryEntries.tsx";
import {DiaryForm} from "./DiaryForm.tsx";

function App() {
    const [entries, setEntries] = useState<DiaryEntry[]>([])

    useEffect(() => {
        axios.get<[]>('/api/diaries').then(response => {
            console.log(response.data);
            setEntries(response.data);
        })
    }, [])

    const addEntry = (newDiaryEntry: NewDiaryEntry) => {
        console.log(newDiaryEntry)
    }

    return (
        <div>
            <DiaryForm addDiaryEntry={addEntry}/>
            <DiaryEntries entries={entries}/>
        </div>
    )
}

export default App
