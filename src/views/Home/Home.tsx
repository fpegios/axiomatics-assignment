import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

function Home () {  
  return (
    <Grid container justifyContent="center" alignItems="center" flexDirection="column" style={{height: '100%'}}>
      <Typography>Please upload an xml file with XACML policy</Typography>
      <br/>
      <Button
        variant="contained"
        component="label"
      >
        Upload XML
        <input type="file" hidden />
      </Button>
    </Grid>
  )
}

export default Home;
