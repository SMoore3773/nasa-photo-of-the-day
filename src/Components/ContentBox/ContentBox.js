import React, {useEffect, useState} from "react";
import axios from 'axios';
import TextDes from '../TextContent/TextDes';
import Image from '../Image/Image';
import Header from '../Header/Header'

import './ContentBox.css'

const ContentBox = () => {
const [imgData, setImgData] = useState([]);
const [title, setTitle] = useState('APOD');
const [date, setDate] = useState();

const [year, setYear] = useState(2020);
const [month, setMonth] = useState(1);
const [day, setDay] = useState(1);
const dateStr = `&date=${year}-${month}-${day}`;


useEffect(() => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=YJEP9rCzIGrpzsvr9FBAQurWLIMR1KEWEq2f3HMd${dateStr}`)
        .then(response =>{

            console.log(response.data);
            setImgData(response.data);
            setTitle(response.data.title);
            
        })
        .catch(err => {
            console.log('Error:', err);
        });

}, [day])
console.log(imgData);
return (
    <div>
        <Header 
            key = {imgData.id}
            date = {date}
            setDate = {setDate}
            curDate = {imgData.date}
        />
        <div className = 'dateButtons'>
            <button onClick = {() => setDay(day -1)} className = 'previos'>Previos Day</button>
            <button className = 'random'>Random Day</button>
            <button onClick ={()=> setDay(day+1)} className = 'next'>Next Day</button>
              
        </div>
        <Image
            key = {imgData.id}
            img = {imgData.url}
            hdImg = {imgData.hdurl}
            date = {imgData.date} 
        />
            
        <h2>{imgData.title}</h2>

        <TextDes 
            key = {imgData.id}
            explan = {imgData.explanation}
            hdImg = {imgData.hdurl}




        />

        <p className='copyright'>{imgData.copyright}</p>
    </div>
);
}

export default ContentBox;

