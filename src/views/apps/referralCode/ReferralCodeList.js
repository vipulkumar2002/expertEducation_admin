import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";

class ReferralCodeList extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 90,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Image",
        field: "userimg",
        filter: false,
        width: 120,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <img
                className="rounded-circle  mr-4"
                src={params.data.userimg}
                alt=" brand"
                height="40"
                width="40"
              />
            </div>
          );
        },
      },

      {
        headerName: "Name",
        field: "fullname",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div className="ml-1 mr-4">
              <span>{params.data.fullname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "email",
        filter: true,
        width: 220,
        cellRendererFramework: params => {
          return (
            <div className="ml-1 mr-4">
              <span>{params.data.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile No.",
        field: "mobile",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return (
            <div className="ml-1 mr-4">
              <span>{params.data.mobile}</span>
            </div>
          );
        },
      },
      {
        headerName: "Referral Code",
        field: "referral_code",
        filter: true,
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className=" mr-2">
              <span>{params.data.referral_code}</span>
            </div>
          );
        },
      },
      //   {
      //     headerName: "Status",
      //     field: "status",
      //     filter: true,
      //     width: 150,
      //     cellRendererFramework: params => {
      //       return params.value === "Pending" ? (
      //         <div className="badge badge-pill badge-warning ml-2">
      //           {params.data.status}
      //         </div>
      //       ) : params.value === "Confirm" ? (
      //         <div className="badge badge-pill badge-success ml-2">
      //           {params.data.status}
      //         </div>
      //       ) : null;
      //     },
      //   },
      //   {
      //     headerName: "Actions",
      //     field: "transactions",
      //     width: 150,
      //     cellRendererFramework: params => {
      //       return (
      //         <div className="actions cursor-pointer">
      //           <Button
      //             color="primary"
      //             bsSize="small"
      //             className="buuton"
      //             onClick={() =>
      //               axiosConfig
      //                 .get(`/cnfrm_withdrawal/${params.data._id}`)
      //                 .then(response => {
      //                   console.log(response.data);
      //                 })
      //                 .catch(error => {
      //                   console.log(error);
      //                 })
      //             }
      //           >
      //             Conform
      //           </Button>
      //         </div>
      //       );
      //     },
      //   },
      //   {
      //     headerName: "Actions",
      //     field: "transactions",
      //     width: 100,
      //     cellRendererFramework: params => {
      //       return (
      //         <div className="actions cursor-pointer">
      //           {/* <Edit
      //             className="mr-50"
      //             size="20px"
      //             color="blue"
      //             onClick={() =>
      //               history.push(`/app/course/editCourse/${params.data._id}`)
      //             }
      //           /> */}
      //           {/* <Eye
      //             className="mr-50"
      //             size="20px"
      //             color="blue"
      //             onClick={() =>
      //               history.push(`/app/course/viewCourse/${params.data._id}`)
      //             }
      //           /> */}
      //           <Trash2
      //             size="20px"
      //             color="red"
      //             onClick={() => {
      //               let selectedData = this.gridApi.getSelectedRows();
      //               this.runthisfunction(params.data._id);
      //               this.gridApi.updateRowData({ remove: selectedData });
      //             }}
      //           />
      //         </div>
      //       );
      //     },
      //   },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get("/allusers").then(response => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/deleteuser/${id}`).then(response => {
      console.log(response);
    });
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Referral Code List
                </h1>
              </Col>
              {/* <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/course/addCourse")}
                >
                  Add New Course
                </Button>
              </Col> */}
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={e => this.updateSearchQuery(e.target.value)}
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default ReferralCodeList;
