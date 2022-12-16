import React, {  useEffect, useState } from 'react';
import CountryData from './DataUse';
import "./style/style.scss"
import ImageFirst from "./assest/Algeria.png"
 



function Select_Currency() {
    const [ImageCurrency,setImageCurrency]=useState({name:"Algeria",image:ImageFirst});

    
    useEffect(()=>{
      document.querySelector(".currency-check")?.addEventListener("change",selectCurrency)
    },[])

    const selectCurrency=(event:any)=>{
       let datause= event.currentTarget.value.split("###")
       const[name,image]=datause;

       //Set The Image Section 
       setImageCurrency({image:image,name:name});
    }


  return (
    <div className='containerSelectCountry'>
      <p>Select Country</p>
        <div className='container-currency-section-have'>
              {ImageCurrency!==undefined?<img src={ImageCurrency.image} alt="" />:<></>}
              <select name="country"  className="currency-check" >
                  {CountryData.map(({name,image},i)=>(
                          <option value={`${name}###${image}`} key={i} > {name}</option>
                      ))}
              </select>
        </div>
    </div>
  )
}

export default Select_Currency