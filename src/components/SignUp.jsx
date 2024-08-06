import React from "react";

import { useState } from "react";

import axios from "axios";

import { Box, Button, TextField } from "@mui/material";

function SignUp() {
  const [signupData, setSignupData] = useState({
    fname: "",
    email: "",
    password: "",
    role: "",
  });

  console.log("signupdata",signupData);

  const onChangeHandler = (e) => {
  
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const submitHandler = async(e) => {
    e.preventDefault();

    try{
    const response =  await axios.post("/api/v1/signup",  signupData );
    console.log("submitted successfully",response);
    alert("signup successfully done");
    

    }
    catch(err){

      console.log("getting error",err.response.data.message)
      console.log(err)
      alert(err.response.data.message)
      

    }

  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        variant="outlined"
        value={signupData.fname}
        label="Name"
        name="fname"
        onChange={onChangeHandler}
      ></TextField>
      <TextField
        variant="outlined"
        value={signupData.email}
        type="email"
        name="email"
        label="Email"
        onChange={onChangeHandler}
      ></TextField>
      <TextField
        variant="outlined"
        value={signupData.password}
        name="password"
        type="password"
        label="Password"
        onChange={onChangeHandler}
      ></TextField>
      <TextField
        variant="outlined"
        value={signupData.role}
        name="role"
        label="Role"
        onChange={onChangeHandler}
      ></TextField>
   <br />
      <Button  type="submit">Submit</Button>
      </form>
  );
}

export default SignUp;
