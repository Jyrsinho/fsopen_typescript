import {type NewDiaryEntry, Weather} from "../../backend/src/types.ts"
import {Visibility} from "../../backend/src/types.ts";
import {useState} from "react";

type DiaryFormProps = {
    addDiaryEntry: (newDiary: NewDiaryEntry) => void;
}

const formStyle = {
    display: "flex",
    flexDirection: "column",
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

    console.log('Date', date);

    const handleSubmit = () => {
        addDiaryEntry({
            comment,
            date,
            visibility: visibility,
            weather
        })
    }

    return (
        <form style={formStyle} onSubmit={() => handleSubmit}>
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
            <select name="visibility"
                    id="visibility-select"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value as Visibility)}>
                {Object.entries(Visibility).map(([key, value]) => {
                    return <option key={key} value={key}>{value}</option>
                })}
            </select>
            <label htmlFor="weather-select">weather:</label>
            <select name="weather"
                    id="weather-select"
                    value={weather}
                    onChange={(e) => setWeather(e.target.value as Weather)}
            >
                {Object.entries(Weather).map(([key, value]) => {
                    return <option key={key} value={key}>{value}</option>
                })}
            </select>
            <button type="submit">submit</button>
        </form>
    )
}

export default DiaryForm;