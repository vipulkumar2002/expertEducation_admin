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
export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catName: "",
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
    data.append("catName", this.state.catName);
    if (this.state.selectedFile !== null) {
      data.append("icon", this.state.selectedFile, this.state.selectedName);
    }
    axiosConfig
      .post("/addCat", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/category/categoryList");
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
                Add New Category
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/category/categoryList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Category Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Category"
                    name="catName"
                    value={this.state.catName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6">
                  <Label>Image</Label>

                  <CustomInput type="file" onChange={this.onChangeHandler} />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Category
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddCategory;
