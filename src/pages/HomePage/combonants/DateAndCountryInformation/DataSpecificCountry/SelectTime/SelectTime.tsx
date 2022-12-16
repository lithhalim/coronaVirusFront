import React, { useState } from 'react';
import "./style/style.scss";

function SelectTime() {
    const [StartDate,setStartDate]=useState('2020-02-28');
    const [EndDate,setEndDate]=useState('2020-03-28');


const getStartDate=(event:any)=>{
        if(event.currentTarget.value==""){
            setStartDate('2020-02-28')
        }else{
            setStartDate(event.currentTarget.value)
        }
    }

const getEndDate=(event:any)=>{
        if(event.currentTarget.value==""){
            setEndDate('2020-03-28')
        }else{
            setEndDate(event.currentTarget.value)
        }
    }

    
  return (
        <ul className='containerdate'>
            <li>
                <p>Start Time</p>
                <input type="date" id="dob" value={StartDate} onChange={getStartDate} 
                    name="startTime" pattern="\d{4}-\d{2}-\d{2}" min="2020-02-28" max="2023-04-20"/>
            </li>
            <li>
                <p>End Time</p>
                <input type="date" id="dob" value={EndDate} onChange={getEndDate} 
                    name="endTime" pattern="\d{4}-\d{2}-\d{2}" min={StartDate} max="2023-04-20" />
            </li>
        </ul>
  )
}

export default SelectTime