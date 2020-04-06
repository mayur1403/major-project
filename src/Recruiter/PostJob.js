import { Grid, TextField, Button, FormControl } from '@material-ui/core'
import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
class PostJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',comp:'',desc:'',sector:'' };
   
    this.handleName = this.handleName.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSector = this.handleSector.bind(this);
    this.handleComp = this.handleComp.bind(this);
  }
  handleSector(event) {
   
    this.setState({
      ...this.state,
      sector: event.target.value,
    });
  }
  handleName(event){
   this.state.name=event.target.value;
  }
  handleDesc(event){
    this.state.desc=event.target.value;
  }
  handleComp(event){
    this.state.comp=event.target.value;
  }
 
  render() {
    return (
      <Grid>
        <Header logout={() => { this.props.logout() }} />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField required id="standard-required" label="jobName" onChange={this.handleName} />
          <br></br>
          <TextField id="standard-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            variant="outlined"
            defaultValue="Description" onChange={this.handleDesc} />
          <br></br>
          <NativeSelect
            value={this.state.sector}

            onChange={this.handleSector}
          >
            <option value="">None</option>
            <option value="Govt Job">Govt Job</option>
            <option value="Private Job">Private Job</option>
          </NativeSelect>
          <br></br>
          <Link to="/"  onClick={() => { this.props.postJob(this.state.name,this.state.sector,this.state.desc) }}><Button variant="contained" color="primary">
            Submit
          </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}
export default PostJob;