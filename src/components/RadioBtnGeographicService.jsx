import React from "react";
import RadioButton from "../common_components/RadioButton";
import { Box, TextField } from "@mui/material";
import { MultiStepContext } from "../StepContext";
import { useContext } from "react";

const fields = {
  name: "geographic service",
  type: "radio",
  options: [
    { id: 1, value: "National", label: "National" },
    { id: 2, value: "International", label: "International" },
   
  ],

};
function RadioBtnGeographicService({
  geographicService,
  onChange,
  radioBtnCategory,
}) {
  const { name, type, options, additionalInput } = fields;
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    styles,
    setFieldValue,
    setStep,
    setTouched,
  } = useContext(MultiStepContext);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {fields.options.map((option) => {
        //common component for radio buttons
        return (
          <RadioButton
            key={option.id}
            id={`${radioBtnCategory}${option.id}`}
            radioBtnCategory={radioBtnCategory}
            value={option.value}
            checked={geographicService === option.value}
            onChange={onChange}
            label={option.label}
          />
        );
      })}
   
    </Box>
  );
}

export default RadioBtnGeographicService;
