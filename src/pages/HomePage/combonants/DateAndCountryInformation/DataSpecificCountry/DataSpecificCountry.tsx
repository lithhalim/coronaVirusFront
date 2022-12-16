import React ,{useState}from 'react';
import HeaderHome from '../../HeaderHome/HeaderHome';
import Select_Currency from './SelectCountry/SelectCountry';
import SelectTime from './SelectTime/SelectTime';
import "./style/style.scss"



function DataSpecificCountry({CountryDate}:any) {

  const GetAllData=(event:any)=>{
    event.preventDefault();
    let select=event.currentTarget;
    let DataUse={
      country:select.country.value.split("###")[0],
      StartDate:select.startTime.value,
      EndDate:select.endTime.value
    }
    CountryDate(DataUse)
  }
  
  return (
    <>
      <HeaderHome datause="Statistics for each country separately"/>
      <form className='containerSelectCountryDate' onSubmit={GetAllData}>
          <Select_Currency/>
          <SelectTime/>
          <button >Submit</button>
      </form>
    </>
  )
}

export default DataSpecificCountry