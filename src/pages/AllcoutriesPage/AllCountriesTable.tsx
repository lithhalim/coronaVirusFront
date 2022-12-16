import React ,{useState}from 'react';

// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import {motion} from "framer-motion";
import "./style/style.scss"
import axios from 'axios';
import { informationEnum, NotificationSectioncombonants } from '../../combonants/NotificationSection/NotificationSection';


function TableAllCountry({data}:any) {

  const [ShwoNotification,setShowNotification]=useState<any>(false)

  let datause=data?.map(({Country,Date,TotalConfirmed,TotalDeaths,TotalRecovered}:any,i:number)=>
  ({id:i,Country:Country,Date:Date,TotalConfirmed:TotalConfirmed,TotalDeaths:TotalDeaths,TotalRecovered:TotalRecovered}))
    

      const columns:any = [
        { field: 'Country', headerName: 'Country ', width:160 ,   headerAlign: 'center',align:"center"     },
        { field: 'Date', headerName: 'Date', width:160 ,    headerAlign: 'center',align:"center"    },
        { field: 'TotalConfirmed', headerName: "TotalConfirmed" , width:160,  headerAlign: 'center',align:"center" },
        { field: 'TotalDeaths', headerName: "TotalDeaths" , width:160,  headerAlign: 'center',align:"center" },
        { field: 'TotalRecovered', headerName: "TotalRecovered" , width:160,  headerAlign: 'center',align:"center" },
        { field: 'AddFavorate', headerName: 'Add Favorate ', width:200, headerAlign: 'center', align:"center", 
        renderCell:(params:any)=>{
          return(
              <button onClick={GetData} datatype={JSON.stringify(params.row)} className="addButton">
                Add To Favorate
              </button>)}},
    ];
      
    
    
      //To get All Data I Have
      const rows =datause;





      const GetData=(event:any)=>{
        event.preventDefault();
        let datause=JSON.parse(event.currentTarget.getAttribute("datatype"))
        axios.post(`${process.env.REACT_APP_API}AddFavorate`,datause).then((data)=>{
          if(data?.data=="The requested item has been added to my favourites"){
            setShowNotification(informationEnum.Added);
            setTimeout(()=>{
              setShowNotification(false);
            },2000)
          }else{
            setShowNotification(informationEnum.warning)
            setTimeout(()=>{
              setShowNotification(false);
            },2000)
          }
        })
      }
    
    
    
      return (
        <div >
          {ShwoNotification?<NotificationSectioncombonants information={ShwoNotification} />  :<></>}
          <motion.div className='containerAllCoutriesTaable'  >
              <DataGrid rows={rows}  columns={columns}  
                sx={{ fontWeight: 'bold'}}   />
          </motion.div>
        </div>
      );
    }
    

export default TableAllCountry
