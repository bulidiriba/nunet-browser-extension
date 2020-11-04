/* global chrome */

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
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
import DialogTitle from '@material-ui/core/DialogTitle';

import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';


import clsx from 'clsx';
import axios from 'axios';
import { makeStyles} from '@material-ui/core';

import Footer from './Footer.js';

function App(props){

  const [domain, setDomain] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [stanceNames, setStanceNames] = useState(["Unrelated", "Discuss", "Agree", "Disagree"]);
  const [scorevalue, setScorevalue] = useState([]);
  const [open, setOpen] = React.useState(false);

    
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      height: '580px',
    },
    content : {
      flex: 1,
    },
    toolbar: {
      minHeight: '12px',
      backgroundColor: 'light-blue'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
    }
    

  }));
  const classes = useStyles();

  
  useEffect(() => {
    chrome.tabs.query(
      {active: true, currentWindow: true},
      tabs => {
        const url = new URL(tabs[0].url);
        const domain = url.hostname;
        const currenturl = url.toString();
        setDomain(domain);
        setCurrentUrl(currenturl);
        detectFakeNews(domain);
    });
    // const domain = "www.digitalocean.com";
    // const currenturl = "https://www.digitalocean.com/community/tutorials/react-axios-react";
    // setDomain(domain);
    // setCurrentUrl(currenturl);
    // detectFakeNews(domain);
    
  },[]);


  const detectFakeNews = async (url) => {
      const data = await axios
        .get('http://195.201.197.25:7000/get_fake_news_score', {
            params: {
              url: url          
            },
          })
        .then(res => {
            const values = res.data[0];
            console.log(res.data[0]);
            setScorevalue(values);
          })
        .catch(error => {
            console.log('Error Occured', error);
        });
        setTimeout(function() {
            setLoading(true);
        }, 5000);
    
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
      <Grid item xs={3} backgroundColor='green'>
        <Paper className={currNumber == maximum ? classes.paperMax : classes.paper} >
          <Typography variant="subtitle1">{name}</Typography>
          <Box p={1}><Divider /></Box>
          {(currNumber*100).toFixed(2)}%
        </Paper>
      </Grid>
    );
  }));

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
    <div className={classes.root} >
        <div className={classes.content}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar} >
            <Link color="inherit" href="#" className={classes.link} underline="none">
              <Box display="flex" flexDirection="row">
                <Box ><Icon><img alt="" src="/logo1.png" width="30px" height="30px" /></Icon></Box>
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

         <Container fixed >
            {loading ? (
              <Box pt={3}>
                <Grid container justify="center" spacing={1}>
                <Grid item xs={6} >
                  <Box pt={1}>
                  <Typography variant="h6" align="right">Stance Detected</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} >
                  <IconButton color="primary" onClick={handleHelpDialogOpen}>
                      <HelpIcon />
                </IconButton>
                </Grid>
                </Grid>
                <HelpDialog />
                <Box pt={2}>
                  <Grid container justify="center" spacing={2}>
                    {displayScoreValue}
                  </Grid>
                </Box>
                <Box pt={5}>
                  <Card m={1}>
                  <CardActions disableSpacing m={1} minHeight="10px">
                    <Typography variant="body2" align="center">Article Url</Typography>
                    <IconButton 
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
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                    <Box pt={5} align="center"><Typography>Stance detection started, please wait ...</Typography></Box>
                    <Box pt={3} align="center"><img src="./assets/img/loading.gif" alt="loading..." /></Box>
                  </Box>
                </Grid>
              )
            }  
          </Container>
        </div>
      <Footer />
    </div>
  );
}

export default App;
