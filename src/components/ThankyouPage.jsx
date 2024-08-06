import { Typography ,Box,Button} from "@mui/material";
import React from "react";

import {useNavigate} from "react-router-dom"

function ThankyouPage() {

  const navigate=useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };



  return <Box sx={{display:"flex", flexDirection:"column", gap:"20px", height:"100vh" ,width:"100vw",alignItems:"center",justifyContent:"center"}}> 
    <Typography variant="" component="h2"> Thank You For Submitting Form 😊</Typography>
    {/* <Button onClick={navigateToHome} variant="contained">
        Home
      </Button> */}
   
    
  </Box>;
}

export default React.memo(ThankyouPage);
