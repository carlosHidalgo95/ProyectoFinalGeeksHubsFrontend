import React, {useEffect,useState } from 'react'
import "./Dishes.scss";

const API_URL= "https://proyectofinalgeekshubsbackend-production.up.railway.app/dishes/getAll";

const Dishes= () => {
const [dishes, setDishes] = useState([]);

useEffect(() => {
fetch(API_URL)
.then((res) => res.json())
.then(data => {
  console.log(data);
  setDishes(data);
})
}, [])
return(
    <div className="dishesContainer">
        a
    </div>
)

};

export default Dishes;