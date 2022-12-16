import React from 'react';

function TotalValueInformation({datause}:any) {
    const {TotalConfirmed,TotalDeaths,TotalRecovered} =datause;
  return (
        <ul className='informationlist'>
            <li>
                <h3>Total Confirmed</h3> 
                <p>{TotalConfirmed}</p>
            </li>
            <li>
                <h3>Total Deaths</h3> 
                <p>{TotalDeaths}</p>
            </li>
            <li>
                <h3>Total Recovered</h3> 
                <p>{TotalRecovered}</p>
            </li>
        </ul>
)
}

export default TotalValueInformation