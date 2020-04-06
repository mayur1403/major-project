import React from "react"
import { Grid, Box, Typography,Button } from "@material-ui/core"
import { Link } from "react-router-dom";
const Apply = (props) => {
    const job = props.Jobs.filter((job) => { return(job.jobId == props.appId) })
    console.log(job);
    return (
        <Grid>
            <Typography variant="h3" gutterBottom>{job[0].jobName}</Typography>
            <Typography variant="h6">Job Description</Typography>
            <Typography variant="body1" gutterBottom>{job[0].description}</Typography>
            <Typography variant="h6" gutterBottom>Company Name:</Typography>
            <Typography variant="h6" gutterBottom>{job[0].companyName}</Typography>
            <Link to="/" onClick={()=>{props.applyJob(job[0])}}><Button variant="contained" color="primary">Apply</Button></Link>
        </Grid>
    );
}
export default Apply;