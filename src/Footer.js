import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

function Footer() {
	return(
		<div>
			<Grid container justify="center" spacing={1}>
				<Grid item xs={6}>
					<Box pt={0.75} align="right">Powered by : </Box>
				</Grid>
				<Grid item xs={6}>
				  <Link underline="none" href="https://nunet.io/" target="_blank">
				  	<Box align="left"><img src="./assets/img/nunet-logo.svg" alt="" width="100px" height="30px" /></Box>
				  </Link>	
				</Grid>
			</Grid>
		</div>
	)
}

export default Footer;