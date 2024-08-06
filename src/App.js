import React from "react";
// import "./App.css";

import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";

import ThankyouPage from "./components/ThankyouPage";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";




// import useTheme from "@mui/material";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/ThankyouPage" element={<ThankyouPage />} />
   
       

     
      </Routes>

      {/* <TestComponent/> */}

      {/*<MyForm /> */}

      {/* <Container maxWidth="sm">
        <BeautifulForm />

        

        

      </Container> */}

      {/* <TestOnBlur/> */}

      {/* <GridUse schema={schema}/> */}

      {/* <GridPrac/> */}
      {/* <GridDeep/> */}
      {/* <RadioButtonForm/> */}
    </Box>
  );
}
export default App;
