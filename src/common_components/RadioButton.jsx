import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";

import { Box, FormControl, RadioGroup } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function RadioButton({
  id,
  value,
  checked,
  onChange,
  label,
  radioBtnCategory,
  onBlur,
}) {
  const theme = useTheme();
  const {
    handleChange,
    errors,
    touched,
    values,
    setFieldValue,
    setStep,
    // handleBlur,
  } = useContext(MultiStepContext);

  console.log("radioButton", radioBtnCategory);
  return (
    <FormControl component="fieldset" sx={{ width: ["100%", "44%"], my: 2 }}>
      <Box>
        <RadioGroup name="position">
          <FormControlLabel
            sx={{
              ml: 3,
              width: "1rem",
              height: "1rem",
              color: "blue.600",
              backgroundColor: "gray.100",
              borderColor: "gray.300",
            }}
            type="radio"
            id={id}
            name={radioBtnCategory}
            value={value}
            control={<Radio />}
            labelPlacement=""
            checked={checked}
            label={label}
            onChange={(e) => {
              // console.log("e", e, "value", value);
              onChange(e);
            }}
            // onBlur={handleBlur}
          />

          {/* <Typography>{label}</Typography> */}
        </RadioGroup>
        {errors[radioBtnCategory] && (
          <Box
            component="p"
            sx={{
              color: theme.palette.error.main,
              fontSize: "0.875rem",
            }}
          >
            {errors[radioBtnCategory]&&touched[radioBtnCategory]}
          </Box>
        )}
      </Box>
    </FormControl>
  );
}

export default RadioButton;
