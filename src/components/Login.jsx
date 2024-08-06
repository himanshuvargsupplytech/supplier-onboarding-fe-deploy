import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

import axios from "axios"

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });


  const handeSubmit=async(e)=>{
    e.preventDefault();
   

    try{
   const response =await axios.post("api/v1/login",login)
    console.log( "submitted");

    }
    catch(error){
        alert()

    }
    
  }


  const onChangeHandler=(e)=>{
    const{name,value}=e.target;

    setLogin({
        ...login,
        [name]:value
    })
  }
  return (
    <Box>
      <form onSubmit={handeSubmit}>
        <TextField
          name="email"
          type="email"
            label="Email"
          onChange={onChangeHandler}
          value={login.email}
          variant="outlined"
        ></TextField>
        <TextField
          name="password"
          label="password"
          type="password"
          onChange={onChangeHandler}
          value={login.password}
          variant="outlined"
        ></TextField>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
}

export default Login;
