import * as React from 'react';
import Button from '@mui/material/Button';

function But() {

  // function handleSubmit(){
  //   navigate("/dashboard",{state : {username:username}})
  // }
  return (
  <a href="/dashboard" >
    <Button type='submit' variant="contained" size="large" sx={{ width: "54ch" }}>Sign in</Button>
     {/* onClick={handleSubmit} */}
    
  </a>
)

}
export default But