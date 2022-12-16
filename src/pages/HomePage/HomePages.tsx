import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import GetDataSpecificCoutry from './combonants/DateAndCountryInformation/GetDataSpecificCoutry';
import TotalSection from './combonants/TotalSection/TotalSection';

function HomePages() {


  return (
    <div style={{zIndex:1}}>
        <TotalSection/> 
        <GetDataSpecificCoutry/>       
    </div>
  )
}

export default HomePages