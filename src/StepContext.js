import axios from "axios";
import { useFormik } from "formik";
import React, { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import {
  schemaForStepOne,
  schemaForStepTwo,
  schemaForStepThree,
  schemaForStepfour,
} from "./Schemas/demo";

import { API_URL } from "./config";

const MultiStepContext = createContext();

function StepContext() {
  const [currentStep, setStep] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [consent, setConsent] = useState(false);
  const navigate = useNavigate();

  function getValidationSchema(currentStep) {
    switch (currentStep) {
      case 1:
        return schemaForStepOne;

      case 2:
        return schemaForStepTwo;

      case 3:
        return schemaForStepThree;

      case 4:
        return schemaForStepfour;

      default:
        return schemaForStepOne;
    }
  }

  const initialValues = {
    companyName: "",
    address: "",
    company_city: "",
    mobile_number_company: "",
    email_company: "",
    website_address: "",
    representative_name: "",
    designation_name_representative: "",
    email_representative: "",
    mobile_number: "",
    established_year: null,
    // // details_of_service: "",
    year1: null,
    inr1: "",
    year2: null,
    inr2: "",
    year3: null,
    inr3: "",
    geographicService: "",
    businessType: "",
    legalStructure: "",
    customLegalStructure: "",
    category: "",
    subcategory: "",
    bank_name: "",
    bank_address: "",
    benificiary_name: "",
    internation_baccount_number: "",
    swift_bank_bic_code: "",
    account_currency: "rupee",
    bank_account_number: "",
    gst_no: "",
    pan_no: "",
    tan_no: "",
    uin_no: "",
    urn_no: "",
    is_msme: "",
    is_shop_act: "",
    balance_sheet_certificate: null,
    income_certificate: null,
    consent: false,
  };

  const styles = {
    input: {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        display: "none",
      },
      "&[type=number]": {
        MozAppearance: "textfield",
      },
    },
  };

  const notify = () => {
    toast.success("Form Submitted Successfully ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const submitForm = async (data) => {
    if (!data.consent) {
      console.log("this is error");
      contextValue.setErrors({
        ...contextValue.errors,
        consent: "please accept the terms and conditions",
      });
    }

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await axios.post(
        `${API_URL}/api/v1/submitData`,
        formData
      );

      setFinalData(response.data);
      navigate("/ThankyouPage");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      notify();
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema(currentStep),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: function (values, { resetForm }) {
      setStep(1);

      submitForm(values);
      resetForm();
    },
  });

  const contextValue = useMemo(
    () => ({
      values: formik.values,
      setErrors: formik.setErrors,
      errors: formik.errors,
      touched: formik.touched,
      setTouched: formik.setTouched,
      validateForm: formik.validateForm,
      setFieldTouched: formik.setFieldTouched,
      handleChange: formik.handleChange,
      handleBlur: formik.handleBlur,
      handleSubmit: formik.handleSubmit,
      setFieldValue: formik.setFieldValue,
      resetForm: formik.resetForm,
      styles,
      submitForm,
      currentStep,
      setStep,
    }),
    [formik, styles, submitForm, currentStep]
  );

  return (
    <MultiStepContext.Provider value={contextValue}>
      <App />
    </MultiStepContext.Provider>
  );
}

export { MultiStepContext, StepContext };
