import React from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useContext } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { second } from "../components/json/Second";
import { MultiStepContext } from "../StepContext";
import { useTheme } from "@mui/material/styles";
import RadioButton from "../common_components/RadioButton";

function Second() {
  const {
    handleChange,
    errors,
    touched,
    values,
    setFieldValue,
    setStep,
    handleBlur,
    setFieldTouched,
    validateForm,
    setTouched
  } = useContext(MultiStepContext);

  console.log("errors in second", errors);

  const theme = useTheme();

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const changeStepHandler =  async() => {
    console.log("errors in change", errors);

    // if (isEmptyObject(errors)) {
    //   setStep(3);
    // } else {
    //   alert("please enter mandatory fields");
    //   return;
    // }

    const errorsOnNextClick = await validateForm();
    if (Object.keys(errorsOnNextClick).length === 0) {
      setStep(3);
    } else {
      // setTouched({ email_representative:true });
      Object.keys(errorsOnNextClick).forEach((field) => setFieldTouched(field, true));
      alert("please enter mandatory fields")
    }
  };

  const renderInputField = (
    fieldJson,
    values,
    handleChange,
    touched,
    handleBlur
  ) => {
    return fieldJson.form.sections.map((section) => {
      const data = section.fields;
      const title = section.sections_title;

      return (
        <Box key={section.sections_title}>
          <Typography variant="h5" sx={{ my: 3 }}>
            {title}
          </Typography>

          {data.map((item) => {
            const { type, name, label, subsection, items, options } = item;

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
                      onBlur={handleBlur}
                    />
                    {errors[name] && touched[name] ? (
                      <Box
                        component="p"
                        sx={{
                          color: theme.palette.error.main,
                          fontSize: "0.875rem", // Equivalent to the default font size for small text in Tailwind
                        }}
                      >
                        {errors[name]}
                      </Box>
                    ) : null}
                  </Box>
                );

              case "checkbox":
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      marginTop: 3,
                    }}
                    key={name}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={name}
                          checked={values[name] || false}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      }
                      label={label}
                    />
                    {errors[name] && touched[name] && (
                      <Typography color="error">{errors[name]}</Typography>
                    )}
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
                      onBlur={handleBlur}
                    />
                    {errors[name] && touched[name] ? (
                      <Box
                        component="p"
                        sx={{
                          color: theme.palette.error.main,
                          fontSize: "0.875rem", // Equivalent to the default font size for small text in Tailwind
                        }}
                      >
                        {errors[name]}
                      </Box>
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
                      onBlur={handleBlur}
                    />
                    {errors[name] && touched[name] ? (
                      <Box
                        component="p"
                        sx={{
                          color: theme.palette.error.main,
                          fontSize: "0.875rem", // Equivalent to the default font size for small text in Tailwind
                        }}
                      >
                        {errors[name]}
                      </Box>
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
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
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
                                  onBlur={handleBlur}
                                />
                                {errors[subField.name] &&
                                touched[subField.name] ? (
                                  <Box
                                    component="p"
                                    sx={{
                                      color: theme.palette.error.main,
                                      fontSize: "0.875rem", // Equivalent to the default font size for small text in Tailwind
                                    }}
                                  >
                                    {errors[subField.name]}
                                  </Box>
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
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                >
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
                                {errors[subField.name] &&
                                touched[subField.name] ? (
                                  <Box
                                    component="p"
                                    sx={{
                                      color: theme.palette.error.main,
                                      fontSize: "0.875rem", // Equivalent to the default font size for small text in Tailwind
                                    }}
                                  >
                                    {errors[subField.name]}
                                  </Box>
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
                      <Box
                        component="p"
                        sx={{
                          color: theme.palette.error.main,
                          fontSize: "0.875rem", // Equivalent to the default font size for small text in Tailwind
                        }}
                      >
                        {errors[name]}
                      </Box>
                    ) : null}
                  </Box>
                );

              case "radio":
                return (
                  <Box  sx={{display:"flex",flexDirection:"column"}}>
                  <Box
                    sx={{
                      // display: "flex",
                      // alignItems: "center",
                      marginTop: 3,
                      // flexWrap: "wrap",
                    }}
                  >
                    <Typography variant="small" component="p">
                      {label}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                         {errors[name]  ? (
                            <Box
                              component="p"
                              sx={{
                                color: theme.palette.error.main,
                                fontSize: "0.875rem",
                              }}
                            >
                              {errors[name]}
                            </Box>
                          ) : null}
                          </Box>
                          </Box>
                      {options.map((option) => (
                        <Box sx={{ml:1.5}}>
                          <RadioButton
                            key={option.id}
                            id={`${name}${option.id}`}
                            value={option.value}
                            checked={values[name] === option.value}
                            onChange={handleChange}
                            label={option.label}
                            radioBtnCategory={item.name}
                        
                           
                          />
                          
                       
                        </Box>
                      ))}
                    </Box>
                 
                );

              default:
                return null;
            }
          })}
        </Box>
      );
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}
      >
        <Box>
          {renderInputField(second, values, handleChange, touched, handleBlur)}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep(1)}
          >
            Back
          </Button>

          <Button
            variant="contained"
            sx={{ ml: 3 }}
            color="primary"
            onClick={()=>changeStepHandler(setTouched,validateForm,setFieldTouched)}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Second;
