



import { Box, MenuItem, TextField, useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../StepContext";


const categoryData = {
  components: {
    name: "category",
    label: "Select the category of your company",
    fields: ["Software", "Hardware", "Electronics"],
  },
};

const subcategoriesData = {
  components: {
    name: "subcategory",
    label: "Select the subcategory of your company",
    fields: {
      Electronics: [
        { label: "Mobile Phones", value: "mobile_phones" },
        { label: "Computers", value: "computers" },
        { label: "Cameras", value: "cameras" },
      ],
      Software: [
        { label: "Software Development", value: "software_development" },
        { label: "QA Testing", value: "qa_testing" },
        { label: "Project Management", value: "project_management" },
      ],
      Hardware: [
        { label: "Processors", value: "processors" },
        { label: "Memory", value: "memory" },
        { label: "Storage Devices", value: "storage_devices" },
      ],
    },
  },
};



export default function ComboBox() {
  const theme = useTheme();

  console.log("theme is ",theme)
  const [arrOfSubcategory, setArrSubcategory] = useState([]);

  const { errors, touched,handleBlur,handleChange,values } = useContext(MultiStepContext);
  
  const { name: category, label, fields } = categoryData.components;
  const { name: subcategory } = subcategoriesData.components;

 
   

  useEffect(() => {
    if (values.category) {
      setArrSubcategory(subcategoriesData.components.fields[values.category] || []);
    }
  }, [values.category]);

  return (
    <Box>
      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <TextField
          id="category-select"
          select
          value={values.category}
          name="category"
          label="Category"
          onChange={handleChange}
          onBlur={handleBlur}
          helperText="Please select your company category"
          variant="standard"
          fullWidth
          error={touched.category && Boolean(errors.category)}
        >
          {categoryData.components.fields.map((field) => (
            <MenuItem key={field} value={field}>
              {field}
            </MenuItem>
          ))}
        </TextField>
        {touched.category && errors.category && (
          <Box
            component="p"
            sx={{
              color: theme.palette.error.main,
              fontSize: "0.875rem",
            }}
          >
            {errors.category}
          </Box>
        )}
      </Box>

      <Box sx={{ minWidth: 120, marginTop: 1 }}>
        <TextField
          name="subcategory"
          value={values[subcategory]}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Subcategory"
          variant="standard"
          select
          helperText="Please select your company subcategory"
          error={touched[subcategory] && Boolean(errors[subcategory])}
        >
          {arrOfSubcategory?.map((field) => (
            <MenuItem key={field.value} value={field.value}>
              {field.label}
            </MenuItem>
          ))}
        </TextField>
        {touched[subcategory] && errors[subcategory] && (
          <Box
            component="p"
            sx={{
              color: theme.palette.error.main,
              fontSize: "0.875rem",
            }}
          >
            {errors[subcategory]}
          </Box>
        )}
      </Box>
      </Box>
    
  );
}