import {useEffect, useState} from 'react'
import type {DiaryEntry, NewDiaryEntry} from './../../backend/src/types.ts';
import {DiaryEntries} from "./components/DiaryEntries.tsx";
import DiaryForm from "./components/DiaryForm.tsx";
import diaryService from "./services/diaryService.ts";
import Notification from "./components/Notification.tsx";
import axios from "axios";

function App() {
    const [entries, setEntries] = useState<DiaryEntry[]>([])
    const [notification, setNotification] = useState<string | null>('default notification');

    useEffect(() => {
        diaryService.getAll()
            .then(initialEntries => {
                setEntries(initialEntries)
            })
    }, [])

    const addEntry = (newDiaryEntry: NewDiaryEntry) => {
        try {
            diaryService.addDiaryEntry(newDiaryEntry)
                .then((returnedDiaryEntry: DiaryEntry) => {
                    setEntries(entries.concat(returnedDiaryEntry))
                });
        }catch (error) {
            console.error(error)
            if (axios.isAxiosError(error)) {
                console.error(error)
                setNotification(error.message)
            }
            console.log(error)
        }
    }

    return (
        <div>
            <Notification notification={notification}/>
            <DiaryForm addDiaryEntry={addEntry}/>
            <DiaryEntries entries={entries}/>
        </div>
    )
}

export default App
