import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { LiaLaughBeamSolid, LiaMehSolid } from "react-icons/lia";

export default function R13App () {

    const [status, setStatus] = useState({
        status: null,
        description: "Hello buddy, would You like to subscribe?"
    })

    const handleToSubChange = () => {
        setStatus({
            status : "subscribe",
            description: "description done :D"
        })
    }

    const handleToUnSubChange = () => {
        setStatus ({
            status : "unsubscribe",
            description: "You already unsubscribe"
        })
    }

    useEffect(()=> {
        console.log(status)
    },[status])


   return (
    <div className="wrapper">
            <div className="container">
                <span>{status.description}</span>
                {status.status === "subscribe" && <LiaLaughBeamSolid/>}
                {status.status === "unsubscribe" && <LiaMehSolid/>}

            </div>
            <div className="container">
                {(status.status === null) && <button onClick={handleToUnSubChange}>Cancel</button>}
                {status.status === "subscribe" && <button  onClick={handleToUnSubChange}>Unsubscribe</button>}
                {(status.status === null || "unsubscribe") && <button className="sub" onClick={handleToSubChange}>Subscribe</button>}
        </div>
    </div>
)}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R13App />)
