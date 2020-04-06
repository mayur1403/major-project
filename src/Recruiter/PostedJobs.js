import React from "react"
import Header from "./Header"
import { Grid, Box, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";
const PostedJobs = (props) => {
    const jobs = props.Jobs.map((job) => {
        return (
            <Box component="div" boxShadow={3}
                bgcolor="#e6e6e6" my={5}
                style={{ width: '100%', height: '100%' }}>
                <Box py={2}>
                    <Grid p={4}  fontWeight="fontWeightBold" fontSize="h6.fontSize">
                        {job.jobName}
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    ><Link to="/ViewApplicants" onClick={()=>{props.getApplicants(job.jobId)}}>ViewApplicants</Link></Grid>
                </Box>

            </Box>);
    })
    return (
        <Grid>
            <Header logout={() => { props.logout() }} />
            {jobs}
        </Grid>
    );
}
export default PostedJobs;