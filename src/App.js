import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Moment from 'react-moment';


function App() {

  const [jokes,setJokes] = useState("");
  const [jokeArr,setjokeArr] = useState([]);
  const [statusC, setStatusC] = React.useState(false);
  const [status, setStatus] = React.useState("idle");
 const [counter, setCounter] = React.useState(0);

 const [jokes2,setJokes2] = useState("");
 const [jokeArr2,setjokeArr2] = useState([]);
 const [statusC2, setStatusC2] = React.useState(false);
 const [status2, setStatus2] = React.useState("idle");
const [counter2, setCounter2] = React.useState(0);

const [jokes3,setJokes3] = useState("");
 const [jokeArr3,setjokeArr3] = useState([]);
 const [statusC3, setStatusC3] = React.useState(false);
 const [status3, setStatus3] = React.useState("idle");
const [counter3, setCounter3] = React.useState(0);


const [jokes4,setJokes4] = useState("");
 const [jokeArr4,setjokeArr4] = useState([]);
 const [statusC4, setStatusC4] = React.useState(false);
 const [status4, setStatus4] = React.useState("idle");
const [counter4, setCounter4] = React.useState(0);

const urlRegex = /(https?:\/\/[^ ]*)/;

/* var input = "https://medium.com/aspen-ideas/there-s-no-blueprint-26f6a2fbb99c random stuff sd";
var url = input.match(urlRegex)[1];
console.log(url); */

/* var input3 = "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https://www.scorebat.com/embed/g/960861/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe></div>";
var url3 = input3.match(urlRegex)[1];
console.log(url3);
 */
  //const url = "https://icanhazdadjoke.com/";
 // const url = "https://www.scorebat.com/video-api/v1/";
 //const options = { method: 'GET',headers: { Accept : 'application/json'} };

   //const url = "https://icanhazdadjoke.com/";
  // url = "https://www.scorebat.com/video-api/v1/";
 //const options = { method: 'GET',headers: { Accept : 'application/json'} };
// const url = "https://api.football-data.org/v2/teams";
 //https://api.football-data.org/v2/competitions?apikey=30647722a43d47c7a3e086ca50e697c3
 // https://api.football-data.org/v2/competitions?apikey=ea579f9cdbb249b99bdeeda5c923b51b
// const options = { method: 'GET',headers: { 'X-Auth-Token': '30647722a43d47c7a3e086ca50e697c3','Accept-Encoding': ''}};

// const url1 = "https://gnews.io/api/v4/search?q="+"manchester"+" united"+ "&token=c276e35eade36eea9a97d3bb9c8eda9f&lang=en";
const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=bbfefcdb33b0c247e627cbc6cf6552a4&lang=en&max=2&in=title";
const url3 = "https://gnews.io/api/v4/top-headlines?q=manchester+united&token=c276e35eade36eea9a97d3bb9c8eda9f&lang=en&max=2&in=title";
const url2 = "https://www.scorebat.com/video-api/v1/";
// const url4 =  'https://football-prediction-api.p.rapidapi.com/api/v2/list-markets';
//const url4 =  'https://api-football-v1.p.rapidapi.com/v3/teams/seasons';
//const options4 = { method: 'GET',headers: {  'x-rapidapi-key': '2bd4a97095mshf0fe1797ec6160dp18ffa5jsn31e5c0ca9871',
//'x-rapidapi-host': 'v3.football.api-sports.io'}};







  const handleStatus = () => {
    setStatusC(status => status === false? true:false);
  };

  const addNewjokes = () => {
  console.log("jokes in AddNewjokes() - Status",jokes);
  console.log("jokeArr in AddNewjokes() - Status",jokeArr);

            if (jokes !== "")
            {
              if (jokeArr.length >= 10 ) {
                jokeArr.shift();
                setjokeArr([...jokeArr,(jokes)]);
              }
              else 
              {
                  setjokeArr([...jokeArr,(jokes)]);
              } 
            }
     };

const nextNumber = () => {
    setCounter(counter => (counter < (jokeArr.length-1) ? counter + 1 : counter));
  }

  const prevNumber = () => {
    setCounter(counter => (counter === 0 ? counter : counter - 1));
  }

React.useEffect(() => { 
        setStatus("pending");
        const makeAPICall = async () => {
        const response = await fetch(url1);
        if(!response.ok){   
          console.log("server bad response"); 
          throw new Error("server bad response");
        }
        const data = await response.json(); 
        console.log("url1 - data",data);
        setStatus("resolved");
        setJokes(data);
        setjokeArr(data);
        console.log("jokes in useEffect - Status",jokes);
        console.log("jokeArr in useEffect - Status",jokeArr);
        
        };      
          makeAPICall().catch(() => {
          setStatus("rejected");
          //console.log('There has been a problem with your fetch operation: ' + e.message);
        });
        addNewjokes();
      }
      ,[]);


      React.useEffect(() => { 
        setStatus("pending");
        const makeAPICall = async () => {
        const response = await fetch(url2);
        if(!response.ok){   
          console.log("server bad response"); 
          throw new Error("server bad response");
        }
        const data = await response.json(); 
        console.log("url2 - data",data);
        setStatus2("resolved");
        setJokes2(data);
        setjokeArr2(data);
        console.log("jokes in useEffect - Status",jokes);
        console.log("jokeArr in useEffect - Status",jokeArr);
        
        };      
          makeAPICall().catch(() => {
          setStatus2("rejected");
          //console.log('There has been a problem with your fetch operation: ' + e.message);
        });
        addNewjokes();
      }
      ,[]);

      React.useEffect(() => { 
        setStatus("pending");
        const makeAPICall = async () => {
        const response = await fetch(url3);
        if(!response.ok){   
          console.log("server bad response"); 
          throw new Error("server bad response");
        }
        const data = await response.json(); 
        console.log("url3 - data",data);
        setStatus3("resolved");
        setJokes3(data);
        setjokeArr3(data);
        console.log("jokes in useEffect - Status",jokes);
        console.log("jokeArr in useEffect - Status",jokeArr);
        
        };      
          makeAPICall().catch(() => {
          setStatus3("rejected");
          //console.log('There has been a problem with your fetch operation: ' + e.message);
        });
        addNewjokes();
      }
      ,[]);

      




const Title = () => {
  if(status === "idle"){

  return "Jokes apeear here"
  }
  if(status === "rejected") {
      return "Oh no! Some problem with you access"
  }
  if(status === "pending") {
      return "Loading....."
  }
  if(status === "resolved") {
        return <h2>{jokes?.joke}</h2>
  }

}

  return (
    <div className="App">
      <h1>Headline news</h1>
      {jokeArr?.articles?.[0]?.title}
      <br></br>
      <Moment fromNow >{jokeArr?.articles?.[0]?.publishedAt}</Moment>
      {jokeArr?.articles?.[0]?.source.name}
      {jokeArr?.articles?.[0]?.url}
     <img src={jokeArr?.articles?.[0]?.image}/>

     <h1>Top Headline news</h1>
      {jokeArr3?.articles?.[0]?.title}
      <br></br>
      <Moment fromNow >{jokeArr3?.articles?.[0]?.publishedAt}</Moment>
      {jokeArr3?.articles?.[0]?.source.name}
      {jokeArr3?.articles?.[0]?.url}
     <img src={jokeArr3?.articles?.[0]?.image}/>

   
   {/* {(jokeArr2?.[73]?.embed)} */}
  

    {/* { ReactHtmlParser(jokeArr2?.[73]?.embed) } maybe use this in the player.js one single player*/}
    
    <h1>Football highlights</h1>
 <div>
    {/* <iframe src='https://www.scorebat.com/embed/g/1045575/?utm_source=api&utm_medium=match&utm_campaign=dflt' frameborder='0' width='560' height='650' ></iframe> */}
    
    <iframe src={jokeArr2?.[29]?.embed?.match(urlRegex)[1]} frameborder='0' width='560' height='650' alt="" allowfullscreen allow='autoplay; fullscreen' ></iframe>
   
    </div>

    {/* <div>
    <iframe src={jokeArr2?.[70]?.embed?.match(urlRegex)[1]} frameborder='0' width='560' height='650' alt="" allowfullscreen allow='autoplay; fullscreen' ></iframe>
    </div> */}
    <div style={{width: "100px", height:"100px", }} className="App">
    <Moment fromNow >{jokeArr2?.[29]?.date}</Moment>
    <p>{jokeArr2?.[29]?.competition.name}</p>
    <p>{jokeArr2?.[29]?.title}</p><img src={jokeArr2?.[29]?.thumbnail}/>
  
    </div>
    </div>
  );
}

export default App;
