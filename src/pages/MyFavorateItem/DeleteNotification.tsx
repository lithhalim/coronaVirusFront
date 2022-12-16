import React from 'react'
import Lottie from "lottie-react";
import DeleteItem from  "./datause/15120-delete.json";
import {motion} from "framer-motion"

function DeleteNotification() {
  return (
    <motion.div initial={{y:"-100vh"}} animate={{y:"0"}}  >
        <div style={{position:"absolute",left:"50%",top:"50%",transform:'translateX(-50%)',zIndex:10000000000000000000}}>
            <Lottie animationData={DeleteItem} loop={true} style={{maxHeight:"100%",maxWidth:"100%"}}  />
        </div>
    </motion.div>
)
}

export default DeleteNotification
