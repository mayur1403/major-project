import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from "axios";
import { Button } from '@material-ui/core';
import Header from "./Header"
import Body from "./Body"
import RecruiterForm from "./RecruiterForm"
import Login from "./Login"
import { store1 } from "./Recruiter/store"
import { store2 } from "./User/store"
import Recruiter from "./Recruiter/App"
import User from "./User/App"
import { Provider } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserForm from "./UserForm"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      role: "",
      loginPage: false,
      signup: false,
      login: false,
      name: "",
      password: "",
      email: "",
      mobile: "",
      user: null,
      recruiter: null
    }
    this.logout = this.logout.bind(this);
    this.loginPage = this.loginPage.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.signupPage = this.signupPage.bind(this);
    this.signupRecruiter = this.signupRecruiter.bind(this);
  }
  loginPage() {
    this.setState({ loginPage: true })
  }
  logout() {
    this.setState({ role: "", login: false, loginPage: false, name: "", password: "" })
  }
  login(role, name, pass) {
    const email = name;
    const password = pass;

    axios.post(`http://localhost:8080/Login${role}/${email}/${password}`).then((res) => {

      console.log(res.data);
      if (res.data == null) this.setState({ login: false, role: '', loginPage: true, signup: false })
      else if (role == "User")
        this.setState({ login: true, role: role, loginPage: false, signup: false, user: res.data })
      else this.setState({ login: true, role: role, loginPage: false, signup: false, recruiter: res.data })
    })
  }
  signupPage(role) {
    this.setState({ signup: true, signupRole: role, loginPage: false })
  }
  signup(name, pass, mobile, email, edu, exp) {

    axios.post(`http://localhost:8080/UserSignUp`, {
      userName: name, password: pass,
      emailAddress: email, phoneNo: mobile,
      education: edu, experience: exp
    }).then((res) => {
      console.log("signup");
      this.setState({ loginPage: true, login: false, signup: false })
    });
  }
  signupRecruiter(name, pass, mobile, email, comp) {
    axios.post(`http://localhost:8080/RecruiterSignUp`, {
      recruiterName: name, password: pass,
      emailAddress: email, companyName: comp, phoneNo: mobile
    }).then((res) => {
      console.log("signup");
      this.setState({ loginPage: true, login: false, signup: false })
    });
  }

  render() {
    if (this.state.loginPage == true) {
      return <Login login={this.login} />
    }
    if (this.state.signup == true) {
      if (this.state.signupRole == "Recruiter")
        return <RecruiterForm signupRecruiter={this.signupRecruiter} />
      else return <UserForm signup={this.signup} />
    }
    if (this.state.login == true) {
      if (this.state.role == "User") {
        return <Provider store={store2}><User logout={this.logout} user={this.state.user} /></Provider>
      }
      else {
        return <Provider store={store1}><Recruiter logout={this.logout} recruiter={this.state.recruiter} /></Provider>
      }
    }

    return (

      <div>
        <Header logIn={this.loginPage} signUp={this.signupPage} />
        <img src="job_portal.jpg" alt="Job portal" height="500px" width="100%" />
        <div>Hi there! Looking for a job? Looking to recruit? We’re here to help you.
        Our main objective is to help in the economic growth of the cities.
        For that, we are here to bridge the gap between the available opportunities and the awareness
        about them. Our site gives recruiters from different sectors, be it government,
        private or even free lancing, to post about their job vacancies.
        Not only will you job seekers be able to explore jobs in your areas of interest,
        but this page provides speedy and reliable access as it runs on new and fast technologies.
        This site will help you job seekers to search for a job of your dreams and recruiters,
        you now have a wide reach for all your openings!</div>
      </div>

    );
  }
}
export default App;