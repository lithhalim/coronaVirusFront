import React from 'react';
import "./style/style.scss"

function HeaderHome({datause}:any) {
  return (
    <div className='headerHomeContainer'>
        {datause}
    </div>
  )
}

export default HeaderHome