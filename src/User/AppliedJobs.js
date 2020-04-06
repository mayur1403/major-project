import React from "react"
import Header from "./Header"
import { Grid, Box, Typography } from "@material-ui/core"
class AppliedJobs extends React.Component {
    constructor(props) {
        super(props);
        this.getJobs = this.getJobs.bind(this);
    }
    componentDidMount() {
       
    }
    getJobs() {
        const jobs = this.props.appliedJobs.map((application) => {
            const job=application.job
            return (
                <Box component="div" boxShadow={3}
                    bgcolor="#e6e6e6" my={5}
                    style={{ width: '100%', height: '100%' }}>
                   
                        <Box p={4}  fontSize="h6.fontSize" >
                            {job.jobName}
                        </Box>
                  
                </Box>);
        })
        return (jobs);
    }
    render() {
        return (
            <Grid>
                <Header logout={() => { this.props.logout() }} />
                {this.getJobs()}
            </Grid>
        );
    }
}
export default AppliedJobs;