import React from "react"
import { createRoot } from "react-dom/client"
import '../index.css'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

const AppLayout = () => {
    return (
        <div className="app">
            <Header/> 
            <Body/>
            <Footer/>
        </div>
    )
}

const root = createRoot(document.querySelector('.container'))

root.render(<AppLayout/>)