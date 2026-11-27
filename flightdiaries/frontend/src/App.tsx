import {useEffect, useState} from 'react'
import type {DiaryEntry, NewDiaryEntry} from './../../backend/src/types.ts';
import {DiaryEntries} from "./components/DiaryEntries.tsx";
import DiaryForm from "./components/DiaryForm.tsx";
import diaryService from "./services/diaryService.ts";

function App() {
    const [entries, setEntries] = useState<DiaryEntry[]>([])

    useEffect(() => {
        diaryService.getAll()
            .then(initialEntries => {
                setEntries(initialEntries)
            })
    }, [])

    const addEntry = (newDiaryEntry: NewDiaryEntry) => {
        console.log('viesti meni tänne addEntryyn')
        diaryService.addDiaryEntry(newDiaryEntry)
            .then((returnedDiaryEntry: DiaryEntry) => {
                setEntries(entries.concat(returnedDiaryEntry))
            });
    }

    return (
        <div>
            <DiaryForm addDiaryEntry={addEntry}/>
            <DiaryEntries entries={entries}/>
        </div>
    )
}

export default App
