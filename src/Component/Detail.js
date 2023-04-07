import React from 'react'
import yoga from './Image/body-part.png'
import equipment from './Image/equipment.png'
import target from './Image/target.png'
// import yoga from './Image/body-part.png'


const Detail = (props) => {
  let{equipments,targets, bodyPart, name, gifUrl} = props;
  return (
    <div id='detailer-div' className="containerr my-5">
        <div className="content gifurl">
            <img src={gifUrl} alt="" />
        </div>
        <div className="content">
            <h2 className='iteam' style={{textTransform : "capitalize"}}>{name}</h2>
            <p className='iteam'>Exercises keep you strong.<span style={{textTransform : "capitalize"}}>{name}</span> is one of the best exercise to target your <span style={{textTransform : "capitalize"}}>{props.target}</span>.It will help you improve modd and gain energy</p>
            <div className="flex">
            <img className='iteam' src={yoga} alt="" height={"60px"}/>
            <p style={{textTransform : "capitalize"}}>{bodyPart}</p>
            </div>
            <div className="flex">
            <img className='iteam' src={equipment} alt="" height={"60px"}/>
            <p style={{textTransform : "capitalize"}}>{equipments}</p>
            </div>
            <div className="flex">
            <img className='iteam' src={target} alt="" height={"60px"}/>
            <p style={{textTransform : "capitalize"}}>{targets}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail