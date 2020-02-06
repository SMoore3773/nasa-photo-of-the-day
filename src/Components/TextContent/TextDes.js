import React from "react";
import './TextDes.css'

const TextDes = props => {

    return (
        <div className = 'explanBox'>
            <p className = 'explanCont'>{props.explan}</p>
            <a className ='hdLinkTxt' href = {props.hdImg}>HD Image</a>
        </div>
    );
}

export default TextDes;