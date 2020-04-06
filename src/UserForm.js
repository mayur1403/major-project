import { Grid, TextField, Button, FormControl } from '@material-ui/core'
import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpRequest: false,
            actualOtp: '',
            expectedOtp: '',
            name: '',
            pass: '',
            email: '',
            mobile: '',
            edu: '',
            exp: '',
            error: false
        };
        this.signUpRequest = this.signUpRequest.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleOtp = this.handleOtp.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleEdu = this.handleEdu.bind(this);
        this.handleExp = this.handleExp.bind(this);
        this.signUp = this.signUp.bind(this);
        this.signUpAgain=this.signUpAgain.bind(this);
    }
    signUpRequest() {
        axios.post(`http://localhost:8080/UserSignUpRequest`, {
            userName: this.state.name, password: this.state.password,
            emailAddress: this.state.email, education: this.state.education,
            experience: this.state.experience, phoneNo: this.state.mobile
        }).then((res) => {
            console.log(res.data);
            this.state.actualOtp = res.data;
            this.setState({ ...this.state, signUpRequest: true })
        });
    }
    signUp() {
        if (this.state.expectedOtp == this.state.actualOtp)
            this.props.signup(this.state.name,this.state.pass,this.state.mobile,this.state.email,this.state.edu,this.state.exp);
        else this.setState({ ...this.state, error: true })

    }
    signUpAgain(){
        this.setState({...this.state,signUpRequest:false,error:false})
    }
    handleName(event) {
        this.state.name = event.target.value;
    }
    handleEmail(event) {
        this.state.email = event.target.value;
    }
    handlePass(event) {
        this.state.pass = event.target.value;
    }
    handleMobile(event) {
        this.state.mobile = event.target.value;
    }
    handleEdu(event) {
        this.state.edu = event.target.value;
    }
    handleExp(event) {
        this.state.exp = event.target.value;
    }
    handleOtp(event) {
        this.state.expectedOtp = event.target.value;
    }
    render() {
        if (this.state.error==true) {
            return (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div>Error!OTP doesn't Match.</div>
                    <TextField required id="otp" label="Enter OTP" onChange={this.handleOtp} />
                    <br></br>
                    <Button variant="contained" color="primary" onClick={() => {
                        this.signUp()
                    }}>
                        Submit
                     </Button>
                    <Button variant="contained" color="primary" onClick={() => {
                        this.signUpAgain()
                    }}>
                            Enter information Again!
                    </Button>
                </Grid>
            );
        }
        else if (this.state.signUpRequest == true) {
            return (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >

                    <TextField required id="otp" label="Enter OTP" onChange={this.handleOtp} />
                    <br></br>
                    <Button variant="contained" color="primary" onClick={() => {
                        this.signUp()
                    }}>
                        Submit
            </Button>
                </Grid>
            );
        }
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >

                <TextField required id="UserName" label="UserName" onChange={this.handleName} />
                <br></br>
                <TextField required type="Password" id="Password" label="Password"
                    onChange={this.handlePass} />
                <br></br>

                <TextField required id="E-mail" label="E-mail" onChange={this.handleEmail} />
                <br></br>
                <TextField required id="Mobile No." label="Mobile No." onChange={this.handleMobile} />
                <br></br>
                <TextField required id="Education" label="Education" onChange={this.handleEdu} />
                <br></br>
                <TextField required id="Experience" label="Experience" onChange={this.handleExp} />
                <br></br>
                <Button variant="contained" color="primary" onClick={() => {
                    this.signUpRequest()
                }}>
                    Submit
            </Button>

            </Grid>
        );
    }
}
export default UserForm;