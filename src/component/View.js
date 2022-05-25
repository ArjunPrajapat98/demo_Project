import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ADD_DATA } from "../features/counter/dataSlice";
import { ListGroupItem, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function View() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-nba.p.rapidapi.com/players",
      params: { page: "0", per_page: "25" },
      headers: {
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        "X-RapidAPI-Key": "5ff8afd798msh26fb333754e9d9fp12a1a4jsna7c6a035317b",
      },
    };

    axios(options)
      .then((res) => {
        dispatch(ADD_DATA(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const usedData = useSelector((state) => state.data.value);
  //   console.log("this is view data", usedData[0]);
  return (
    <div>
      {usedData[0]?.map((el, i) => {
        return (
          <div key={i}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{el.id}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{el.first_name}</ListGroupItem>
                <ListGroupItem>{el.last_name}</ListGroupItem>
                <ListGroupItem> Your Option </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Link to={`/table/${el.id}`}>
                  <Button variant="secondary">Click and Get Data</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
