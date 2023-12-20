import React, { useState } from "react";
import libri from "../Data/horror.json";
import Button from "react-bootstrap/Button";
import { Row, Col, Card, Form, } from "react-bootstrap";

const MyLibri = () => {
  const [query, setQuery] = useState("");
  const [filteredLibri, setFilteredLibri] = useState(libri);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filtered = libri.filter((libro) =>
      libro.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredLibri(filtered);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div  >
    <Row className="justify-content-center">
      <Col md={3}>
      <Form.Control 
        type="text"
        placeholder="Cerca libro..."
        value={query}
        onChange={handleSearch}
        style={{ margin: "20px 0" }}
      />
      </Col>
      </Row>
      <Row>
        {filteredLibri.map((libro, index) => (
          <Col key={index} onClick={() => handleCardClick(index)}style={{marginBottom:'20px'}}>
            <Card
              style={{
                width: "20rem",
                marginBottom: "10px",
                border: selectedCard === index ? "4px solid red" : "",
              }}
            >
              <Card.Img  src={libro.img} style={{maxHeight:'20rem'}}/>
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <p>Price {libro.price}</p>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyLibri;
