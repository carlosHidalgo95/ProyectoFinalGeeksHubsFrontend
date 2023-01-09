import React, {useEffect,useState } from 'react'
import './Times.scss'
import { DatePicker } from 'antd';
import axios from "axios";

const API_URL= "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/getTimes";




const Times=()=>{
    const [times, setTimes] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [date, setDate] = useState([]);

    
    // let times=new Array();

const dateHandler = (date, dateString) => {
    console.log(dateString);
    setDate(dateString);
    const body ={
        date:dateString,
    } 
    axios.post(API_URL, body)
    .then(response=>{
        console.log(response)
        setTimes(response.data);
        // times=response.data;
        console.log(times);
})
};

    useEffect(() => {
        console.log(date);
        if(date.length!==0){
            axios.post(API_URL, `{"date":${date}}`)
            .then(response=>{
                console.log(response)
                times=response;
        })    
        }
 }, [])

return(
    <div className="timeBox">
          <DatePicker onChange={dateHandler}/>
          <br/>
          {times.map((time) => {
                console.log(time);
              return (
                <a >{time}  </a>
              )
              })}
    </div>
)
}

export default Times;