import React from 'react'

export default function ColorBox(props) {
  return (
    <div className='colorBox'>
        <div className="color" style={{backgroundColor: props.cod, width: "20vw", height: "25vh"}}></div>
        <p className='colorCod'>{props.cod}</p>
        <p style={{color:props.cod ,     margin: "-5px 0px 14px 10px"}}>{props.name}</p>
    </div>
  )
}
