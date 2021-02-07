import React from "react";
import axios from "axios";

export default function Weather(props){
function handleResponse (response){
alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
}

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=76c8b94d63a7e1828617006132974e2d&units=metric`;

axios.get(apiUrl).then(handleResponse);
return <h2>Hello from Weather</h2>;
}