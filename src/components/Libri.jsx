import React from "react";
import libri from '../Data/horror.json';
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const MyLibri=() => {

    return(
       
        
            <Row>
            {libri.map(libri => (
                <Col  >
                <Card style={{ width: '20rem' }}>
                <Card.Img src={libri.img}/>
                <Card.Body>
                  <Card.Title>{libri.title}</Card.Title>
                  <p>Price {libri.price}</p>
                  
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
              </Col>
             

            ))}
            
            
            </Row>
    )
}

export default MyLibri;
   

