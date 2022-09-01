import React, { useContext } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import useHandlers from './hooks/useHandlers';
import { XmlDataContext } from '../App/App';

function Home () {  
  const { xmlData, setXmlData } = useContext(XmlDataContext);
  const { handleFileInputChange } = useHandlers({xmlData, setXmlData})

  return (
    <Grid container justifyContent="center" alignItems="center" flexDirection="column" style={{height: '100%'}}>
      <Typography>Please upload an xml file with XACML policy</Typography>
      <br/>
      <Button
        variant="contained"
        component="label"
      >
        Upload XML
        <input type="file" hidden onChange={handleFileInputChange} />
      </Button>
    </Grid>
  )
}

export default Home;
