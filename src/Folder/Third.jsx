import React from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useContext } from "react";

import { MaterialFileInput } from "../components/FileInput";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { third } from "../components/json/Third";
import { MultiStepContext } from "../StepContext";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

function Third() {
  const { handleChange, errors, touched, values, setFieldValue, setStep } =
    useContext(MultiStepContext);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const isEmptyObject=(obj)=>{
    return Object.keys(obj).length === 0
  }
  
  
  const changeStepHandler=()=>{
  
    console.log("errors in change",errors);
  
  
  
  
    if(isEmptyObject(errors))
    {
      setStep(4);
    }
    else{
      alert("please enter mandatory fields")
      return ;
     
  
    }
   
  }

  const renderInputField = (fieldJson, values, handleChange) => {
    const data = fieldJson.form.sections[0].fields;

    return data.map((item) => {
      const { type, name, label, subsection, items } = item;

      switch (type) {
        case "text":
          return (
            <Box key={name} sx={{ marginTop: 3 }}>
              <TextField
                fullWidth
                type={type}
                label={label}
                name={name}
                variant="standard"
                value={values[name] || ""}
                onChange={handleChange}
              />
              {errors[name] && touched[name] ? (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              ) : null}
            </Box>
          );
        case "file":
          return (
            <Box
              key={name}
              sx={{ marginTop: 3, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="">{label}</Typography>

              <MaterialFileInput
                name={name}
                setFieldValue={setFieldValue}
              ></MaterialFileInput>

              {errors[name] && touched[name] ? (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              ) : null}
            </Box>
          );

        case "email":
          return (
            <Box key={name} sx={{ marginTop: 3 }}>
              <TextField
                fullWidth
                type={type}
                label={label}
                name={name}
                variant="standard"
                value={values[name] || ""}
                onChange={handleChange}
              />
              {errors[name] && touched[name] ? (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              ) : null}
            </Box>
          );

        case "number":
          return (
            <Box key={name} sx={{ marginTop: 3 }}>
              <TextField
                fullWidth
                type={type}
                label={label}
                name={name}
                variant="standard"
                value={values[name] || ""}
                onChange={handleChange}
              />
              {errors[name] && touched[name] ? (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              ) : null}
            </Box>
          );

        case "array":
          return (
            <Box key={name} sx={{ marginTop: 3 }}>
              <Typography variant="h6">{subsection}</Typography>
              {items?.map((subItem, index) => (
                <Box key={index} sx={{ gap: 2, marginTop: 1 }}>
                  {subItem.fields.map((subField, subIndex) => (
                    <Box
                      key={subIndex}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {subField.type === "number" && (
                        <>
                          <TextField
                            fullWidth
                            type={subField.type}
                            label={subField.label}
                            name={subField.name}
                            variant="standard"
                            value={values[subField.name] || ""}
                            onChange={handleChange}
                          />
                          {errors[subField.name] && touched[subField.name] ? (
                            <p className="text-red-500 text-sm">
                              {errors[subField.name]}
                            </p>
                          ) : null}
                        </>
                      )}
                      {subField.type === "date" && (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 2,
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              name={subField.name}
                              closeOnSelect={true}
                              label={subField.label}
                              value={values[subField.name]}
                              onChange={(newValue) =>
                                setFieldValue(subField.name, newValue)
                              }
                              variant="standard"
                            />
                          </LocalizationProvider>
                          {errors[subField.name] && touched[subField.name] ? (
                            <p className="text-red-500 text-sm">
                              {errors[subField.name]}
                            </p>
                          ) : null}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          );

        case "date":
          return (
            <Box
              key={name}
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box className="w-[50%] pl-3 border-r-2">
                <label>{label}</label>
              </Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{ marginTop: 3 }}>
                  <DatePicker
                    name={name}
                    closeOnSelect={true}
                    label="Select a Year"
                    value={values[name]}
                    onChange={(newValue) => setFieldValue(name, newValue)}
                    variant="standard"
                  />
                </Box>
              </LocalizationProvider>
              {errors[name] && touched[name] ? (
                <p className="text-red-500">{errors[name]}</p>
              ) : null}
            </Box>
          );

        default:
          return null;
      }
    });
  };
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {renderInputField(third, values, handleChange)}

        <br />
        <br />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep(2)}
          >
            Back
          </Button>
          <Button
            sx={{ ml: 3 }}
            variant="contained"
            color="primary"
            onClick={changeStepHandler}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Third;
