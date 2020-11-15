/* global chrome */

import React, { useState, useEffect } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import Dialog from '@material-ui/core/Dialog';
import DialogContentText  from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';

import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';


import clsx from 'clsx';
import axios from 'axios';
import { makeStyles} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import MenuBar from './MenuBar.js';
import Footer from './Footer.js';

function App(props){

  const [currentUrl, setCurrentUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [stanceNames, setStanceNames] = useState(["Agree", "Disagree", "Discuss", "Unrelated"]);
  const [scorevalue, setScorevalue] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [error, setError] = useState(false);
    
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      height: '580px',
      borderRadius: '20px 20px 20px 20px',
    },
    content : {
      flex: 1,
      backgroundColor: '#000050',
      //backgroundImage: "url("+"./assets/img/background.png"+")",
    },
    appbar: {
      backgroundColor: 'white',
    },
    toolbar: {
      minHeight: '50px',
      backgroundColor: '#161A23',
      //borderRadius: '20px 20px 0px 0px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: '18px 18px 18px 18px',
      borderColor: 'red',
      
      
    },
    paperMax: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.secondary.light,
    },

    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    collapseA: {
      borderRadius: '30px 30px 30px 30px',
    },
    error: {
      borderRadius: '30px 30px 30px 30px',
    }
    

  }));
  const classes = useStyles();

  const theme = createMuiTheme({
    palette:{
      secondary:{
        main: '#00A79D'
      }
    }
  })
  
  useEffect(() => {
    // chrome.tabs.query(
    //   {active: true, currentWindow: true},
    //   tabs => {
    //     const url = new URL(tabs[0].url);
    //     const currenturl = url.toString();
    //     setCurrentUrl(currenturl);
    //     detectFakeNews(currenturl);
    // });
    const currenturl = "https://www.digitalocean.com/community/tutorials/react-axios-react";
    //const currenturl = "chrome://newtab/"
    setCurrentUrl(currenturl);
    detectFakeNews(currenturl);
    
  },[]);


  const detectFakeNews = async (url) => {
      const data = await axios
        .get('http://195.201.197.25:7005/get_score', {
            params: {
              url: url          
            },
          })
        .then(res => {
            console.log(res);
            if (res.data == "Invalid Url"){
              console.log(res.data);
              setError(true);
              setErrorMsg("Invalid Url");
            }
            if (res.data == "Server Not Available"){

            }

            else {
              const value_list = res.data.split('\n');
              const agree = value_list[0].split(':')[1];
              const disagree = value_list[1].split(':')[1];
              const discuss = value_list[2].split(':')[1];
              const unrelated = value_list[3].split(':')[1];
              const values = [agree, disagree, discuss, unrelated]
              setScorevalue(values);
            }
            
          })
        .catch(error => {
            setError(true);
            setErrorMsg('Error Occured');
            console.log('Error Occured', error);
        });
        setTimeout(function() {
            setLoading(true);
        }, 3000);
    
  }

  const handleHelpDialogOpen = () => {
    setOpen(true);
  }
  const handleHelpDialogClose = () => {
    setOpen(false);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  
  const displayScoreValue = (stanceNames.map((name, index) => {
    var scorevaluearray = scorevalue.map(Number); // change string array to integer array
    var maximum = Math.max.apply(Math, scorevaluearray) // get the maximum value
    var currNumber = Number(scorevalue[index]); // the current value
    return(
      <Grid item xs={3} key={name}>
        <Paper className={currNumber == maximum ? classes.paperMax : classes.paper} >
          <Typography variant="subtitle1">{name}</Typography>
          <Box p={1} ><Divider /></Box>
          {(currNumber*100).toFixed(2)}%
        </Paper>
      </Grid>
    );
  }));

  function AlertError() {
    return(
      <div>
        {error ? (
          <Box >
        <Alert severity="error" className={classes.error}>
          {errorMsg}
        </Alert>
        </Box>
        ) :
        (<Box></Box>)       
          }
        
      </div>
    )
  }

  function HelpDialog() {
    return (
    <div>
        <Dialog
            open={open}
            onClose={handleHelpDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
              
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid container>
                      <Grid item xs={6}>
                        <Box pt={3}>
                        <Typography textAlign="bottom" variant="h6">Input</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box align="right">
                          <IconButton onClick={handleHelpDialogClose}><CloseIcon /></IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box pl={3}>
                      <Typography variant="subtitle1">
                        A headline and a body text - either from the same news or from two different articles
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6">Output</Typography>
                    </Box>
                    <Box pl={3}>
                      <Typography variant="subtitle1">
                        Classify the stance of the body text relative to the claim made in the headline into one of four categories:
                      </Typography>
                      <Box pl={2}>
                        <Typography>1. <strong>Agrees: </strong>The body text agrees with the headline.</Typography>
                        <Typography>2. <strong>Disagrees: </strong>The body text disagrees with the headline.</Typography>
                        <Typography>3. <strong>Discusses: </strong>The body text discuss the same topic as the headline, but doesnot take a position.</Typography>
                        <Typography>4. <strong>Unrelated: </strong>The body text discusses a different topic than the headline.</Typography>   
                      </Box>
                     </Box>
                    
                </DialogContentText>
            </DialogContent>

        </Dialog>

    </div>
    );
}
  
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
        <MenuBar classes={classes}/>
        <div className={classes.content}>
          <Container fixed >
            {loading ? (
              <Box pt={2}>
                <Box align="center" pl={15} pr={15}>
                  <AlertError />
                </Box>
                <Box pt={2}>
                <Grid container justify="center" spacing={1}>
                <Grid item xs={8} >
                  <Box pt={1} pl={5} pr={5} color="white">
                  <Typography variant="h5" align="right">Stance Detection</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} >
                  <IconButton color="secondary" onClick={handleHelpDialogOpen}>
                      <HelpIcon />
                </IconButton>
                </Grid>
                </Grid>
                </Box>
                <HelpDialog />
                <Box pt={2} pl={4} pr={4}>
                  <Grid container justify="center" spacing={1}>
                    {displayScoreValue}
                  </Grid>
                </Box>
                <Box pt={10} pl={5} pr={5} >
                  <Card m={1} className={classes.collapseA}>
                  <CardActions disableSpacing m={1} >
                    <Typography variant="body2" align="center">Article Url</Typography>
                    <IconButton 
                      color="secondary"
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show-url"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} unmountOnExit>
                      <CardContent>
                        <Link underline="none" href={currentUrl}>
                        <Typography variant="body2">{currentUrl}</Typography>
                        </Link>
                      </CardContent>

                  </Collapse>
                  </Card>
                       
                </Box>
              </Box>
              ) : (
                <Grid container justify="center">
                  <Box>
                    <Box pt={7} align="center" color="white"><Typography variant="h6">Stance detection started, please wait ...</Typography></Box>
                    <Box pt={7} align="center"><img src="./assets/img/NuNet-Spinner.gif" alt="loading..." width="250px" height="250px" /></Box>
                  </Box>
                </Grid>
              )
            }  
          </Container>
        </div>
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
