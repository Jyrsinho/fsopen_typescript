import {useEffect} from 'react'
import axios from 'axios';

function App() {
    // const [entries, setEntries] = useState([])

    useEffect(() => {
        axios.get<[]>('/api/diaries').then(response => {
            console.log(response.data);
        })
    }, [])

    return (
        <div>
            <p>Hello flight diary!</p>
        </div>
    )
}

export default App
