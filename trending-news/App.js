import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './App.css';
import axios from 'axios';	
import { Link } from 'react-router-dom';

//import Test from "./Test"
function App() {
  //let val = null;
  //let i=0;
  //const url = 'https://free-news.p.rapidapi.com/v1/search?q=Elon Musk'
  const [informations,setInformation] = useState([]);
  //function HomeButton() {
    //let history = useHistory();
  //}
  /*function HomeButton() {
    let history = useHistory();

    function handleClick() {
      window.history.push("https://www.cnet.com/news/elon-musk-says-tesla-bot-will-be-ready-in-a-year-can-we-believe-him/");
    }*/
  useEffect(() => {
      /*const x = "http://www.anapioficeandfire.com/api/books";
      const response =  fetch(x);
      const data =  response.json();
      console.log(data.results);*/
      /*axios.get(url)
            .then(response => {
              setInformation(response.data.articles)
            })
      
    }, [url]);*/
    const options = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {q: 'Elon Musk', lang: 'en'},
      headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
        'x-rapidapi-key': '7613e4e8eamsh18dd1ad536d3691p1bda52jsncb8966312b70'
      }
    };
    
    async function fetchData()
    {     await axios.request(options).then(function (response) {
          console.log(response.data.articles);
           const val = response;
         // console.log(val.length);
          
          setInformation(val.data.articles[Math.floor(Math.random() * val.data.articles.length - 1)]);
            console.log("Hi");
          
          
        }).catch(function (error) {
          console.error(error);
        });
     // return val;  
    }
    fetchData();
  }, []);  
  console.log(informations);
  return (
    <div className="App" >
        
        
        <div className="Base">  
            <h1>{informations?.title}</h1>
            <div>{informations?.author}</div> <br></br>
            <div>{informations?.summary}</div><br></br>
            <div>{informations?.link}</div><br></br>
            <div>{informations?.country}</div><br></br>    
            
                  
        </div>           
       </div>
  );
  
}

export default App;






/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const [ video, setVideo ] = useState(null); // 'video', not 'videos'
const { videoID } = useParams();

useEffect(() => {
  fetch("/src/data/data.json")
    .then((res) => res.json())
    .then((videos) => videos.filter((video) => {
      return video.id === videoID;
    }))
    .then((matched) => setVideo(matched[0]));
}, []);



const response =  await fetch("https://free-news.p.rapidapi.com/v1/search?q=Elon Musk",{
              "method": "GET",
              "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "7613e4e8eamsh18dd1ad536d3691p1bda52jsncb8966312b70"
              }
            });
            const data =  response.json();
            console.log(data);
            setInfo(data);*/