import React from 'react';
import "./style.css";

function ButtonOne(props) {
  return (
    <div className='Button1'>
        <div className='Btn1'><span>{props.value}</span></div>
    </div>
  )
}

export default ButtonOne