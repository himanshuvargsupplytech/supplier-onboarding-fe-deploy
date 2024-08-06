import * as Yup from "yup";


// var d = new Date(); 
// var x = 3*365; 
// d.setDate(d.getDate() - x);



const threeYearsAgo = new Date();
threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
// Define schema for validating user input
export const schemaForStepOne = Yup.object().shape({
  companyName: Yup.string()
    .required("Company Name is required"),
    

  // address: Yup.string().required("Address is required"),
  company_city: Yup.string()
    // .required("Company City is required")
    .matches(/^[A-Za-z\s]+$/, "The city should contain only alphabets"),
    mobile_number_company: Yup.string()
    .matches(
      /^\d{10}$/,
      "mobile number is not valid"
    )
    .required("Mobile Number is required"),
  email_company: Yup.string()
    .required("Email address is required")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,"Invalid email format"),
  website_address: Yup.string()
    .matches(/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
"Invalid website address format")
   ,
  representative_name:Yup.string().matches(/^[A-Za-z\s]+$/, 'Only letters are allowed.').required("Representative Name is required"),
  designation_name_representative:Yup.string().matches(/^[A-Za-z\s]+$/, 'Only letters are allowed.'),
  email_representative: Yup.string()
  .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,"Invalid email format").  
  required("Email address is required"),

  mobile_number: Yup.string()
    .required("Mobile Number Required")
    .matches(
/^\d{10}$/,"Mobile number is not valid" ),
    established_year: Yup.date().required("Established year is required"),

    // .max(threeYearsAgo,"establish year should be minium 3 year old ").

  // year1: Yup.string().required("required"),
  // year2: Yup.string().required("required"),
  // year3: Yup.string().required("required"),
  inr1: Yup.string().matches(
    /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/,
    "invalid input"
  ),
  inr2: Yup.string().matches(
    /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/,
    "invalid input"
  ),

  inr3: Yup.string().matches(
    /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/,
    "invalid input"
  ),


  // category:Yup.string().required("category required"),
  // subcategory:Yup.string().required("subcategory required"),


 





});



export const schemaForStepTwo=Yup.object().shape({
  is_msme:Yup.string().required("This is required"),
  // pan_no:Yup.string().required("This is required").matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,"invalid formate"),
  // gst_no:Yup.string().required("This is required").matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid format"),
  // details_of_service: Yup.string().required("required"),
  // tan_no:Yup.string().matches(/^[A-Z]{4}\d{5}[A-Z]$/,"invalid formate"),
  // uin_no:Yup.string().matches(/^[0-9]{2}[A-Z0-9]{10}[0-9]Z[A-Z0-9]$/,"invalid formate"),
  //  urn_no:Yup.string().matches(/^UDYAM-[A-Z]{2}-00-\d{7}$/,"invalid formate"),
  //  bank_name:Yup.string().matches(/^[A-Za-z]+$/,"bank name should be valid alphabetical letters"),
  //  benificiary_name:Yup.string().matches(/^[A-Za-z]+$/,"benificiary name should be alphabetical letters"),
  //  internation_baccount_number: Yup.string().matches(/^[A-Z]{2}\d{2}[A-Z0-9]{1,35}$/,"invalid formate"),
  //  swift_bank_bic_code: Yup.string().matches(  /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/,"invalid formate"),
  //  bank_account_number:Yup.string().matches(/^[0-9]/,"numeric only allowed")
 




}
)


  
 

  // consent:Yup.boolean().oneOf([true],"Accept Terms and conditions")



export const schemaForStepThree=Yup.object().shape({

  // consent:Yup.boolean().oneOf([true],"Accept Terms and conditions")
}
)

export const schemaForStepfour=Yup.object().shape({

  consent:Yup.boolean().oneOf([true],"Accept Terms and conditions")
}
)
