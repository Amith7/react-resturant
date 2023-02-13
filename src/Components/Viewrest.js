import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Restop from "./Restop";
import Restrev from "./Restrev";

function Viewrest() {
  const [restaurantlist, setRestaurantlist] = useState([]);
  const getRestaurant = async () => {
    //async await
    await fetch("/restaurants.json") //async call
      .then((data) =>
        data.json().then((result) => setRestaurantlist(result.restaurants))
      );
  };
  console.log(restaurantlist);
  useEffect(() => {
    getRestaurant();
  }, []);

  const urlParams = useParams();
  console.log(urlParams.id);

  const Viewrest = restaurantlist.find((item) => (item.id == urlParams.id));
  console.log(Viewrest);

  return (
    <div>
      {Viewrest ? (
        <Row className="m-4" >
          <Col md={3}>
            <Image src={Viewrest.photograph} fluid />
          </Col>
          <Col  md={8}>
             <h1>{Viewrest.name}</h1>
            <ListGroup>
              <ListGroup.Item variant="dark">Id : {Viewrest.id}</ListGroup.Item>
              <ListGroup.Item variant="dark">Name : {Viewrest.name}</ListGroup.Item>
              <ListGroup.Item variant="dark">cuisine_type: {Viewrest.cuisine_type}</ListGroup.Item>
              <ListGroup.Item variant="dark">Address : {Viewrest.address}</ListGroup.Item>
              <ListGroup.Item variant="dark">Neighborhood : {Viewrest.neighborhood}</ListGroup.Item>
            </ListGroup>
           <> <Restop op={Viewrest.operating_hours}/></>
           <> <Restrev  review={Viewrest.reviews}/> </>
          </Col>
        </Row>
      ) : (
        "null"
      )}
    </div>
  );
}

export default Viewrest;
