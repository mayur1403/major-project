import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Grid, Box } from '@material-ui/core';
import Header from "./Header"
import AppliedJobs from "./AppliedJobs"
import Jobs from "./Jobs"
import Apply from "./Apply"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apply: false }
        this.apply = this.apply.bind(this);
        this.applyJob = this.applyJob.bind(this);
    }
    apply(id) {
        this.setState({ apply: true, appId: id })
    }
    applyJob(job) {
        axios.post(`http://localhost:8080/addApplication`, { job, user: this.props.user }).then((res) => {
            console.log(res.data);
            axios.get(`http://localhost:8080/getApplicationsAppliedByUser/${this.props.user.userId}`).then((res) => {
                console.log("applied jobs");
                console.log(res.data);
                this.props.setAppliedJobs(res.data);
            });
        })
       
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/getJobs`).then((res) => {
            console.log("jobs");
            console.log(res.data);
            this.props.setJobs(res.data);
        })
         setInterval(() => {
            axios.get(`http://localhost:8080/getJobs`).then((res) => {
                console.log("jobs");
                console.log(res.data);
                this.props.setJobs(res.data);
            })},1000*60);
        
            axios.get(`http://localhost:8080/getApplicationsAppliedByUser/${this.props.user.userId}`).then((res) => {
                console.log("applied jobs");
                console.log(res.data);
                this.props.setAppliedJobs(res.data);
            });
       
    }

    render() {

        return (
            <Router>

                <Switch>
                    <Route path="/appliedJobs">
                        <AppliedJobs appliedJobs={this.props.appliedJobs} logout={this.props.logout} />
                    </Route>
                    <Route path="/apply"><Apply Jobs={this.props.jobs} appId={this.state.appId} applyJob={this.applyJob} /></Route>
                    <Route path="/">
                        <Jobs logout={this.props.logout} Jobs={this.props.jobs} apply={this.apply} />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        appliedJobs: state.appliedJobs,
        jobs: state.jobs
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setJobs: (jobs) => {
            dispatch({ type: "jobs", jobs });
        },
        setAppliedJobs: (jobs) => {
            dispatch({ type: "appliedjobs", appliedJobs: jobs });
        }
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(App);