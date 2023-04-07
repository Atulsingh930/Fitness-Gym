import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Detail from './Detail';
import YTdown from './YTdown'


const DetailCard = () => {
  const [video, setvideo] = useState([])
  const [articles, setarticles] = useState([])
  const {id} = useParams();
  const apikey = process.env.REACT_APP_API_KEY
  const YTdown_Key = process.env.YTdown_APP_API_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apikey,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  const options2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '465a980c7amshf6051b1d20bba2bp1e0a76jsn82feb362370d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
 const update = async()=>{
    const url = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, options)
    let data = await url.json();
    setarticles(data)

}
const updateYT = async()=>{
      if(articles.target!==undefined){
        let string = articles.target;
      if(string.length>0){
        let arr = string.split(" ");
        let ans;
        if(arr.length>1){
          ans = arr.join("%20")
        }
        else{
          ans = arr[0];
        }
        const url = await fetch(`https://youtube138.p.rapidapi.com/search/?q=${ans}%20gym%20exercsie&hl=en&gl=US`, options2)
        let data = await url.json();
        setvideo(data)
      }
    }
  }
useEffect(() => {
  update();
}, [id])

useEffect(() => {
  updateYT();
}, [articles.target])
  return (
    <>
    {/* <img src={articles.gifUrl} alt="" /> */}
    <Detail gifUrl = {articles.gifUrl} name = {articles.name} targets = {articles.target} bodyPart = {articles.bodyPart} equipments = {articles.equipment}/>
    <YTdown exerciseVideo = {video.contents} name = {articles.name}/>
    </>
  )
}

export default DetailCard