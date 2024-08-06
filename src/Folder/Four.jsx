import {
  Button,
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";
import { four } from "../components/json/Four";
import { mt } from "date-fns/locale";
import { useTheme } from "@emotion/react";




function Four() {
  const {
    handleChange,
    errors,
    touched,
    submitForm,
    currentStep,
    values,
    setFieldValue,
    handleSubmit,
    setStep,
  } = useContext(MultiStepContext);

  const redirectToFirst = () => {
    setStep(1);
  };

  const theme=useTheme();

  console.log("errors", errors);

  const renderInputField = (fieldJson, values, handleChange) => {
    const data = fieldJson.form.sections[0].fields;

    console.log("values in fourth step", values);

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
            <Box key={name}  sx={{ display: "flex", alignItems: "center", mb: 2,marginTop:3 }}>
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="consent"
                      checked={values.consent}
                      onChange={handleChange}
                    />
                  }
                />

              
              </Box>
              <Box>
                <Typography variant="h6" sx={{fontSize:"16px"}}>
                  {label}
                </Typography>
                {errors.consent && touched.consent && (
                  <Typography sx={{mt:2}} color="error">{errors.consent}</Typography>
                )}
              </Box>
            </Box>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}
      >
        <Box>{renderInputField(four, values, handleChange)}</Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            gap: "2",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep(3)}
          >
            Back
          </Button>
          <br />

          {currentStep === 4 && (
            <Button variant="contained" type="submit">
              Submit
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Four;
