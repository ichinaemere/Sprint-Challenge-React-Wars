import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StarWarsInfo(){

    const [info, setInfo] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response =>{
            console.log(response);
        })
        .catch(error =>{
            console.log("the data was not returned", error);
        })
    })

    return(
        <div></div>
    )
}