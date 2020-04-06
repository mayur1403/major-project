import React from "react";
import { Grid, Button, Box } from "@material-ui/core"
import { Link } from "react-router-dom"
const Header = (props) => {
    return (
        <Box bgcolor="#e6e6e6" p={1} mb={5}>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Link to="/appliedJobs"><Button variant="outlined">Applied Jobs</Button></Link>
                <Button variant="outlined" onClick={() => { props.logout() }}>LogOut</Button>
            </Grid>
        </Box>
    );
}
export default Header;