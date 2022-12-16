import React from 'react';
import {motion} from "framer-motion";
import Lottie from "lottie-react";
import DeleteItem from "./datause/15120-delete.json";
import EmptyItem from "./datause/112087-empty.json";
import Warning from "./datause/97136-warning.json";
import doneItem from "./datause/676-done.json";

import "./style/style.scss"



export enum informationEnum{
    delete,
    empty,
    warning,
    Added
}

 interface Informationenum{
    information:informationEnum
}


  function NotificationSectioncombonants({information}:Informationenum) {


    let dataUsing;
    switch (information) {
        case informationEnum.delete:dataUsing={
            Textvalue:"The item has been deleted",
            icons:DeleteItem
        }
            
            break;
        case informationEnum.empty:dataUsing={
            Textvalue:"There are no existing items, please add an item",
            icons:EmptyItem
        }

            
            break;
        case informationEnum.warning:dataUsing={
            Textvalue:"This item has already been added",
            icons:Warning
        }
            
            break;
        case informationEnum.Added:dataUsing={
            Textvalue:"The item was added successfully",
            icons:doneItem
        }   
            break;
    
    }

  return (
    <div className='containerNotificationSection'>
        <motion.div initial={{y:"-100vh"}} animate={{y:"0"}}  >
            <div className='containerAnimation'>
                <Lottie animationData={dataUsing?.icons} loop={true}  />
            </div>
            <h2>{dataUsing?.Textvalue}</h2>
        </motion.div>
    </div>
  )
}

export {
    NotificationSectioncombonants 
}