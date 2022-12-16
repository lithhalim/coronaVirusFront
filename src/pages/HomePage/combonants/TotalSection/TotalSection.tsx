import {  useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { TotalChart } from './combonants/TotalValueChart';
import TotalValueInformation from './combonants/TotalValueInformation';
import "./style/style.scss";
import corona from "./assest/corona.png";
import {motion} from "framer-motion"
import HeaderHome from '../HeaderHome/HeaderHome';
import LodingPage from '../../../../combonants/loading/Loding-Page';
import PageNotFound from '../../../page-not-found/Page_Not_Found';

function TotalSection() {

    const getData=async()=>{
       return await axios.get(`${process.env.REACT_APP_COVID}/world/total`)
    }
    const { isLoading, error, data } = useQuery(['repoData'], getData);

    if(isLoading){
        return (<LodingPage/>)
    }

    if(error){
        return(<PageNotFound/>)
    }
    

 return (
    <div style={{marginTop:"90px"}}>
        <HeaderHome datause="Statistics for all countries"/>
        <div className='containerTotalSection' >
            <div className='information-container'>
                {data?<TotalChart datause={data.data}/>:<></>}
                {data?<TotalValueInformation datause={data.data}/>:<></>}
            </div>
            <motion.img src={corona} alt="corona"  className='imageCorona' animate={{y:"0"}} initial={{y:"-100vh"}} transition={{duration:1.5}}/>
        </div>
    </div>

  )
}

export default TotalSection