import React from "react";
import "../../../assets/style/style.css";
import logo1 from "../../../assets/img/landing/images.png";
import logo2 from "../../../assets/img/landing/cstomer.png";
import logo3 from "../../../assets/img/landing/subscription.png";
import logo4 from "../../../assets/img/landing/invenory.png";
import logo5 from "../../../assets/img/landing/automate.png";
import logo6 from "../../../assets/img/landing/order.png";
import logo7 from "../../../assets/img/landing/purchase.png";
import logo8 from "../../../assets/img/landing/visibility.png";
import logo9 from "../../../assets/img/landing/location.png";
//import w13 from "../assets/img/w13.jpg";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardTitle,
  CardText,
} from "reactstrap";

const About = () => {
  return (
    <div>
      <Container className="pt-5 ">
        <Row>
          <Col lg="12" className="d-flex justify-content-center pb-5">
            <h1>Why Use Buynaa Stock Management Solution ?</h1>
          </Col>
        </Row>
        <CardGroup className="pcard">
          <Row>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo2}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo3}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo4}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo5}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo6}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo7}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo8}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="p-3">
                <img
                  src={logo9}
                  alt=""
                  style={{ width: "90px", height: "12vh" }}
                />
                <CardBody>
                  <CardTitle tag="h5">Role Based Accessibility</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default About;
