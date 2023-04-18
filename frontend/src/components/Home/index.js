import React from "react";
import axios from "axios";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {

  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <div
          id="pic"
          className="p-5 text-center bg-image mt-2"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/01/20/10/52/maintenance-1151312_960_720.png')",
            height: 350,
            width: 900,
            marginLeft: 300,
            marginRight : 300,
            borderRadius: 30,
          }}
        ></div>
      </header>
      <div className="cards">
        <Card className="post" style={{ width: "200", height : "150"}}>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="post" style={{ width: "200", height : "150"}}>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="post" style={{ width: "200", height : "150"}}>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="post" style={{ width: "200", height : "150"}}>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="post" style={{ width: "200", height : "150"}}>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="post" style={{ width: "200", height : "150"}}>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Home;
