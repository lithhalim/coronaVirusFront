import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React ,{useState} from 'react';

// Table Nnd Tyle Section 
import { DataGrid } from '@mui/x-data-grid';
import {motion} from "framer-motion";
import LodingPage from '../../combonants/loading/Loding-Page';
import PageNotFound from '../page-not-found/Page_Not_Found';
import HeaderHome from '../HomePage/combonants/HeaderHome/HeaderHome';
import { NotificationSectioncombonants,informationEnum } from '../../combonants/NotificationSection/NotificationSection';


function MyFavorateItem() {

  const [DeleteItem,setDeleteItem]=useState(false)

  const DataUse=async()=>{
    return await axios.get(`${process.env.REACT_APP_API}GetAllFavorate`)
  }
  const {data,error,isLoading,refetch}=useQuery(["getMyFavorate"],DataUse);

  if(isLoading){
    return (<LodingPage/>)
   }
   if(error){
    return <PageNotFound/>
   }




  const columns:any = [
    { field: 'Country', headerName: 'Country ', width:160 ,   headerAlign: 'center',align:"center"     },
    { field: 'Date', headerName: 'Date', width:160 ,    headerAlign: 'center',align:"center"    },
    { field: 'TotalConfirmed', headerName: "TotalConfirmed" , width:160,  headerAlign: 'center',align:"center" },
    { field: 'TotalDeaths', headerName: "TotalDeaths" , width:160,  headerAlign: 'center',align:"center" },
    { field: 'TotalRecovered', headerName: "TotalRecovered" , width:160,  headerAlign: 'center',align:"center" },
    { field: 'AddFavorate', headerName: 'Add Favorate ', width:200, headerAlign: 'center', align:"center", 
    renderCell:(params:any)=>{
      return(
          <button onClick={GetData} datatype={params.row.id} className="removeButtonSection">
            Delete Item
          </button>)}},
];

  //To get All Data I Have
  const rows =data?data.data:[]


  const GetData=(event:any)=>{
    event.preventDefault();
    let datause=event.currentTarget.getAttribute("datatype")
    axios.delete(`${process.env.REACT_APP_API}RemoveItem/${datause}`).then((data)=>{
      refetch()

      setDeleteItem(true)
      setTimeout(()=>{
        setDeleteItem(false)
      },1500)
    })
  }



  return (
    <>
    {rows.length>0?
      <div style={{marginTop:"90px"}}>
        <HeaderHome datause="All my records are saved"/>
        {DeleteItem?<NotificationSectioncombonants information={informationEnum.delete} />:<></>}
        <motion.div className='containerAllCoutriesTaable'  >
            <DataGrid rows={rows}  columns={columns}  
              sx={{ fontWeight: 'bold'}}   />
        </motion.div>
      </div>
      :<NotificationSectioncombonants information={informationEnum.empty} />  
    }
    </>
)
}

export default MyFavorateItem
