import React from 'react'
const captalized = (str)=>{
    let string = str.split(" ");
    for (let i = 0; i<string.length; i++){
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }return string.join(" ");
  }

const Card = (props) => {

let{target, bodyPart, exer_name, gifurl, id} = props;
  return (
        
          <div className="card cards" style={{width : "24rem"}} key = {id}>
            <img src={gifurl} className="card-img-top" alt="..." style={{height : "20rem"}}/>
            <div className="card-body">
                <div className="part1 my-4">
                <button type="button" className="btn btn1">{captalized(bodyPart)}</button>
                <button type="button" className="btn btn2">{captalized(target)}</button>
                </div>
                <h5 className="card-title part2">{captalized(exer_name)}</h5>
            </div>
          </div>
  )
}

export default Card