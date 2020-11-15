import React, { } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


function MenuBar(props) {
	return(
	    <div className="menubar">
        <Box>
        <AppBar position="static" className={props.classes.appbar}>
            <Toolbar className={props.classes.toolbar} >
            <Link color="inherit" href="#" className={props.classes.link} underline="none">
              <Box display="flex" flexDirection="row">
                <Box ><Icon><img alt="" src="./assets/img/icon.svg" width="30px" height="30px" /></Icon></Box>
                <Box pl={1} pt={0.25} >
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
        </Box>
        </div>
    )
}

export default MenuBar;