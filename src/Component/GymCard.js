import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from './Card'

const GymCard = (props) => {
  const [articles, setarticles] = useState([])
  const {query} = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const options1 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  let bodypart = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
  let type;
  if (bodypart.includes(query)) {
    type = "bodyPart";
  } else{
    type = "target";
  }
  
  const updateExer = async(type)=>{
    try {
        const url = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${type}/${query}`, options1);
        let data = await url.json();
        setarticles(data);
    } catch(error) {
        if (error.response && error.response.status === 400) {
            console.log("Bad request. Please check your parameters.");
        } else if (error.response && error.response.status === 404) {
            console.log("Exercise not found.");
        } else if (error.name === "TypeError") {
            console.log("Type error occurred.");
        } else {
            console.error(error);
        }
    }
}
useEffect(() => {
  console.log(type)
  updateExer(type);  
}, [query, type])

  return (
    <>
    <div>
      <div className="container d-flex justify-content-around" style={{rowGap : "50px", columnGap : "50px"}}>
        <div className='d-flex' style={{flexWrap : "wrap"}}>
          
          {articles.map((element)=>{
            return (
          
              <div className="col my-5 d-flex justify-content-around" key={element.id}>
                 <Link to={`/Exercise/${element.id}`} style = {{textDecoration : "none", color : "black"}}>
                <Card
                gifurl = {element.gifUrl}
                exer_name = {element.name}
                bodyPart = {element.bodyPart}
                target = {element.target}
                />
                </Link>
              </div>
         
            );
          })};
          </div>
        </div>
      </div>
  </>
  );
}

export default GymCard

