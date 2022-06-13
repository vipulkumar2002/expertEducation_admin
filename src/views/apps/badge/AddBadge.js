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
export class AddBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_Id: "",
      lavel_Id: "",
      studentList: [],
      levelList: [],
    };
  }

  async componentDidMount() {
    //Student List
    axiosConfig
      .get("/allusers")
      .then((response) => {
        console.log(response);
        this.setState({ studentList: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    //Badge List
    axiosConfig
      .get("/allLavel")
      .then((response) => {
        console.log(response);
        this.setState({ levelList: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //     this.setState({ selectedName: event.target.files[0].name });
  //     console.log(event.target.files[0]);
  //   };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axiosConfig
      .post("http://65.0.80.5:5000/api/user/addbatchn", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/badge/badgeList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Badge
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/badge/BadgeList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Student List</Label>
                  <CustomInput
                    type="select"
                    name="student_Id"
                    value={this.state.student_Id}
                    onChange={this.changeHandler}
                  >
                    <option>Select Student .....</option>
                    {this.state.studentList.map((studentL) => (
                      <option key={studentL._id} value={studentL._id}>
                        {studentL.fullname}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <Label>Select Level</Label>
                  <CustomInput
                    type="select"
                    name="lavel_Id"
                    value={this.state.lavel_Id}
                    onChange={this.changeHandler}
                  >
                    <option>Select Level .....</option>
                    {this.state.levelList.map((levelL) => (
                      <option key={levelL._id} value={levelL._id}>
                        {levelL.level}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Badge
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddBadge;
