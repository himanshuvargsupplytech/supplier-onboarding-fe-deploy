import * as Yup from "yup";

// defination schema for  validating user input
export const validationSchema = Yup.object({
  companyName: Yup.string().required("CompanyName is required"),
  address: Yup.string().required("address is required"),
  emailAddress: Yup.string()
    .required("Emailaddress is required")
    .email("Invalid email formate"),
  telephoneNumber: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("TelePhone Number is required"),
  faxNumber: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Fax number must be in the format XXX-XXX-XXXX"
    )
    .required("Fax number is required"),

  websiteAddress: Yup.string().required(" websiteAddress is required"),
  nameAndTitle: Yup.string().required("nameAndTitle is required"),
  directEmailAddress: Yup.string().required("directEmailAddress is required"),
  telephoneNoOfRepresentativeDirect: Yup.string()
    .required("Direct Telephone Number Number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  telephoneNoOfRepresentativeMobile: Yup.string()
    .required("Mobile Number required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  establishedDate: Yup.date().required("establishedDate is required"),
  detailsOfService: Yup.string().required(" detailsOfService is required"),
  year1: Yup.date().required("Year is required"),
  year2: Yup.date().required("Year is required"),
  year3: Yup.date().required("Year is required"),
  chf1: Yup.number().required("This is required"),
  chf2: Yup.number().required("This is required"),
  chf3: Yup.number().required("This is required"),
  geographicService: Yup.string().required("please select at least one option"),
  businessType: Yup.string().required("please select at least one option"),
  legalStructure: Yup.string().required("please select at least one option"),
  consent: Yup.string().required("please accept this consent "),
});
