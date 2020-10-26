import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

function Footer() {
	return(
		<div>
			<Grid container justify="center" spacing={1}>
				<Grid item xs={6}>
					<Box pt={0} align="right">
						<Typography variant="subtitle1">Powered by : </Typography> 
					</Box>
				</Grid>
				<Grid item xs={6}>
				  <Tooltip title="https://nunet.io/">
				  <Link underline="none" href="https://nunet.io/" target="_blank">
				  	<Box align="left"><img src="./assets/img/nunet-logo.svg" alt="" width="100px" height="30px" /></Box>
				  </Link>	
				  </Tooltip>
				</Grid>
			</Grid>
		</div>
	)
}

export default Footer;