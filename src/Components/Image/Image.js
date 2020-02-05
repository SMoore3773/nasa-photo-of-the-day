import React from "react";
import './Image.css';

const Image = props => {


    return (
        <div>
            <img src = {props.img} alt = {`Astronomy Picture of the Day for today`}/>

            
        </div>
    );
}

export default Image;