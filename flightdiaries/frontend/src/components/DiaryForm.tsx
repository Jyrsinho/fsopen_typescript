import {type NewDiaryEntry, Weather} from "../../../backend/src/types.ts"
import {Visibility} from "../../../backend/src/types.ts";
import {useState} from "react";
import * as React from "react";

type DiaryFormProps = {
    addDiaryEntry: (newDiary: NewDiaryEntry) => void;
}

export function DiaryForm({addDiaryEntry}: DiaryFormProps) {
    const today = new Date();
    const dateString = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-");

    const [comment, setComment] = useState<string>("");
    const [date, setDate] = useState<string>(dateString);
    const [visibility, setVisibility] = useState<Visibility>(Visibility.Good);
    const [weather, setWeather] = useState<Weather>(Weather.Sunny)


    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        addDiaryEntry({
            comment,
            date,
            visibility,
            weather
        })

        setVisibility(Visibility.Good)
        setWeather(Weather.Sunny)
        setDate(dateString)
        setComment('')
    }

    return (
        <form style={{display: "flex", flexDirection: "column"}} onSubmit={(e) => handleSubmit(e)}>
            <legend>add diary entry:</legend>
            <label>comment:
                <input onChange={(e) => setComment(e.target.value)}
                       value={comment}
                       type={"textfield"}
                       name={"comment"}/>
            </label>
            <label>date:
                <input type={"date"} value={String(date)} onChange={(e) => setDate(e.target.value)}/>
            </label>
            <label htmlFor={"visibility-select"}>visibility:</label>
            <input  type={"text"} name="visibility"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value as Visibility)}/>
            <label htmlFor="weather-select">weather:</label>
            <input  name="weather"
                    id="weather-select"
                    value={weather}
                    onChange={(e) => setWeather(e.target.value as Weather)}/>
            <button type="submit">submit</button>
        </form>
    )
}

export default DiaryForm;