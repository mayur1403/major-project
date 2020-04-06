import React from "react";
import { Grid, Button, Box } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import "./Header.scss";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: 'signUp' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        this.state.role=event.target.value;
        this.props.signUp(this.state.role);
    };
    render() {
        return (
            <Box bgcolor="#e6e6e6" padding="10px">
                <Grid container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"

                >
                    <Button variant="outlined" onClick={() => { this.props.logIn() }}>LogIn</Button>
                   
                        <Select
                            value={this.state.role}
                            variant="outlined"
                            onChange={this.handleChange}
                            
                        >
                            <MenuItem value={"signUp"}>SignUp</MenuItem>
                            <MenuItem value={"User"}>SignUp As User</MenuItem>
                            <MenuItem value={"Recruiter"}>SignUp As Recruiter</MenuItem>
                        </Select>

                </Grid>
            </Box>
        );
    }
}
export default Header;