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

export class AddNotiteach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffid: "",
      noti_title: "",
      desc: "",
      teacherL: [],
    };
  }

  componentDidMount() {
    //STUDENT LIST
    axiosConfig
      .get("/approved_staff")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ teacherL: response.data.data });
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
      .post("/addSaffNotification", this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/notiteach/notiteachList");
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
                Add Teacher Notification
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/notiteach/notiteachList")}
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
                    <Label>Select Teacher</Label>
                    <CustomInput
                      type="select"
                      placeholder=""
                      name="staffid"
                      value={this.state.staffid}
                      onChange={this.changeHandler}
                    >
                      <option>Choose teacher ......</option>
                      {this.state.teacherL?.map((teach) => (
                        <option key={teach._id} value={teach._id}>
                          {teach.fullname}
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

export default AddNotiteach;
