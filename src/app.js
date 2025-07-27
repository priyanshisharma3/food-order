import React from "react"
import { createRoot } from "react-dom/client"
import '../index.css'
import Header from "./components/Header"
import Body from "./components/Body"

const AppLayout = () => {
    return (
        <div className="app">
            <Header /> 
            <Body/>
        </div>
    )
}

const root = createRoot(document.querySelector('.container'))

root.render(<AppLayout/>)