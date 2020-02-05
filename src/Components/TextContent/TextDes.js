import React from "react";
import './TextDes.css'

const TextDes = props => {

    return (
        <div className = 'explanBox'>
            <p className = 'explanCont'>{props.explan}</p>
            <a href = {props.hdImg} className ='hdLinkTxt'>HD Image</a>
        </div>
    );
}

export default TextDes;