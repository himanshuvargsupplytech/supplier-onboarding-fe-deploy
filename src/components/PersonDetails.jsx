import React, { useState } from "react";
import LegalStructureRadioButtons from "./LegalStructureRadioButtons";
import TypesOfBussinessRadioButtons from "./TypesOfBussinessRadioButtons";
import RadioBtnGeographicService from "./RadioBtnGeographicService";

//importing validation schema for form inputs
// import { validationSchema } from "../Schemas";

import { useFormik } from "formik";
import InputField from "./InputField";
function PersonDetails({
  formData,
  grossAnnualSales,
  allRadioButtons,
  onSubmit,
}) {
  // fields data
  const inputFields = [
    {
      label: "Name of the Company",
      name: "companyName",
      type: "text",
      inputType: "normal",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      inputType: "normal",
    },
    {
      label: "Telephone Number",
      name: "telephoneNumber",
      type: "text",
      inputType: "normal",
    },
    {
      label: "Fax Number",
      name: "faxNumber",
      type: "text",
      inputType: "normal",
    },
    {
      label: "Email Address",
      name: "emailAddress",
      type: "email",
      inputType: "normal",
    },
    {
      label: "Website Address",
      name: "websiteAddress",
      type: "text",
      inputType: "normal",
    },
    {
      label: "Name and Title of Company Representative",
      name: "nameAndTitle",
      type: "text",
      inputType: "normal",
    },
    {
      label: "Direct E-mail Address of the Company",
      name: "directEmailAddress",
      type: "email",
      inputType: "normal",
    },
    {
      label: "Telephone Numbers Of Company Representative",
      name: [
        "telephoneNoOfRepresentativeDirect",
        "telephoneNoOfRepresentativeMobile",
      ],
      options: ["Direct Number", "Mobile Number"],
      inputType: "Advance",
    },

    {
      label: "Date Company was established(min. 3 years required)",
      name: "establishedDate",
      type: "date",
      inputType: "normal",
    },

    {
      label: "Gross Annual Sales for the Last Three Years",
      datafields: [
        {
          label: "Year",
          name: "year1",
          type: "date",
        },
        {
          label: "Year",
          name: "year2",
          type: "date",
        },
        {
          label: "Year",
          name: "year3",
          type: "date",
        },
        {
          label: "CHF",
          name: "chf1",
          type: "text",
        },
        {
          label: "CHF",
          name: "chf2",
          type: "text",
        },
        {
          label: "CHF",
          name: "chf3",
          type: "text",
        },
      ],
      inputType: "superior",
    },

    {
      label: "Details Of Service",
      name: "detailsOfService",
      type: "text",
      inputType: "normal",
    },
  ];

  //gathering all initialvalues of variables
  const combineData = {
    ...allRadioButtons,
    ...grossAnnualSales,
    ...formData,
  };

  //instantiate useFormik hook for management of forms state and also for validation
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: combineData,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  console.log("values", values);

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl ">Vendor Registration Form</h2>
        <div className="  h-[100%] flex flex-row justify-center items-center  ">
          <form className="w-[50%]" onSubmit={handleSubmit}>
            <div className="  text-sm  font-bold text-gray-800">
              <h4>SECTION 1: COMPANY DETAILS AND GENERAL INFORMATION</h4>
            </div>
            {inputFields.map((field) => (
              //common component for input fields
              <InputField
                key={field.label}
                field={field}
                value={values}
                error={errors}
                touched={touched}
                onChange={handleChange}
              />
            ))}

            <div className=" w-[90%] justify-evenly flex flex-col border-2">
              <label htmlFor="" className="">
                Geographic service area(check one)
              </label>
              {/* component for separately created radio button */}
              <RadioBtnGeographicService
                geographicService={values.geographicService}
                onChange={handleChange}
                radioBtnCategory="geographicService"
              />
              {errors.geographicService && touched.geographicService ? (
                <p className="text-red-500">{errors.geographicService}</p>
              ) : null}
            </div>

            <div className=" w-[90%] justify-evenly flex flex-row border-2">
              <label htmlFor="" className="border-r-2 w-[50%]">
                Legal Structure ( Check One)
              </label>
              <LegalStructureRadioButtons
                legalStructure={values.legalStructure}
                onChange={handleChange}
                radioBtnCategory="legalStructure"
              />
              {errors.legalStructure && touched.legalStructure ? (
                <p className="text-red-500">{errors.legalStructure}</p>
              ) : null}
            </div>
            <div className=" w-[90%] justify-evenly flex flex-row border-2">
              <label htmlFor="" className="border-r-2 w-[50%]">
                Type of Bussiness/Commodity Service ( Check One)
              </label>
              <TypesOfBussinessRadioButtons
                businessType={values.businessType}
                onChange={handleChange}
                radioBtnCategory="businessType"
              />
              {errors.businessType && touched.businessType ? (
                <p className="text-red-500">{errors.businessType}</p>
              ) : null}
            </div>

            <div className="  text-sm  font-bold text-gray-800">
              <h4>SECTION4: CERTIFICATION</h4>
            </div>
            {/* consent */}
            <div className=" w-[90%] justify-evenly flex flex-row-reverse border-2">
              <label htmlFor="consent" className="w-[50%] border-l-2">
                I, the undersigned, hereby accept the WTO General Terms &
                Conditions:
              </label>
              <input
                type="checkbox"
                name="consent"
                id="consent"
                value={values.consent}
                onChange={handleChange}
              />
              {errors.consent && touched.consent ? (
                <p className="text-red-500">{errors.consent}</p>
              ) : null}
            </div>

            <div className=" w-[90%] justify-evenly flex flex-row-reverse border-2">
              <button
                type="submit"
                className=" my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default React.memo(PersonDetails);
