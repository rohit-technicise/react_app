import * as React from 'react';
import Button from '@mui/material/Button';

function Continue() {
  return (<div>  
            <Button variant="outlined" sx={{width: "58ch", marginTop: 1}}>Continue with Google</Button>
            <Button variant="outlined" sx={{width: "58ch", marginTop: 1}}>Continue with Apple</Button>
        </div>)
}
export default Continue