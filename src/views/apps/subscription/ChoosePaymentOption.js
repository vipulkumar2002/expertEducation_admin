import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  CustomInput,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
//import { history } from "../../../history";
export default class AddUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
       status: "",
       selectedName: "",
       selectedFile: null,
     };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    const data = new FormData();
    data.append("usertype", this.state.usertype);
       for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    axios
      .post("")
      .then((response) => {
        console.log(response.data);
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
              Choose Payment Options
              </h1>
            </Col>
            {/* <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/users/user/allUsers")}
              >
                Back
              </Button>
            </Col> */}
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                <div class="form-check">
                  <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <Label class="form-check-label" for="flexRadioDefault1">
                  Cash
                  </Label>
                </div>
                <div class="form-check">
                  <Input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <Label class="form-check-label" for="flexRadioDefault2">
                  Cheque
                  </Label>
                </div>
                                {/* <div className="radio"> 
                    <Input type="radio" name="cash" id="radio-p-1"  />
                    <Label class="">Cash</Label>
                  </div>
                  <div className="radio">
                    <Input type="radio" name="cheque" id="radio-p-2" />
                    <Label  class="cr">Cheque</Label>
                  </div> */}
                  <div class="form-group">                
                    <Input 
                        type="text" 
                        class="form-control" 
                        name="cheque" 
                        placeholder="Enter your cheque number"
                    />
                  </div>
                  <Button.Ripple   
                        color="danger"
                        className="mr-1 mb-1 btn-danger-rgba" 
                        type="reset"
                        value="Reset">
                        Back
                  </Button.Ripple>
                  <Button.Ripple
                        color="primary"
                        type="submit"
                        className="mr-1 mb-1">
                        Next 
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
     
             
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col> */}
            
         
         
           
       
                  {/* <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1">
                    Add User
                  </Button.Ripple> */}
               
                  {/* <div class="form-group">
                  <button type="submit" class="btn btn-outline-primary">Back</button>
                 <br/> 
               <button type="submit" class="btn btn-primary">Next</button></div> */}
                
              
   








// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <title>WeeBuy - Inventory Management Solution</title>
//     <!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
//     <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
//     <!--[if lt IE 11]>
// 		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
// 		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
// 		<![endif]-->
//     <!-- Meta -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="description" content="" />
//     <meta name="keywords" content="">
//     <meta name="author" content="" />
//     <script>
//         (function (h, o, t, j, a, r) {
//             h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
//             h._hjSettings = { hjid: 1629436, hjsv: 6 };
//             a = o.getElementsByTagName('head')[0];
//             r = o.createElement('script'); r.async = 1;
//             r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//             a.appendChild(r);
//         })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
//     </script>
//     <!-- Favicon icon -->
//     <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
//     <!-- fontawesome icon -->
//     <link rel="stylesheet" href="assets/fonts/fontawesome/css/fontawesome-all.min.css">
//     <!-- animation css -->
//     <link rel="stylesheet" href="assets/plugins/animation/css/animate.min.css">
//     <!-- notification css -->
//     <link rel="stylesheet" href="assets/plugins/notification/css/notification.min.css">
//     <!-- vendor css -->
//     <link rel="stylesheet" href="assets/css/style.css">
//     <!-- custom css -->
//     <link rel="stylesheet" href="assets/css/custom.css">
// </head>

// <body>
//     <!-- [ Pre-loader ] start -->
//     <div class="loader-bg">
//         <div class="loader-track">
//             <div class="loader-fill"></div>
//         </div>
//     </div>
//     <!-- [ Pre-loader ] End -->

//     <!-- [ navigation menu ] start -->
//     <nav class="pcoded-navbar menu-light">
//         <div class="navbar-wrapper">
//             <div class="navbar-brand header-logo">
//                 <a href="index.html" class="b-brand">
//                     <div class="b-bg"></div>
//                     <span class="b-title">
//                         WeeBuy
//                     </span>
//                 </a>
//                 <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
//             </div>
//             <div class="navbar-content scroll-div">
//                 <ul class="nav pcoded-inner-navbar">
//                     <li class="nav-item pcoded-menu-caption">
//                         <label>Navigation</label>
//                     </li>
//                     <li class="nav-item active">
//                         <a href="index.html" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
//                     </li>
//                     <li class="nav-item">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-briefcase"></i></span><span
//                                 class="pcoded-mtext">Store</span></a>
//                     </li>
//                     <li class="nav-item pcoded-hasmenu">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-phone"></i></span><span class="pcoded-mtext">Contacts</span></a>
//                         <ul class="pcoded-submenu">
//                             <li><a href="javascript:void(0)">Add Employee</a></li>
//                             <li><a href="javascript:void(0)">Employee List</a></li>
//                             <li><a href="javascript:void(0)">Add Customer</a></li>
//                             <li><a href="javascript:void(0)">Customer List</a></li>
//                             <li><a href="javascript:void(0)">Add Supplier</a></li>
//                             <li><a href="javascript:void(0)">Supplier List</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav-item pcoded-hasmenu">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-box"></i></span><span class="pcoded-mtext">Inventory</span></a>
//                         <ul class="pcoded-submenu">
//                             <li><a href="javascript:void(0)">Add New Product</a></li>
//                             <li><a href="javascript:void(0)">Product List</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav-item pcoded-hasmenu">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-package"></i></span><span class="pcoded-mtext">Orders</span></a>
//                         <ul class="pcoded-submenu">
//                             <li><a href="javascript:void(0)">New Orders</a></li>
//                             <li><a href="javascript:void(0)">Order List</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav-item pcoded-hasmenu">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-file-plus"></i></span><span
//                                 class="pcoded-mtext">Billing</span></a>
//                         <ul class="pcoded-submenu">
//                             <li><a href="javascript:void(0)">Create Invoice</a></li>
//                             <li><a href="javascript:void(0)">Invoice List</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav-item pcoded-hasmenu">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-shopping-cart"></i></span><span
//                                 class="pcoded-mtext">Purchase</span></a>
//                         <ul class="pcoded-submenu">
//                             <li><a href="javascript:void(0)">New Purchase Order</a></li>
//                             <li><a href="javascript:void(0)">Purchase Order List</a></li>
//                             <li><a href="javascript:void(0)">Add New Invoice</a></li>
//                             <li><a href="javascript:void(0)">Invoice List</a></li>
//                         </ul>
//                     </li>
//                     <li class="nav-item pcoded-hasmenu">
//                         <a href="javascript:void(0)" class="nav-link"><span class="pcoded-micon"><i
//                                     class="feather icon-file-text"></i></span><span
//                                 class="pcoded-mtext">Reports</span></a>
//                         <ul class="pcoded-submenu">
//                             <li><a href="javascript:void(0)">By Sales</a></li>
//                             <li><a href="javascript:void(0)">By Product</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
//     <!-- [ navigation menu ] end -->

//     <!-- [ Header ] start -->
//     <header class="navbar pcoded-header navbar-expand-lg navbar-light">
//         <div class="m-header">
//             <a class="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
//             <a href="index.html" class="b-brand">
//                 <div class="b-bg"></div>
//                 <span class="b-title">WeeBuy</span>
//             </a>
//         </div>
//         <a class="mobile-menu" id="mobile-header" href="#!">
//             <i class="feather icon-more-horizontal"></i>
//         </a>
//         <div class="collapse navbar-collapse">
//             <ul class="navbar-nav mr-auto">
//                 <li><a href="#!" class="full-screen" onclick="javascript:toggleFullScreen()"><i
//                             class="feather icon-maximize"></i></a></li>
//                 <li class="nav-item">
//                     <span>Inventory Management Solution</span>
//                 </li>
//             </ul>
//             <ul class="navbar-nav ml-auto">
//                 <li>
//                     <div class="dropdown">
//                         <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
//                                 class="icon feather icon-bell"></i></a>
//                         <div class="dropdown-menu dropdown-menu-right notification">
//                             <div class="noti-head">
//                                 <h6 class="d-inline-block m-b-0">Notifications</h6>
//                                 <div class="float-right">
//                                     <a href="#!" class="m-r-10">mark as read</a>
//                                     <a href="#!">clear all</a>
//                                 </div>
//                             </div>
//                             <ul class="noti-body">
//                                 <li class="n-title">
//                                     <p class="m-b-0">NEW</p>
//                                 </li>
//                                 <li class="notification">
//                                     <div class="media">
//                                         <img class="img-radius" src="assets/images/user/avatar-1.jpg"
//                                             alt="Generic placeholder image">
//                                         <div class="media-body">
//                                             <p><strong>John Doe</strong><span class="n-time text-muted"><i
//                                                         class="icon feather icon-clock m-r-10"></i>30 min</span></p>
//                                             <p>New ticket Added</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li class="n-title">
//                                     <p class="m-b-0">EARLIER</p>
//                                 </li>
//                                 <li class="notification">
//                                     <div class="media">
//                                         <img class="img-radius" src="assets/images/user/avatar-2.jpg"
//                                             alt="Generic placeholder image">
//                                         <div class="media-body">
//                                             <p><strong>Joseph William</strong><span class="n-time text-muted"><i
//                                                         class="icon feather icon-clock m-r-10"></i>30 min</span></p>
//                                             <p>Prchace New Theme and make payment</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li class="notification">
//                                     <div class="media">
//                                         <img class="img-radius" src="assets/images/user/avatar-3.jpg"
//                                             alt="Generic placeholder image">
//                                         <div class="media-body">
//                                             <p><strong>Sara Soudein</strong><span class="n-time text-muted"><i
//                                                         class="icon feather icon-clock m-r-10"></i>30 min</span></p>
//                                             <p>currently login</p>
//                                         </div>
//                                     </div>
//                                 </li>
//                             </ul>
//                             <div class="noti-footer">
//                                 <a href="#!">show all</a>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//                 <li>
//                     <div class="dropdown drp-user">
//                         <a href="#" class="dropdown-toggle" data-toggle="dropdown">
//                             <img src="assets/images/user/avatar-1.jpg" class="img-radius" alt="User-Profile-Image">
//                         </a>
//                         <div class="dropdown-menu dropdown-menu-right profile-notification">
//                             <div class="pro-head">
//                                 <img src="assets/images/user/avatar-1.jpg" class="img-radius" alt="User-Profile-Image">
//                                 <span>John Doe</span>
//                                 <a href="auth-signin.html" class="dud-logout" title="Logout">
//                                     <i class="feather icon-log-out"></i>
//                                 </a>
//                             </div>
//                             <ul class="pro-body">
//                                 <li><a href="javascript:void(0);" class="dropdown-item"><i
//                                             class="feather icon-settings"></i> Account Settings</a></li>
//                                 <li><a href="javascript:void(0);" class="dropdown-item"><i
//                                             class="feather icon-package"></i> My Subscription</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     </header>
//     <!-- [ Header ] end -->

//     <!-- [ chat user list ] start -->
//     <section class="header-user-list">
//         <div class="h-list-header">
//             <div class="input-group">
//                 <input type="text" id="search-friends" class="form-control" placeholder="Search Friend . . .">
//             </div>
//         </div>
//         <div class="h-list-body">
//             <a href="#!" class="h-close-text"><i class="feather icon-chevrons-right"></i></a>
//             <div class="main-friend-cont scroll-div">
//                 <div class="main-friend-list">
//                     <div class="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image ">
//                             <div class="live-status">3</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Josephin Doe<small class="d-block text-c-green">Typing . . </small>
//                             </h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Lary Doe<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="3" data-status="online" data-username="Alice">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alice<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alia<small class="d-block text-muted">10 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Suzen<small class="d-block text-muted">15 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image ">
//                             <div class="live-status">3</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Josephin Doe<small class="d-block text-c-green">Typing . . </small>
//                             </h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Lary Doe<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="3" data-status="online" data-username="Alice">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alice<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alia<small class="d-block text-muted">10 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Suzen<small class="d-block text-muted">15 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image ">
//                             <div class="live-status">3</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Josephin Doe<small class="d-block text-c-green">Typing . . </small>
//                             </h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Lary Doe<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="3" data-status="online" data-username="Alice">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alice<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alia<small class="d-block text-muted">10 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Suzen<small class="d-block text-muted">15 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image ">
//                             <div class="live-status">3</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Josephin Doe<small class="d-block text-c-green">Typing . . </small>
//                             </h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Lary Doe<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="3" data-status="online" data-username="Alice">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alice<small class="d-block text-c-green">online</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image">
//                             <div class="live-status">1</div>
//                         </a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Alia<small class="d-block text-muted">10 min ago</small></h6>
//                         </div>
//                     </div>
//                     <div class="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
//                         <a class="media-left" href="#!"><img class="media-object img-radius"
//                                 src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"></a>
//                         <div class="media-body">
//                             <h6 class="chat-header">Suzen<small class="d-block text-muted">15 min ago</small></h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     <!-- [ chat user list ] end -->

//     <!-- [ chat message ] start -->
//     <section class="header-chat">
//         <div class="h-list-header">
//             <h6>Josephin Doe</h6>
//             <a href="#!" class="h-back-user-list"><i class="feather icon-chevron-left"></i></a>
//         </div>
//         <div class="h-list-body">
//             <div class="main-chat-cont scroll-div">
//                 <div class="main-friend-chat">
//                     <div class="media chat-messages">
//                         <a class="media-left photo-table" href="#!"><img
//                                 class="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-2.jpg"
//                                 alt="Generic placeholder image"></a>
//                         <div class="media-body chat-menu-content">
//                             <div class="">
//                                 <p class="chat-cont">hello Datta! Will you tell me something</p>
//                                 <p class="chat-cont">about yourself?</p>
//                             </div>
//                             <p class="chat-time">8:20 a.m.</p>
//                         </div>
//                     </div>
//                     <div class="media chat-messages">
//                         <div class="media-body chat-menu-reply">
//                             <div class="">
//                                 <p class="chat-cont">Ohh! very nice</p>
//                             </div>
//                             <p class="chat-time">8:22 a.m.</p>
//                         </div>
//                     </div>
//                     <div class="media chat-messages">
//                         <a class="media-left photo-table" href="#!"><img
//                                 class="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-2.jpg"
//                                 alt="Generic placeholder image"></a>
//                         <div class="media-body chat-menu-content">
//                             <div class="">
//                                 <p class="chat-cont">can you help me?</p>
//                             </div>
//                             <p class="chat-time">8:20 a.m.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="h-list-footer">
//             <div class="input-group">
//                 <input type="file" class="chat-attach" style="display:none">
//                 <a href="#!" class="input-group-prepend btn btn-success btn-attach">
//                     <i class="feather icon-paperclip"></i>
//                 </a>
//                 <input type="text" name="h-chat-text" class="form-control h-send-chat" placeholder="Write hear . . ">
//                 <button type="submit" class="input-group-append btn-send btn btn-primary">
//                     <i class="feather icon-message-circle"></i>
//                 </button>
//             </div>
//         </div>
//     </section>
//     <!-- [ chat message ] end -->

//     <!-- [ Main Content ] start -->
//     <div class="pcoded-main-container">
//         <div class="pcoded-wrapper">
//             <div class="pcoded-content">
//                 <div class="pcoded-inner-content">
//                     <!-- [ breadcrumb ] start -->
//                     <div class="page-header">
//                         <div class="page-block">
//                             <div class="row align-items-center">
//                                 <div class="col-md-12">
//                                     <div class="page-header-title">
//                                         <h5 class="m-b-10">Choose Payment Options</h5>
//                                     </div>
//                                     <ul class="breadcrumb">
//                                         <li class="breadcrumb-item"><a href="index.html"><i
//                                                     class="feather icon-home"></i></a></li>
//                                         <li class="breadcrumb-item"><a href="#!">Subscription</a></li>
//                                         <li class="breadcrumb-item"><a href="#!">Choose Payment Options</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <!-- [ breadcrumb ] end -->
//                     <div class="main-body">
//                         <div class="page-wrapper subscription">
//                             <div class="row">
//                                 <div class="col-sm-12">
//                                     <div class="card">
//                                         <div class="card-body">
//                                             <h3>Choose Payment Options</h3>
//                                             <hr />
//                                             <div class="row">
//                                                 <div class="col-sm-6">
//                                                     <div class="form-group">
//                                                         <div class="radio radio-primary d-inline">
//                                                             <input type="radio" name="radio-p-1" id="radio-p-1" checked="">
//                                                             <label for="radio-p-1" class="cr"><i class="fas fa-money-bill-wave"></i> Cash</label>
//                                                         </div>
//                                                     </div>
//                                                     <div class="form-group">
//                                                         <div class="radio radio-primary d-inline">
//                                                             <input type="radio" name="radio-p-1" id="radio-p-2">
//                                                             <label for="radio-p-2" class="cr"><i class="fas fa-money-check-alt"></i> Cheque</label>
//                                                         </div>
//                                                     </div>
//                                                     <div class="form-group">                
//                                                         <input type="text" class="form-control" name="cheque" placeholder="Enter your cheque number">
//                                                     </div>
//                                                     <div class="form-group text-right">
//                                                         <button type="submit" class="btn btn-outline-primary">Back</button>
//                                                         <button type="submit" class="btn btn-primary">Next</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <!-- [ Main Content ] end -->

//     <!-- Warning Section start -->
//     <!-- Older IE warning message -->
//     <!--[if lt IE 11]>
//         <div class="ie-warning">
//             <h1>Warning!!</h1>
//             <p>You are using an outdated version of Internet Explorer, please upgrade
//                <br/>to any of the following web browsers to access this website.
//             </p>
//             <div class="iew-container">
//                 <ul class="iew-download">
//                     <li>
//                         <a href="http://www.google.com/chrome/">
//                             <img src="assets/images/browser/chrome.png" alt="Chrome">
//                             <div>Chrome</div>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.mozilla.org/en-US/firefox/new/">
//                             <img src="assets/images/browser/firefox.png" alt="Firefox">
//                             <div>Firefox</div>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="http://www.opera.com">
//                             <img src="assets/images/browser/opera.png" alt="Opera">
//                             <div>Opera</div>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.apple.com/safari/">
//                             <img src="assets/images/browser/safari.png" alt="Safari">
//                             <div>Safari</div>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
//                             <img src="assets/images/browser/ie.png" alt="">
//                             <div>IE (11 & above)</div>
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//             <p>Sorry for the inconvenience!</p>
//         </div>
//     <![endif]-->
//     <!-- Warning Section Ends -->

//     <!-- Required Js -->
//     <script src="assets/js/vendor-all.min.js"></script>
//     <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
//     <script src="assets/js/pcoded.min.js"></script>
//     <!-- amchart js -->
//     <script src="assets/plugins/amchart/js/amcharts.js"></script>
//     <script src="assets/plugins/amchart/js/gauge.js"></script>
//     <script src="assets/plugins/amchart/js/serial.js"></script>
//     <script src="assets/plugins/amchart/js/light.js"></script>
//     <script src="assets/plugins/amchart/js/pie.min.js"></script>
//     <script src="assets/plugins/amchart/js/ammap.min.js"></script>
//     <script src="assets/plugins/amchart/js/usaLow.js"></script>
//     <script src="assets/plugins/amchart/js/radar.js"></script>
//     <script src="assets/plugins/amchart/js/worldLow.js"></script>
//     <!-- notification Js -->
//     <script src="assets/plugins/notification/js/bootstrap-growl.min.js"></script>

//     <!-- dashboard-custom js -->
//     <script src="assets/js/pages/dashboard-custom.js"></script>

// </body>

// </html>