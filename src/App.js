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


import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

import Footer from './Footer.js';

function App(props){

  const [domain, setDomain] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const API_KEY = '0077e63429c544a7a3e19bdaea2ec806';

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


  const detectFakeNews = async (query) => {
    const data = await axios
      .get('https://newsapi.org/v2/everything', {
          params: {
            q: query,
            language: 'en',
            apiKey: API_KEY
          }})
      .then(results=> {
          setHeadlines(results.data.articles.slice(0, 5));
          console.log(results);})
      .catch(error => {
          console.log('Error in obtaining headlines', error);
      });
      setTimeout(function() {
          setLoading(true);
      }, 5000);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
                <Typography variant="h6" align="center">Stance Detected</Typography>
                <Box pt={2}>
                  <Grid container justify="center" spacing={2}>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1">Unrelated</Typography>
                        <Box p={1}><Divider /></Box>
                        73%
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1">Discuss</Typography>
                        <Box p={1}><Divider /></Box>
                        18%
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1">Agree</Typography>
                        <Box p={1}><Divider /></Box>
                        7%
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <Typography variant="subtitle1">Disagree</Typography>
                        <Box p={1}><Divider /></Box>
                        2%
                      </Paper>
                    </Grid>
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
