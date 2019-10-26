import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard.js";
import { Container, Row } from 'reactstrap';

export default function StarWarsInfo(){

    const [info, setInfo] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response =>{
            console.log(response.data.results);
            setInfo(response.data.results);
        })
        .catch(error =>{
            console.log("the data was not returned", error);
        });
    }, [])

    return(
        <Container>
        <Row>
        {info.map(charInfo => {
            return(
                <StarWarsCard name={charInfo.name} birthyear={charInfo.birth_year} gender={charInfo.gender} mass={charInfo.mass}
                height={charInfo.height} hair={charInfo.hair_color} skin={charInfo.skin_color} eyes={charInfo.eye_color}/>
            )
        })}
        </Row>
        </Container>
    )
}