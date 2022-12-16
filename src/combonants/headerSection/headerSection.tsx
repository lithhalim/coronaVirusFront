import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import "./style/style.scss";

import logo from "./Assest/LogoSection.png";


let DataUse=[{name:"Home",path:"/"},{name:"All Counties",path:"/allcountries"},{name:"My Records",path:"/myRecords"}]
function HeaderSection() {
    const [ActiveButton,setAcctiveButton]=useState
    (window.localStorage.ActiveButton?window.localStorage.ActiveButton:0)


    const Navigation=useNavigate();
    const gotopage=(event:any)=>{
        const [path,key]=event.currentTarget.getAttribute("datatype").split("###")
        setAcctiveButton(Number(key))
        window.localStorage.ActiveButton=Number(key)
        Navigation(path)
    }
  return (
    <div className='header-container'>
        <div className='selectButtonSection'>
            {DataUse.map(({name,path},i)=>(
                <div onClick={gotopage} datatype={`${path}###${i}`} key={i} 
                  className={`elementSelectSection ${ActiveButton==i?"active":""}`}>
                    {name}
                </div>
            ))}
        </div>
        <img src={logo} alt="logo"  className='logoImage'/>
        <div>
        </div>
    </div>
  )
}

export default HeaderSection