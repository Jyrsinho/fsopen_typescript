import type {DiaryEntry} from '../../../backend/src/types.ts';

type DiaryEntriesProps = {
    entries: DiaryEntry[];
}

export function DiaryEntries({entries}: DiaryEntriesProps) {
    return (
        <div>
            <h2>Flight diaries</h2>
            {entries.map((entry) => (
                <div key={entry.id}>
                    <p><strong>{entry.date}</strong></p>
                    <p>weather: {entry.weather}</p>
                    <p>visibility: {entry.visibility}</p>
                    <p>comment: {entry.comment}</p>
                </div>))}
        </div>
    )
}