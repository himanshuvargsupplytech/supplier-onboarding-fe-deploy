import * as React from 'react';
import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'companyName',
      headerName: 'Company Name',
      width: 150,
    
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 150,
      
    },
    {
      field: 'company_city',
      headerName: 'City',
      type: 'text',
      width: 110,
     
    },
    {
      field: 'telephone_number',
      headerName: 'TelePhone Number',
      sortable: false,
      width: 110,
    },
    {
        field: 'email_company',
        headerName: 'Email Address',
        width: 110,
    },
    {
        field: 'website_address',
        headerName: 'Website Address',
        sortable: false,
        width: 110,
    },
    {
        field: 'established_year',
        headerName: 'Established Year',
        sortable: false,
        width: 110,
    },
    {
        field: 'category',
        headerName: 'Category',
        sortable: false,
        width: 110,

    },
    {
        field: 'subcategory',
        headerName: 'SubCategory',
        sortable: false,
        width: 110,
    }
  ];


  
  function ShowDataGrid(props) {

    const {data=[],getRowId}=props
    return (
      <Box sx={{height:400,width:'100%'}}>
        <DataGrid
        getRowId={getRowId}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

        
      </Box>
    )
  }
  
  export default ShowDataGrid
  

