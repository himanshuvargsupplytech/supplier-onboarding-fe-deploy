import React, { useContext, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  TextField,
  Box,
  Typography,
  Button,
  FormControl,
  Container,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MultiStepContext } from "../StepContext";
import { first } from "../components/json/First";
import ComboBox from "../components/ComboBox";
import { useNavigate } from "react-router-dom";

import RadioBtnGeographicService from "../components/RadioBtnGeographicService";
import TypesOfBussinessRadioButtons from "../components/TypesOfBussinessRadioButtons";
import LegalStructureRadioButtons from "../components/LegalStructureRadioButtons";

import { useTheme } from "@mui/material/styles";

import format from 'date-fns/format';

function First() {
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    validateForm,
    values,
    styles,
    setFieldValue,
    setStep,
    setTouched,
    setFieldTouched,
  } = useContext(MultiStepContext);

  // const{...contextValue}=useContext(MultiStepContext);


  // const currentYear=new Date().getFullYear();

  // const minimumYear=currentYear-3;


  const [isNextClick,setIsNextClick]=useState(false);

const currentYear = new Date().getFullYear();
const threeYearsAgo = new Date();
threeYearsAgo.setFullYear(currentYear - 3);


const formateDate=(date1)=>{
  console.log("date");
  return date1? format(date1,'yyyy'):'';
  
}



const isEmptyObject=(obj)=>{
  return Object.keys(obj).length === 0
}


