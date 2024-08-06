export const second = {
    form: {
        sections: [
            {
                order: 1,
           
                sections_title: "STATUTORY DETAILS",
                fields:
                    [
                        {
                            name: "gst_no",
                            label: "Good Service and Tax number(GST NO)",
                            required: false,
                            type: "text",
                        }, {
                            name: "pan_no",
                            label: "Permanant Account Number (PAN NO)",
                            required: false,
                            type: "text",

                        },
                        {
                            name: "tan_no",
                            label: "Tax Deduction and Collection Account Number (TAN No)",
                            required: false,
                            type: "text",
                        },
                        {
                            name: "uin_no",
                            label: "Unique Identification Number(UIN NO)",
                            required: false,
                            type: "text",
                        },
                        {
                            name: "urn_no",
                            label: "Udyam Registration Number(URN NO)",
                            required: false,
                            type: "text",
                        },
                        {
                            name: "is_msme",
                            label: "Is Company MSME Registered",
                            required: false,
                            type: "radio",
                            options: [
                                { id: 1, value: "yes", label: "Yes" },
                                { id: 2, value: "no", label: "No" }
                            ]
                        },
                        {
                            name: "is_shop_act",
                            label: "Is Company Shop Act Registered",
                            required: false,
                            type: "radio",
                            options: [
                                { id: 1, value: "yes", label: "Yes" },
                                { id: 2, value: "no", label: "No" }
                            ]

                        },


                    ]
            },
            {
                order: 2,
     sections_title: "BANKING INFORMATION",
                fields: [
                    {
                        name: "bank_name",
                        label: "Bank Name",
                        required: false,
                        type: "text",

                    },
                    {
                        name: "bank_address",
                        label: "Bank Address",
                        required: false,
                        type: "text",
                    },
                    {
                        name: "benificiary_name",
                        label: "Beneficiary Name",
                        required: false,
                        type: "text",
                    },
                    {
                        name: "internation_baccount_number",
                        label: "International Bank Account Number(IBAN)",
                        required: false,
                        type: "text",
                    },
                    {
                        name: "swift_bank_bic_code",
                        label: "Swift/Bank Identifier Code",
                        required: false,
                        type: "text",
                    },
                    {
                        name: "account_currency",
                        label: "Account Currency",
                        required: false,
                        type: "text",
                    },
                    {
                        name: "bank_account_number",
                        label: "Bank Account Number",
                        required: false,
                        type: "text",
                    },



                ],
            }

        ]}
        
    }




