import React from 'react'
import Lottie from "lottie-react";
import EmptyFile from  "./datause/112087-empty.json"

function EmptyFavorate() {
  return (
    <div style={{width:"60vw" ,height:"60vh" ,marginLeft:"auto",marginRight:"auto",marginBottom:"50px"}}>
        <div>
            <Lottie animationData={EmptyFile} loop={true} style={{maxHeight:"100%",maxWidth:"100%"}}  />
        </div>
        <h2 style={{maxWidth:"450px",textAlign:"center",marginLeft:"auto",marginRight:"auto",}}>You do not have any records added to the storage, please add any records </h2>
    </div>
)
}

export default EmptyFavorate
