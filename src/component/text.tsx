import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import But from './button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function FormPropsTextFields() {
  const [username, setUsername] = useState("")

  const navigate = useNavigate();
  console.log(username)
  function handleSubmit() {
    navigate("/dashboard", { state: { username: username } })
  }
  const handleChange = (data: any) => {
    console.log("data", data)
  }
  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { marginBottom: 1, width: '50ch' } }}>

      <form onSubmit={handleChange}>
        <TextField id="username" label="Enter your Email" variant="outlined" name='username'
          onChange={(e) => setUsername(e.target.value)} />
        {/* <But></But> */}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

    </Box>
  );
}
export default FormPropsTextFields