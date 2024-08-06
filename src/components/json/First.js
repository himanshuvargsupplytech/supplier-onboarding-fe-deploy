export const first = {
  form: {
    sections: [
      {
        order: 1,
        sections_title: "COMPANY DETAILS AND GENERAL INFORMATION",
        fields: [
          {
            name: "companyName",
            label: "Name Of Company",
            required: false,
            type: "text",
          },
          {
            name: "address",
            label: "Address",
            required: false,
            type: "text",
          },
          {
            name: "company_city",
            label: "City",
            required: false,
            type: "text",
          },
          {
            name: "mobile_number_company",
            label: "Mobile Number of Company (specify 10 digit mobile number without country code)",
            required: false,
            type: "text",
          },
          // {
          //     name: "fax_number",
          //     label: "Fax Number",
          //     required: false,
          //     type: "text",
          // },
          {
            name: "email_company",
            label: "E-mail Address",
            required: false,
            type: "email",
          },
          {
            name: "website_address",
            label: "Website Address",
            required: false,
            type: "text",
          },

          {
            subsection: "Company Representative Information",
            type: "array",
            items: [
              {
                name:"representative information",
                datatype: "text",
                fields: [
                  {
                    name: "representative_name",
                    label: "Name of the Company Representative ",
                    required: false,
                    type: "text",
                  },
                  {
                    name: "designation_name_representative",
                    label: "Designation",
                    required: false,
                    type: "text",
                  },
                  {
                    name: "email_representative",
                    label: "E-mail Address of the Company Representative",
                    required: false,
                    type: "email",
                  },

                  {
                    name: "mobile_number",
                    label: "Mobile Number (specify 10 digit mobile number without country code)",
                    required: false,
                    type: "text",
                  },
                ],
              },
            ],
          },
          {
            name: "established_year",
            label: "Date Company Was Established",
            required: false,
            type: "date",
          },
          {
            subsection: "Gross Annual Sales For The Last Three Years (Specify in Crores)",
            type: "advanced",
            items: [
              {
                itemName:"datePicker",
                fields: [
                  {
                    name: "year1",
                    label: "Year",
                    required: false,
                    type: "date",
                  },
                  {
                    name: "year2",
                    label: "Year",
                    required: false,
                    type: "date",
                  },

                  {
                    name: "year3",
                    label: "Year",
                    required: false,
                    type: "date",
                  },

                 
                ],
              },
              {
                itemName:"income",
                fields:[
                    {
                        name: "inr1",
                        label: "INR",
                        required: false,
                        type: "text",
                      },
                      {
                        name: "inr2",
                        label: "INR",
                        required: false,
                        type: "text",
                      },
                      {
                        name: "inr3",
                        label: "INR",
                        required: false,
                        type: "text",
                      },
                ]
              }
            ],
          },

          {
            name: "category",
            label: "Select the category of your company",
            fields: ["software", "hardware", "electronics"],
            type: "dropdown",
          },
          {
            name: "subcategory",
            label: "select subcategories of your company",
            subcategories: {
              electronics: [
                { label: "Mobile Phones", value: "mobile_phones" },
                { label: "Computers", value: "computers" },
                { label: "Cameras", value: "cameras" },
              ],
              software: [
                {
                  label: "Software Development",
                  value: "software_development",
                },
                { label: "QA Testing", value: "qa_testing" },
                { label: "Project Management", value: "project_management" },
              ],
              hardware: [
                { label: "Processors", value: "processors" },
                { label: "Memory", value: "memory" },
                { label: "Storage Devices", value: "storage_devices" },
              ],
            },
          },
        ],
      },
    ],
  },
};

// fname: '',
// lname: '',
// email: '',
// phone_no: '',
// college: '',
// mobile_no: '',
// city: '',
