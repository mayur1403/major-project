import React from "react"
import Header from "./Header"
import { Grid, Box, Typography } from "@material-ui/core"
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const Applicants = (props) => {
    const applicants = props.applicants.map((applicant) => {
        const user = applicant.user
        return (
            <TableRow key= {user.userName}>
            <TableCell component="th" scope="row">
            {user.userName}
            </TableCell>
            <TableCell align="right">{user.emailAddress}</TableCell>
            <TableCell align="right">{user.phoneNo}</TableCell>
            <TableCell align="right">{user.education}</TableCell>
            <TableCell align="right">{user.experience}</TableCell>
        </TableRow>
        );
    })
    return (
        <Grid>
            <Header logout={() => { props.logout() }} />
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">PhoneNo.</TableCell>
                            <TableCell align="right">Education</TableCell>
                            <TableCell align="right">Experience</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       {applicants}
                    </TableBody>
                </Table>
            </TableContainer>
           
        </Grid>
    );
}
export default Applicants;