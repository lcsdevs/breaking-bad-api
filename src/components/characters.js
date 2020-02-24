import React from 'react'
import {
    Card,  CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';


const Characters = ({characters}) => {
    return (
        <div>
            <Container className="themed-container" fluid="xl">
                <Row xs="6" sm="3">
            {characters.map((character) => (
                <CardDeck>
                    <Card>
                    <CardImg top width="300%" src={character.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>Character</b>: {character.name}</CardTitle>
                        <CardSubtitle><b>Birthday</b>: {character.birthday}</CardSubtitle>
                        <CardText><b>Occupation</b>: {character.occupation+" "}</CardText>
                    </CardBody>
                    </Card>
                </CardDeck>
            ))}
                </Row>
            </Container>
        </div>
    )
};

export default Characters