import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
  FormGroup,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";

export class AddNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      noti_title: "",
      desc: "",
      studentL: [],
    };
  }

  componentDidMount() {
    //STUDENT LIST
    axiosConfig
      .get("/allusers")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ studentL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axiosConfig
      .post("/addUserNotification", this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/notifications/notification");
      })
      .catch((error) => {
        console.log(error);
        swal("Error!", "Error Received", "error");
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Student Notification
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/notifications/notification")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Notification Title</Label>
                    <Input
                      type="text"
                      placeholder="Title"
                      name="noti_title"
                      value={this.state.noti_title}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Select Student</Label>
                    <CustomInput
                      type="select"
                      placeholder="Last Name"
                      name="userid"
                      value={this.state.userid}
                      onChange={this.changeHandler}
                    >
                      <option>Choose Student ......</option>
                      {this.state.studentL?.map((stud) => (
                        <option key={stud._id} value={stud._id}>
                          {stud.fullname}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      placeholder="Description"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Add
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddNotification;
