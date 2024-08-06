import React, { useEffect } from "react";
import RadioButton from "../common_components/RadioButton";
import { Box,TextField } from "@mui/material";

import { useContext } from "react";
import { MultiStepContext } from "../StepContext";

const fields={
  options:[
    { id: 1, value: "Limited Company", label: "Limited Company" },
    { id: 2, value: "PVT Limited Company", label: "PVT Limited Company" },
    { id: 3, value: "Proprietorship", label: "Proprietorship" },
    { id: 4, value: "Partnership Firm", label: "Partnership Firm" },
    { id: 5, value: "LLP", label: "LLP" },
    { id: 6, value: "Other", label: "Other" },
   
  ],
  
  additionalInput: {
    name: "customLegalStructure",
    label: "Please specify",
    type: "text",
  },
}



function LegalStructureRadioButtons({
  legalStructure,
  onChange,
  radioBtnCategory,
}) {

  const { name, type, options=[], additionalInput } = fields;
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

  // const modify=(values)=>
  //   {
  //     console.log("hey.....................................")
  //     setFieldValue('legalStructure', values.customLegalStructure);
      
  //   }


  // useEffect(()=>{
  //   if(values.legalStructure=="Other"){
  //     modify(values)
  //   }
  // },[handleChange])
  
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={`${radioBtnCategory}${option.id}`}
          value={option.value}
          checked={legalStructure === option.value}
          onChange={onChange}
          label={option.label}
          radioBtnCategory={radioBtnCategory}
        />
      ))}
      </Box>

      {
        values.legalStructure==="Other"&&(
       <TextField
        label={additionalInput.label}
        variant="standard"
        name={fields.additionalInput.name}
        value={values[fields.additionalInput.name]}
        onChange={handleChange}
      />
    
        )
      
      


}


    
    </Box>
  );
}

export default LegalStructureRadioButtons;

