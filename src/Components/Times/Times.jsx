import React, {useEffect,useState } from 'react'
import './Times.scss'
import { DatePicker } from 'antd';
import axios from "axios";

const API_URL= "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/getTimes";

const Times=({setSelectedDate,setSelectedTime})=>{
    const [times, setTimes] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [date, setDate] = useState([]);
    const [parrafoTimes,setParrafoTimes] = useState("");

    const timeHandler= (e) => {
        setSelectedTime(e.target.text);
    }

const dateHandler = (date, dateString) => {
    setDate(dateString);
    setSelectedDate(dateString);
    const body ={
        date:dateString,
    } 
    axios.post(API_URL, body)
    .then(response=>{
        if (response.data.length!=0) {
            setParrafoTimes("Horas disponibles:  ");
            setTimes(response.data);
        }else{
            setParrafoTimes("No hay horas disponibles en esta fecha");
        }
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
          
          <p>{parrafoTimes}</p>

          {times.map((time) => {
              return (
                <a onClick={timeHandler}>{time}  </a>
              )
              })}
    </div>
)
}

export default Times;