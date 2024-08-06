import React from "react";

import { AppBar, Toolbar } from "@mui/material";

import { Container, Box, Typography, Button } from "@mui/material";
import Logo from "../images/arg_logo.jpg";

import { MultiStepContext } from "../StepContext";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";

import First from "../Folder/First";
import Second from "../Folder/Second";
import Third from "../Folder/Third";
import Four from "../Folder/Four";

function Landing() {
  const { currentStep, finalData, handleSubmit } = useContext(MultiStepContext);

 

  console.log("handleSubmit here ", handleSubmit);
  console.log(currentStep);

  function showStep(step) {
    switch (step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Four />;
    }
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#fff", width: "100%" }}>
          <Box
            component="img"
            sx={{ height: 64 }}
            alt="Company_Logo"
            src={Logo}
          ></Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ bgcolor: "#BBDEFB" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          // m={4}
         
        >
          <Typography variant="h4" component="h4" gutterBottom>
            Vendor Onboarding Form
          </Typography>
          {/* in stepper index is starting from 0  */}
          <Box className="center-stepper" width="100%">
            <Stepper activeStep={currentStep - 1} orientation="horizontal">
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </Box>
        </Box>


        {/* form started here  */}
       
        <Box
          component="form"
          action="/submitData"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          {showStep(currentStep)}
        </Box>
        </Box>
     
    </Container>
  );
}

export default Landing;
