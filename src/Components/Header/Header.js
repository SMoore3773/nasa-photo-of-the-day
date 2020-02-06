import React, {useState} from "react";
import './Header.css'

const Header = props => {
console.log(props.curDate)

    return (
        <div className ='HeaderBox'>
            <h1 className ='title'>Astronomy Picture of the Day</h1>
            <p className = 'date'>{props.curDate}</p>

        </div>
    );
}

export default Header;