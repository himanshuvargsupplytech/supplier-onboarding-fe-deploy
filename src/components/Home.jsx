import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PersonDetails from "./PersonDetails";

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const formData = {
    companyName: "",
    address: "",
    telephoneNumber: "",
    faxNumber: "",
    emailAddress: "",
    websiteAddress: "",
    nameAndTitle: "",
    directEmailAddress: "",
    telephoneNoOfRepresentativeDirect: "",
    telephoneNoOfRepresentativeMobile: "",
    establishedDate: "",
    detailsOfService: "",
    consent: "",
  };

  const grossAnnualSales = {
    year1: "",
    chf1: "",
    year2: "",
    chf2: "",
    year3: "",
    chf3: "",
  };

  const allRadioButtons = {
    geographicService: "",
    businessType: "",
    legalStructure: "",
  };

  const navigate = useNavigate();

  //function add to post data to backend
  const submitForm = async (data) => {
    try {
      const response = await axios.post("/api/v1/submitData", data);
      setSubmitted(true);
      navigate("/ThankyouPage");
    } catch (error) {
      console.log("error aya", error.message);
    }
  };

  return (
    <div>
      {/* component for form layout */}
      <PersonDetails
        formData={formData}
        allRadioButtons={allRadioButtons}
        grossAnnualSales={grossAnnualSales}
        onSubmit={submitForm}
      />
    </div>
  );
}

export default Home;