const changeStepHandler= async()=>{

  console.log("errors in change",errors);
  setIsNextClick(true);

  const errorsOnNextClick = await validateForm();
    if (Object.keys(errorsOnNextClick).length === 0) {
      setStep(2);
    } else {
      // setTouched({ email_representative:true });
      Object.keys(errorsOnNextClick).forEach((field) => setFieldTouched(field, true));
      alert("please enter mandatory fields")
    }




  // if(isEmptyObject(errors))
  // {
  //   setStep(2);
  // }
  // else{
  //   alert("please enter mandatory fields")
  //   return ;
   

  // }
 
}

  console.log("errors in first ", errors);

  const theme = useTheme();
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/getSupplier");
  };

  const handleBlurForDatePicker = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const renderInputField = (fieldJson, values, handleChange) => {
    return fieldJson.form.sections.map((section) => {
      const order = section.order;
      const data = section.fields;
      const title = section.sections_title;

      return (
        <Box key={order}>
          <Typography variant="h5">{title}</Typography>
          {data.map((item, index) => {
            const { type, name, label, subsection, items } = item;

            // sx={{fontSize:"4vw"}}

            switch (type) {
              case "text":
              case "email":
                return (
                  <Box key={name} sx={{ marginTop: 3 }}>
                    <TextField
                      fullWidth
                      type={type}
                      label={label}
                      autoFocus={name=="companyName"}
                      name={name}
                      variant="standard"
                      value={values[name] || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors[name] && touched[name] && (
                      <Box
                        component="p"
                        sx={{
                          color: theme.palette.error.main,
                          fontSize: "0.875rem",
                        }}
                      >
                        {errors[name]}
                      </Box>
                    )}
                  </Box>
                );

              case "array":
                return (
                  <Box key={name} sx={{ marginTop: 3 }}>
                    <Typography variant="h6">{subsection}</Typography>
                    {items?.map((subItem, subIndex) => (
                      <Box key={subItem.name} sx={{ gap: 2, marginTop: 1 }}>
                        {subItem.fields.map((subField, subFieldIndex) => (
                          <Box
                            key={subField.name}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {subField.type === "text" && (
                              <>
                                <TextField
                                  fullWidth
                                  type={subField.type}
                                  label={subField.label}
                                  name={subField.name}
                                  variant="standard"
                                  // autoFocus={name=="representative_name"||name=="designation_name_representative"||name=="email_representative"}

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
                                      fontSize: "0.875rem",
                                    }}
                                  >
                                    {errors[subField.name]}
                                  </Box>
                                ) : null}
                              </>
                            )}
                            {subField.type === "email" && (
                              <Box key={name} sx={{ marginTop: 3 }}>
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
                                      fontSize: "0.875rem",
                                    }}
                                  >
                                    {errors[subField.name]}
                                  </Box>
                                ) : null}
                              </Box>
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
                                    renderInput={(params) => (
                                      <TextField {...params} inputProps={{ ...params.inputProps, readOnly: true }} />
                                    )}
                                    value={formateDate(values[subField.name])}
                                    onChange={(newValue) =>
                                      setFieldValue(subField.name, newValue)
                                    }
                                    onClose={() =>
                                      handleBlurForDatePicker(subField.name)
                                    }
                                    views={['year']}
                                    variant="standard"
                                  />
                                </LocalizationProvider>


                                {
                                  console.log("subfield",[subField.name])
                                }

                                {/* {
                                  errors[subField.name]&&(
                                    <Box
                                    component="p"
                                    sx={{
                                      color: theme.palette.error.main,
                                      fontSize: "0.875rem",
                                    }}
                                  >
                                    {errors[subField.name]}
                                  </Box>

                                  )
                                } */}
                                {errors[subField.name] &&
                                touched[subField.name] &&
                                !values[subField.name] ? (
                                  <Box
                                    component="p"
                                    sx={{
                                      color: theme.palette.error.main,
                                      fontSize: "0.875rem",
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

              case "advanced":
                return (
                  <Box key={name}>
                    <Typography>{item.subsection}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        marginTop: "3",
                        justifyContent: "space-between",
                      }}
                    >
                      {items.map((subItem, subItemIndex) => (
                        <Box
                          key={subItemIndex}
                          // sx={{  display: "flex", flexDirection: "column" }}
                        >
                          {subItem.fields.map((subField, subFieldIndex) => (
                            <Box
                              key={subFieldIndex}
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              {subField.type === "text" && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    width: "100%",
                                    marginTop: 2,
                                  }}
                                >
                                  <TextField
                                    fullWidth
                                    type={subField.type}
                                    label={subField.label}
                                    name={subField.name}
                                    variant="standard"
                                    value={values[subField.name] || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{ my: "3", width: "100%" }}
                                    // increase width
                                  />
                                  {errors[subField.name] &&
                                  touched[subField.name] ? (
                                    <Box
                                      component="p"
                                      sx={{
                                        color: theme.palette.error.main,
                                        fontSize: "0.875rem",
                                      }}
                                    >
                                      {errors[subField.name]}
                                    </Box>
                                  ) : null}
                                </Box>
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
                                      fullWidth
                                      views={['year']}
                                      closeOnSelect={true}
                                      label={subField.label}
                                      value={values[subField.name]}

                                      renderInput={(params) => (
                                        <TextField {...params} inputProps={{ ...params.inputProps, readOnly: true }} />
                                      )}
                                      onChange={(newValue) =>
                                        setFieldValue(subField.name, newValue)
                                      }
                                      onClose={() =>
                                        handleBlurForDatePicker(subField.name)
                                      }
                                      variant="standard"
                                    />
                                  </LocalizationProvider>
                                  {errors[subField.name] &&
                                  touched[subField.name] &&
                                  !values[subField.name] ? (
                                    <Box
                                      component="p"
                                      sx={{
                                        color: theme.palette.error.main,
                                        fontSize: "0.875rem",
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
                  </Box>
                );

              case "date":
                return (
                  <Box
                    key={name}
                    sx={{
                      marginTop: 3,
                      display: "flex",
                      alignItems: "center",
                    
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ paddingBottom: 3, width: "100%" }}>
                      <Typography>{label}</Typography>
                    </Box>
                    <Box sx={{  flexDirection:"column",
}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Box sx={{ marginTop: 3, py: 3 }}>
                        <DatePicker
                          sx={{ width: "100%" }}
                          fullWidth
                          // autoFocus
                          name={name}
                          closeOnSelect={true}
                          label="Select a Year"
                        
                          value={values[name]}
                          onChange={(newValue) => setFieldValue(name, newValue)}
                          variant="standard"
                          onClose={() => handleBlurForDatePicker(name)}
                          // maxDate={threeYearsAgo}
                        />
                      </Box>
                    </LocalizationProvider>
                    {errors[name] && touched[name] && !values[name] ? (
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
      <Box sx={{ position: "sticky" }}>
        {/* <Button
          variant="outlined"
          onClick={redirect}
          color={theme.breakpoints.up("md") ? "primary" : "secondary"}
        >
          Search Suppliers
        </Button> */}
      </Box>
      <Paper elevation={3} sx={{ p: 4 }}>
        {renderInputField(first, values, handleChange)}

        <Box sx={{ mb: 2, marginTop: 3 }}>
          <FormControl>
            <ComboBox />
          </FormControl>
        </Box>

        <Box sx={{ mb: 2, marginTop: 3 }}>
          <FormControl component="fieldset">
            <Typography variant="h6" component="legend">
              Geographic service area
            </Typography>
            <RadioBtnGeographicService
              geographicService={values.geographicService}
              onChange={handleChange}
              onBlur={handleBlur}
              radioBtnCategory="geographicService"
            />
            {errors.geographicService && touched.geographicService && (
              <Typography color="error">{errors.geographicService}</Typography>
            )}
          </FormControl>
        </Box>

        <Box sx={{ mb: 2, marginTop: 3 }}>
          <FormControl component="fieldset">
            <Typography variant="h6" component="legend">
              Legal Structure
            </Typography>
            <LegalStructureRadioButtons
              legalStructure={values.legalStructure}
              onChange={handleChange}
              onBlur={handleBlur}
              radioBtnCategory="legalStructure"
            />
            {errors.legalStructure && touched.legalStructure && (
              <Typography color="error">{errors.legalStructure}</Typography>
            )}
          </FormControl>
        </Box>
        <Box sx={{ mb: 2, marginTop: 3 }}>
          <FormControl component="fieldset">
            <Typography variant="h6" component="legend">
              Type of Business/Commodity Service
            </Typography>
            <TypesOfBussinessRadioButtons
              businessType={values.businessType}
              onChange={handleChange}
              onBlur={handleBlur}
              radioBtnCategory="businessType"
            />
            {errors.businessType && touched.businessType && (
              <Typography color="error">{errors.businessType}</Typography>
            )}
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" onClick={()=>changeStepHandler(validateForm, setTouched, setFieldTouched)}>
          Next
        </Button>
      </Paper>
    </Container>
  );
}

export default First;
