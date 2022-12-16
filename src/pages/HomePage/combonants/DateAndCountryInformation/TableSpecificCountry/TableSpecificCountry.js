import React,{useContext} from 'react';

// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import {motion} from "framer-motion";



function TableSpecificCountry({data}) {

  let datause=data.map(({CountryCode,Country,Cases,Status,Date,Lat},i)=>
      ({id:i,CountryCode:CountryCode,Country:Country,Cases:Cases,Status:Status,Date:Date,Lat:Lat}))
    
      const columns = [
        { field: 'CountryCode', headerName: 'CountryCode ', width:160, headerAlign: 'center',align:"center"},
        { field: 'Country', headerName: 'Country ', width:160 ,   headerAlign: 'center',align:"center"     },
        { field: 'Cases', headerName: 'Cases', width:160 ,    headerAlign: 'center',align:"center"    },
        { field: 'Status', headerName: "Status" , width:160,  headerAlign: 'center',align:"center" },
        { field: 'Date', headerName: "Date" , width:160,  headerAlign: 'center',align:"center" },
        { field: 'Lat', headerName: "Lat" , width:160,  headerAlign: 'center',align:"center" },

    ];
      
    
    
      //To get All Data I Have
      const rows =datause    
    
    
      return (
        <motion.div className='containerAllCoutriesTaable'>
            <DataGrid rows={rows}  columns={columns}  
               sx={{ fontWeight: 'bold'}}   />
        </motion.div>
      );
    }
    

export default TableSpecificCountry
