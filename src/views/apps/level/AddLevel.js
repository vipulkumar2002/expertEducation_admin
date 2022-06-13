import React, { Component } from "react";

import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
export class AddLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "",
      icon: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("level", this.state.level);
    if (this.state.selectedFile !== null) {
      data.append("icon", this.state.selectedFile, this.state.selectedName);
    }
    axiosConfig
      .post("/addlavel", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/level/levelList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Level
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/level/levelList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Level Title</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Enter Category"
                    name="level"
                    value={this.state.level}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6">
                  <Label>Image</Label>

                  <CustomInput
                    required
                    type="file"
                    onChange={this.onChangeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Level
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddLevel;
