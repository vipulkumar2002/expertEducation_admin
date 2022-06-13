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

export class EditTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      password: "",
      cnfmPassword: "",
      image: "",
      gender: "",
      dob: "",
      state: "",
      city: "",
      institute: "",
      approvedstatus: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonestaff/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          password: response.data.data.password,
          cnfmPassword: response.data.data.cnfmPassword,
          image: response.data.data.image,
          gender: response.data.data.gender,
          dob: response.data.data.dob,
          state: response.data.data.state,
          city: response.data.data.city,
          institute: response.data.data.institute,
          institute: response.data.data.institute,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ approvedstatus: e.target.value });
  };
  changeHandler3 = (e) => {
    this.setState({ gender: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler2 = (e) => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfmPassword);
    data.append("gender", this.state.gender);
    data.append("dob", this.state.dob.toString());
    data.append("state", this.state.state);
    data.append("city", this.state.city);
    data.append("institute", this.state.institute);
    data.append("approvedstatus", this.state.approvedstatus);
    if (this.state.selectedFile !== null) {
      data.append("image", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/setting/${id}`, data)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        //this.props.history.push("/app/teacher/teacherList");
      })
      .catch((error) => {
        console.log(error.response);
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
                Edit Teacher
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/teacher/teacherList")}
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
                    <Label>Full Name</Label>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Image</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number</Label>
                    <Input
                      type="number"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.changeHandler2}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      name="cnfmPassword"
                      value={this.state.cnfmPassword}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-1 ">
                  <FormGroup>
                    <Label className="mb-1">Gender</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler3(e)}
                    >
                      <input
                        style={{ marginRight: "3px", fontWeight: 800 }}
                        type="radio"
                        name="gender"
                        value="Male"
                      />
                      <span style={{ marginRight: "20px", fontWeight: 800 }}>
                        Male
                      </span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="gender"
                        value="Female"
                      />
                      <span style={{ marginRight: "3px" }}>Female</span>
                    </div>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Birth Date</Label>
                    <Input
                      type="date"
                      placeholder="Birth Date"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={this.state.city}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>State</Label>
                    <Input
                      type="text"
                      placeholder="State"
                      name="state"
                      value={this.state.state}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Institute</Label>
                    <Input
                      type="text"
                      placeholder="Institute"
                      name="institute"
                      value={this.state.institute}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-1 ">
                  <FormGroup>
                    <Label className="mb-1">Approved Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px", fontWeight: 800 }}
                        type="radio"
                        name="approvedstatus"
                        value="true"
                      />
                      <span style={{ marginRight: "20px", fontWeight: 800 }}>
                        True
                      </span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="approvedstatus"
                        value="false"
                      />
                      <span style={{ marginRight: "3px" }}>False</span>
                    </div>
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

export default EditTeacher;
