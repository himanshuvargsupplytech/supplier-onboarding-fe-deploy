// 1. IN ORDER TO BE CONSIDERED FOR REGI STRATION BY THE WORLD TRADE ORGANI ZATION
// PROCUREMENT SECTION PLEASE PROVI DE THE FOLLOWING INFORMATION IN ENGLI SH OR
// FRENCH2
// :

// (a) Certified/audited financial information i.e. Balance Sheet and Income Statement, copy of your
// signed income tax return (US applicants only) or your Annual Report to Shareholders.
// (b) Current and valid copy of certificate of incorporation/business certificate or national equivalent,


export const third = {
    form: {
        sections: [
            {
                order: 1,
                sections_title: "Supporting Documentation",
                fields: [
                    {
                        name: "balance_sheet_certificate",
                        label: "Certified/audited financial information i.e. Balance Sheet and Income Statement",

                        required: false,
                        type: "file",

                    },
                    {
                        name: "income_certificate",
                        label: "Current and valid copy of certificate of incorporation/business certificate",
                        required: false,
                        type: "file",
                    },

                ],
            },
        ],
    },
};



