import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Grid, Box } from '@material-ui/core';
import Header from "./Header";
import Applicants from "./Applicants";
import PostJob from "./PostJob";
import PostedJobs from "./PostedJobs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class App extends React.Component {
    constructor(props){
        super(props);
        this.getApplicants=this.getApplicants.bind(this);
        this.postJob=this.postJob.bind(this);
    }
    componentDidMount() {
        console.log(this.props.recruiter.recruiterId);
        axios.get(`http://localhost:8080/getJobsPostedByRecruiter/${this.props.recruiter.recruiterId}`).then((res) => {
            console.log("posted jobs");
            console.log(res.data);
            this.props.setPostedJobs(res.data);
        });


    }
    getApplicants(id) {
        axios.get(`http://localhost:8080/getApplicationsForRecruiterpostedJobs/${id}`).then((res) => {
            console.log(res.data);
            this.props.setApplicants(res.data);
        })
    }
    postJob(name,sector,desc) {
    
        axios.post(`http://localhost:8080/PostJob`, {
        jobName:name,sector:sector,companyName:this.props.recruiter.companyName,
        description:desc,recruiter:this.props.recruiter
        }).then((res) => {
          console.log(res.data);
          axios.get(`http://localhost:8080/getJobsPostedByRecruiter/${this.props.recruiter.recruiterId}`).then((res) => {
            console.log("posted jobs");
            console.log(res.data);
            this.props.setPostedJobs(res.data);
        });
        })
       
        
      
      }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/postJob">
                        <PostJob logout={this.props.logout} recruiter={this.props.recruiter} postJob={this.postJob}/>
                    </Route>
                    <Route path="/viewApplicants">
                        <Applicants applicants={this.props.applicants} logout={this.props.logout}/>
                    </Route>
                    <Route path="/">
                        <PostedJobs logout={this.props.logout} Jobs={this.props.jobs} getApplicants={this.getApplicants} />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        jobs: state.postedJobs,
        applicants: state.applicants
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setPostedJobs: (postedJobs) => {
            dispatch({ type: "postedJobs", postedJobs })
        },
        setApplicants: (applicants) => {
            dispatch({ type: "applicants", applicants })
        }
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(App);