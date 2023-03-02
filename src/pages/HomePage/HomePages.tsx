import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import GetDataSpecificCoutry from './combonants/DateAndCountryInformation/GetDataSpecificCoutry';
import TotalSection from './combonants/TotalSection/TotalSection';

function HomePages() {
    const downloadFile = async (_) => {
        fetch('https://pricingtemplates.s3.amazonaws.com/List+of+members.xlsx', { 
            method: 'GET',
            headers: {
              'Content-Type': 'application/vnd.ms-excel', 
            }
          })
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'List.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
          });
      };


  return (
    <div style={{zIndex:1}}>
        <TotalSection/> 
        <GetDataSpecificCoutry/>   
        <div  className={"add"} onClick={downloadFile}>
        <span><BsCloudDownloadFill/></span>
          "PricingPage.download List Member"
        </div>

    </div>
  )
}

export default HomePages
