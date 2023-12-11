import React from "react"
import ReactDOM from "react-dom"
export default function Loading(){
    return ReactDOM.createPortal(
        <div className="overlay">
            <h1>Loading....</h1>
        </div>,
        document.body
    )
}