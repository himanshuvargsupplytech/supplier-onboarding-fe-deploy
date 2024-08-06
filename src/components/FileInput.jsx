import React, { Children, useState } from "react";
import { Box, Button, Input, Typography, TextField } from "@mui/material";

export const MaterialFileInput = ({ name, setFieldValue }) => {
  const [uploadfileName, setUploadfileName] = useState();
  const handleFileChange = (event) => {
    const { name: fileName } = event.target.files[0];

    setUploadfileName(fileName);

    console.log(
      "files input",
      event.target.files[0],
      typeof event.target.files[0]
    );
    setFieldValue(name, event.target.files[0]);
  };

  return (
    <Box>
      <Input
        accept="application/pdf"
        id={name}
        type="file"
        label="upload"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <label htmlFor={name}>
        <Button
          variant="contained"
          color="primary"
          sx={{ my: 2 }}
          component="span"
        >
          Upload File
        </Button>
      </label>

      <Typography>{uploadfileName}</Typography>
    </Box>
  );
};
