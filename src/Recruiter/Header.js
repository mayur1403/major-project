import React from "react";
import {Grid, Button,Box} from "@material-ui/core";
import { Link } from "react-router-dom";
const Header=(props)=>{
    return(
        <Box  bgcolor="#e6e6e6" padding="10px">
        <Grid container
        direction="row"
        justify="flex-end"
        alignItems="center"
       
      >
          <Link to="/postJob"><Button variant="outlined">Post Job</Button></Link>
            <Button variant="outlined" onClick={()=>{props.logout()}}>LogOut</Button>
        </Grid>
        </Box>
    );
}
export default Header;