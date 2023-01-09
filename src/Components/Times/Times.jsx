import React, {useEffect,useState } from 'react'
import './Times.scss'
import { DatePicker } from 'antd';
import axios from "axios";

const API_URL= "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/getTimes";

const Times=({setSelectedTime})=>{
    const [times, setTimes] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [date, setDate] = useState([]);
    const [parrafoTimes,setParrafoTimes] = useState("");

    const timeHandler= (e) => {
        console.log("AAAAAAABBBBBBBBBBB:::::"+e.target.text);
        setSelectedTime(e.target.text);
    }

const dateHandler = (date, dateString) => {
    console.log(dateString);
    setDate(dateString);
    const body ={
        date:dateString,
    } 
    axios.post(API_URL, body)
    .then(response=>{
        console.log(response)
        if (response.data.length!=0) {
            setParrafoTimes("Horas disponibles:  ");
            setTimes(response.data);
        }else{
            setParrafoTimes("No hay horas disponibles en esta fecha");
        }
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
          
          <p>{parrafoTimes}</p>

          {times.map((time) => {
                console.log(time);
              return (
                <a onClick={timeHandler}>{time}  </a>
              )
              })}
    </div>
)
}

export default Times;