import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormPropsTextFields()
{
    return (
      <Box component="form" sx={{'& .MuiTextField-root': {marginBottom:1, width: '50ch' }}}>
        <div>
        <TextField id="outlined-basic" label="Enter your Email" variant="outlined" />
        </div>
        </Box>
        );
}
export default FormPropsTextFields