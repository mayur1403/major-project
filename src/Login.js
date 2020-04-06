import { Grid, TextField, Button, FormControl } from '@material-ui/core'
import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: '', name: '', pass: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePass = this.handlePass.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        this.setState({
            ...this.state,
            role: event.target.value,
        });
    }
    handleName(event) {
        this.state.name = event.target.value;
    }
    handlePass(event) {
        this.state.pass = event.target.value;
    }
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >

                <TextField required id="name" label="UserName" onChange={this.handleName} />
                <br></br>
                <TextField required type="Password" id="password" label="Password" onChange={this.handlePass}
                />
                <br></br>
                <NativeSelect
                    value={this.state.role}
                    onChange={this.handleChange}
                >
                    <option value="">None</option>
                    <option value="User">User</option>
                    <option value="Recruiter">Recruiter</option>
                </NativeSelect>
                <br /><br />
             
                    <Button variant="contained" color="primary" onClick={() => { this.props.login(this.state.role, this.state.name, this.state.pass) }}>
                        Submit
                    </Button>
        

            </Grid>
        );
    }
}
export default Login;