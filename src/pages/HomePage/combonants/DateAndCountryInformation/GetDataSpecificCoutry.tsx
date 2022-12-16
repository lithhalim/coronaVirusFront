import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React,{useState} from 'react'
import LodingPage from '../../../../combonants/loading/Loding-Page'
import PageNotFound from '../../../page-not-found/Page_Not_Found'
import { ChartSpecificCountry } from './ChartSpecificCountry/ChartSpecificCountry'
import DataSpecificCountry from './DataSpecificCountry/DataSpecificCountry'
import TableSpecificCountry from './TableSpecificCountry/TableSpecificCountry'

function GetDataSpecificCoutry() {
  const [CountryAndDate,setCountryAndDate]=useState(
    {country: 'Algeria', StartDate: '2020-02-28', EndDate: '2020-03-28'})

  const getDataCountry=async()=>{
    const {country,StartDate,EndDate}=CountryAndDate;
    return await axios.get(`${process.env.REACT_APP_COVID}/country/${country}/status/confirmed?from=${StartDate}&to=${EndDate}`)
   }
   const {data,error,isLoading} =useQuery(["GetDataCountry",CountryAndDate],getDataCountry);

   if(isLoading){
    return (<LodingPage/>)
   }
   if(error){
    return <PageNotFound/>
   }


    const CountryDate=(data:any)=>{
      setCountryAndDate(data)
    }

  return (
    <div>
        <DataSpecificCountry CountryDate={CountryDate}/>
        {data?
              <>
                  <ChartSpecificCountry data={data.data} countrySelect={CountryAndDate.country}/>
                  <TableSpecificCountry data={data.data}/>
              </>
        :<></>}
    </div>
  )
}

export default GetDataSpecificCoutry