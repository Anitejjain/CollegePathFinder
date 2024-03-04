import React from "react";
import "./Cards.css";

const Cards = ({heading, details}) => {
    return(
        <div className="card">
            <span>{heading}</span>
            <span>{details}</span>
        </div>
    )
}

export default Cards;