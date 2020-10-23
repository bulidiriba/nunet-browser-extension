/* global chrome */

import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';


function App(props){

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root} style={{width:"500px", height: "600px"}}>

      <AppBar position="static">
        <Toolbar variant="dense">
        <Link color="inherit" href="#" className={classes.link} underline="none">
          <Box display="flex" flexDirection="row">
            <Box ><Icon><img alt="" src="/logo1.png" width="30px" height="30px" /></Icon></Box>
            <Box pl={1} >
            <Typography 
              variant="subtitle1"
              display="block"
            >FakeNewsDetector
            </Typography>
            </Box>
          </Box>
        </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
