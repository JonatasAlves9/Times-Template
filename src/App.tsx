import {useState} from 'react'
import './assets/scss/themes.scss'
import Router from "./config/routes"

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router/>
    )
}

export default App
