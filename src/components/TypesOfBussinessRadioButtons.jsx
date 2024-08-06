import React from "react";
import RadioButton from "../common_components/RadioButton";
import { MultiStepContext } from "../StepContext";
import { useContext } from "react";
import { Box } from "@mui/material";

const fields = {
  name: "type_of_bussiness",
  label: "",
  options: [
    { id: 1, value: "Trader", label: "Trader" },
    {
      id: 2,
      value: "Authorised Distrubuter/Dealer",
      label: "Authorised Distrubuter/Dealer",
    },
    { id: 3, value: "Manufacturer", label: "Manufacturer" },
    { id: 4, value: "Service Provider", label: "Service Provider" },
    {
      id: 5,
      value: "Contractor",
      label: "Contractor",
    },
    { id: 6, value: "Freight/Transporter", label: "Freight/Transporter" }
    
  ]
};
function TypesOfBussinessRadioButtons({
  businessType,
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
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={`${radioBtnCategory}${option.id}`}
          value={option.value}
          checked={businessType === option.value}
          onChange={onChange}
          label={option.label}
          radioBtnCategory={radioBtnCategory}
        />
      ))}
    </Box>
  );
}

export default TypesOfBussinessRadioButtons;
