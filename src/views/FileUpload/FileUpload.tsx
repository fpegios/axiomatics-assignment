import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import useHandlers from './hooks/useHandlers';
import { FileUploadProps } from './interface';

function FileUpload ({ onChange }: FileUploadProps ) {  
  const { handleFileInputChange } = useHandlers({onChange})

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

export default React.memo(FileUpload);
