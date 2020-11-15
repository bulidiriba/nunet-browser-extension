import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


function Footer() {
	return(
		<div className="footer">
			<Box pt={0.7} align="center">
			<Grid container justify="center" spacing={1}>
				<Grid item xs={3}>
					<Box pt={0} align="right"  color="white">
						<Typography variant="subtitle1" >Powered by  </Typography> 
					</Box>
				</Grid>
				<Grid item xs={3}>
				  <Tooltip title="https://nunet.io/">
					<Link underline="none" href="https://nunet.io/" target="_blank">
						<Box align="center"><img src='./assets/img/nunet_transparent_logo.svg' alt="" width="100px" height="30px" /></Box>
					</Link>
				  </Tooltip>
				</Grid>
				<Grid item xs={3}>
				  <Tooltip title="https://singularitynet.io/">
					<Link underline="none" href="https://singularitynet.io/" target="_blank">
						<Box align="left" ><img src='./assets/img/snet_transparent_logo.png' alt="" width="100px" height="30px"  /></Box>
					</Link>
				  </Tooltip>
				</Grid>
			</Grid>
			</Box>
		</div>
	)
}

export default Footer;