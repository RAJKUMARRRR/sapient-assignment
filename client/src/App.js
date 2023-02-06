import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import ToolBar from "./components/ToolBar";
import AddCard from "./components/AddCard";
import CardsList from "./components/CardsList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [cards, setCards] = useState([])
  const [errors, setErrors] = useState([])
  const fetchCards = async () => {
    const { data } = await axios.get("http://localhost:3001/cards");
    setCards(data);
    setErrors([])
  };
  const createCard = async (payload) => {
    axios.post("http://localhost:3001/cards", payload)
    .then(fetchCards)
    .catch(err => {
      console.log('errors', err)
      if(err && err.response && err.response.data && err.response.data.errors && err.response.data.errors.details)
      setErrors(err.response.data.errors.details)
    })
  };
  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <Container>
      <ToolBar />
      {errors.length > 0 && <Alert key={"danger"} variant={"danger"}>
        {errors[0].message}
      </Alert>}
      <Stack gap={3}>
        <Row>
          <AddCard onAdd={createCard} />
        </Row>
        <Row>
          <h3>Existing Cards</h3>
          <CardsList list={cards} />
        </Row>{" "}
      </Stack>
    </Container>
  );
}
