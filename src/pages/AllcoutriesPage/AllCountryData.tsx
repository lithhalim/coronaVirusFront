import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import LodingPage from '../../combonants/loading/Loding-Page';
import HeaderHome from '../HomePage/combonants/HeaderHome/HeaderHome';
import PageNotFound from '../page-not-found/Page_Not_Found';
import TableAllCountry from './AllCountriesTable';

function ChartAllCountry() {
    const getDataCountry=async()=>{
        return await axios.get(`${process.env.REACT_APP_COVID}/summary`)
       }
       const {data,error,isLoading} =useQuery(["getAllCoutriessData"],getDataCountry);
    
       if(isLoading){
        return (<LodingPage/>)
       }
       if(error){
        return <PageNotFound/>
       }
        
  return (
    <div style={{marginTop:"90px"}}>
        <HeaderHome datause="Statistics for all cities with the number of injuries"/>
        {(data!==undefined&&data.data.Countries!==undefined)?
        <TableAllCountry data={data.data.Countries}/>:<></>}
    </div>
  );
}

export default ChartAllCountry;
