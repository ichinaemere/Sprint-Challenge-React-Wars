import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';

const StarWarsCard = (props) => {
  return (
    <Col xs="6" sm="4">
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          {/* <CardSubtitle>Birthyear: {props.birthyear}e</CardSubtitle> */}
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          <CardSubtitle>Mass: {props.mass}</CardSubtitle>
          <CardSubtitle>Height: {props.height}</CardSubtitle>
          <CardSubtitle>Hair: {props.hair}</CardSubtitle>
          <CardSubtitle>Skin: {props.skin}</CardSubtitle>
          <CardSubtitle>Eyes: {props.eyes}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarWarsCard;