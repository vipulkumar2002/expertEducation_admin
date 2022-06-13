import React from "react";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import * as Icon from "react-feather";
import classnames from "classnames";
import ReactCountryFlag from "react-country-flag";
import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent";
//import { useAuth0 } from "../../../authServices/auth0/auth0Service"
import { history } from "../../../history";
import { IntlContext } from "../../../utility/context/Internationalization";
import axiosConfig from "../../../axiosConfig";

const handleNavigation = (e, path) => {
  e.preventDefault();
  history.push(path);
};

const UserDropdown = (props) => {
  // const { logout, isAuthenticated } = useAuth0()
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={(e) => handleNavigation(e, "/pages/profile/userProfile")}
      >
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>

      <DropdownItem divider />

      <DropdownItem
        tag="a"
        href="/pages/login"
        // onClick={(e) => {
        //   e.preventDefault();
        //   if () {
        //     return logout({
        //       returnTo:
        //         window.location.origin + process.env.REACT_APP_PUBLIC_PATH,
        //     });
        //   } else {
        //     history.push("/");
        //   }
        // }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span
          className="align-middle"
          onClick={(e) => {
            window.localStorage.removeItem("ad-token");
            window.location.push = "/pages/login";
            return false;
          }}
        >
          Log Out
        </span>
      </DropdownItem>
    </DropdownMenu>
  );
};

class NavbarUser extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      admin: {},
    };
  }
  state = {
    // navbarSearch: false,
    langDropdown: false,
    suggestions: [],
  };

  componentDidMount() {
    axiosConfig
      .get("/viewoneAdmin", {
        headers: {
          "ad-token": localStorage.getItem("ad-token"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ admin: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeItem = (id) => {
    let cart = this.state.shoppingCart;

    let updatedCart = cart.filter((i) => i.id !== id);

    this.setState({
      shoppingCart: updatedCart,
    });
  };

  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown });

  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <IntlContext.Consumer>
          {(context) => {
            let langArr = {
              // "en" : "English",
              // "de" : "German",
              // "fr" : "French",
              // "pt" : "Portuguese"
            };
            return (
              <Dropdown
                tag="li"
                className="dropdown-language nav-item"
                isOpen={this.state.langDropdown}
                toggle={this.handleLangDropdown}
                data-tour="language"
              >
                <DropdownToggle tag="a" className="nav-link">
                  {/* <ReactCountryFlag
                  className="country-flag"
                    countryCode={
                      context.state.locale === "en"
                        ? "us"
                        : context.state.locale
                    }
                    svg
                  /> */}
                  <span className="d-sm-inline-block d-none text-capitalize align-middle ml-50">
                    {langArr[context.state.locale]}
                  </span>
                </DropdownToggle>
                <DropdownMenu right></DropdownMenu>
              </Dropdown>
            );
          }}
        </IntlContext.Consumer>

        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.state.admin?.adminname}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <img
                src={this.state.admin?.adminimg}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    );
  }
}
export default NavbarUser;
