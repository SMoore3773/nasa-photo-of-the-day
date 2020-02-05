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

useEffect(() => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=YJEP9rCzIGrpzsvr9FBAQurWLIMR1KEWEq2f3HMd&date=2020-02-03`)
        .then(response =>{

            console.log(response.data);
            setImgData(response.data);
            setTitle(response.data.title);
            setDate(response.data.date);
        })
        .catch(err => {
            console.log('Error:', err);
        });

}, [title])
console.log(imgData);
return (
    <div>
    <Header />
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
     <p>copyright</p>
    </div>
);
}

export default ContentBox;

