import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Get Specific Country Data',
    },
  },
};


export function ChartSpecificCountry({data,countrySelect}:any) {


  const labels =data.map((data:any,i:number)=>(data=(data.Date).slice(0,7)))

  const datachart = {
    labels,
    datasets: [
      {
        fill: true,
        label: countrySelect,
        data:data.map((data:any,i:number)=>(data=data.Cases)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return(
    <div style={{width:"80vw",marginLeft:"auto",marginRight:"auto"}}>
       <Line options={options} data={datachart} />
    </div>
  )
}
