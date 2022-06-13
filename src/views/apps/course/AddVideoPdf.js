import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Label,
  Form,
  CustomInput,
} from "reactstrap";
import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../axiosConfig";
import Swal from "sweetalert2";

class AddVideoPdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoTitle: "",
      course: "",
      teacher: "",
      video_image: "",
      video_file: "",
      pdf_title: "",
      pdf_image: "",
      pdf_file: "",
      selectedFile: null,
      selectedName: "",
      selectedFile1: null,
      selectedName1: "",
      selectedFile2: null,
      selectedName2: "",
      selectedFile3: null,
      selectedName3: "",
      courseList: [],
      teacherList: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonecoursep/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    //course List
    axiosConfig
      .get("/allcourse")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ courseList: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    // Teacher List
    axiosConfig
      .get("/allstaff")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ teacherList: response.data.data });
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
  onChangeHandler1 = (event) => {
    this.setState({ selectedFile1: event.target.files[0] });
    this.setState({ selectedName1: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler2 = (event) => {
    this.setState({ selectedFile2: event.target.files[0] });
    this.setState({ selectedName2: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler3 = (event) => {
    this.setState({ selectedFile3: event.target.files[0] });
    this.setState({ selectedName3: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler1 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("videoTitle", this.state.videoTitle);
    data.append("course", this.state.course);
    data.append("teacher", this.state.teacher);
    if (this.state.selectedFile !== null) {
      data.append(
        "video_image",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    if (this.state.selectedFile1 !== null) {
      data.append(
        "video_file",
        this.state.selectedFile1,
        this.state.selectedName1
      );
    }
    axiosConfig
      .post(`/addvideo`, data, {
        headers: {
          "ad-token": localStorage.getItem("ad-token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.reponse);
      });
  };
  submitHandler1 = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("pdf_title", this.state.pdf_title);
    data.append("course", this.state.course);
    data.append("teacher", this.state.teacher);
    if (this.state.selectedFile2 !== null) {
      data.append(
        "pdf_image",
        this.state.selectedFile2,
        this.state.selectedName2
      );
    }
    if (this.state.selectedFile3 !== null) {
      data.append(
        "pdf_file",
        this.state.selectedFile3,
        this.state.selectedName3
      );
    }
    axiosConfig
      .post("/addpdf", data, {
        headers: {
          "ad-token": localStorage.getItem("ad-token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Course Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/course/courseList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data?.course_image}
                  alt="Google Home"
                  height="200"
                  width="250"
                />
              </Col>
              <Col md="7" sm="12">
                <h3>{this.state.data?.course_title}</h3>
                <h6 className="">by {this.state.data?.teacher?.fullname}</h6>
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary"></h3>
                </div>
                <hr />
                <h4>Short Description </h4>
                <h6>{this.state.data?.desc}</h6>
                <hr />
                <h4>Long Description </h4>
                <h6>{this.state.data?.long_desc}</h6>
                <hr />
                <h4>Course Popularity</h4>
                <h6>{this.state.data?.popularity}</h6>
                <hr />
                <h4>Category </h4>
                <h6>{this.state.data?.category_id}</h6>
                <hr />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <Form onSubmit={this.submitHandler}>
            <Row className="p-3">
              <Col lg="12" md="6" sm="12">
                <h2 className="text-center m-5">UPLOAD VIDEO</h2>
                <Row>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Course List</Label>
                      <CustomInput
                        type="select"
                        name="course"
                        value={this.state.course}
                        onChange={this.changeHandler}
                      >
                        <option>Select Course .....</option>
                        {this.state.courseList.map((courseL) => (
                          <option key={courseL._id} value={courseL._id}>
                            {courseL.course_title}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Teacher List</Label>
                      <CustomInput
                        type="select"
                        name="teacher"
                        value={this.state.teacher}
                        onChange={this.changeHandler}
                      >
                        <option>Select Teacher .....</option>
                        {this.state.teacherList.map((teacherL) => (
                          <option key={teacherL._id} value={teacherL._id}>
                            {teacherL.fullname}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Video Title</Label>
                      <Input
                        type="text"
                        placeholder="Video Title"
                        name="videoTitle"
                        value={this.state.videoTitle}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Video Image</Label>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Video File</Label>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler1}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col
                lg="12"
                md="12"
                sm="12"
                className="d-flex justify-content-center align-items-center"
              >
                <Button type="submit" color="primary">
                  {" "}
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card>
          <Form onSubmit={this.submitHandler1}>
            <Row className="p-2">
              <Col lg="12" md="6" sm="12">
                <h2 className="text-center m-5">UPLOAD PDF</h2>
                <Row>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Course List</Label>
                      <CustomInput
                        type="select"
                        name="course"
                        value={this.state.course}
                        onChange={this.changeHandler1}
                      >
                        <option>Select Course .....</option>
                        {this.state.courseList.map((courseL) => (
                          <option key={courseL._id} value={courseL._id}>
                            {courseL.course_title}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>Teacher List</Label>
                      <CustomInput
                        type="select"
                        name="teacher"
                        value={this.state.teacher}
                        onChange={this.changeHandler1}
                      >
                        <option>Select Teacher .....</option>
                        {this.state.teacherList.map((teacherL) => (
                          <option key={teacherL._id} value={teacherL._id}>
                            {teacherL.fullname}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>PDF Title</Label>
                      <Input
                        type="text"
                        placeholder="Video Title"
                        name="pdf_title"
                        value={this.state.pdf_title}
                        onChange={this.changeHandler1}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>PDF Image</Label>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler2}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <FormGroup>
                      <Label>PDF File</Label>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler3}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col
                lg="12"
                md="12"
                sm="12"
                className="d-flex justify-content-center align-items-center"
              >
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </React.Fragment>
    );
  }
}
export default AddVideoPdf;
