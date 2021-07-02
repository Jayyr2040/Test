import "./App.css";
import React from "react";
import Moment from "react-moment";

let isFirstLoad = true;
function App() {
  const [highlights, setHighlights] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const urlRegex = /(https?:\/\/[^ ]*)/;
  const url2 = "https://www.scorebat.com/video-api/v1/";

  if (isFirstLoad === true) {
    console.log("First Load - ",isFirstLoad);
    isFirstLoad = false;

    const makeAPICall1 = async () => {
      const response = await fetch(url2);
      if (!response.ok) {
        console.log("server bad response");
      }
      const data = await response.json();
      console.log("url2 - data", data);
      setHighlights(data);
    };
    makeAPICall1().catch(() => {
      console.log("There has been a problem with your fetch operation: ");
    });
  }
  const handleNext = () => {
    setCounter((prevCount) =>
      prevCount === highlights.length ? prevCount : prevCount + 1
    );
  };

  const handlePrev = () => {
    setCounter((prevCount) => (prevCount === 0 ? prevCount : prevCount - 1));
  };

  // const url1 = "https://gnews.io/api/v4/search?q="+"manchester"+" united"+ "&token=c276e35eade36eea9a97d3bb9c8eda9f&lang=en";
  // const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=bbfefcdb33b0c247e627cbc6cf6552a4&lang=en&max=2&in=title";
  //const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=c276e35eade36eea9a97d3bb9c8eda9f&lang=en&max=2&in=title";
  //const url3 = "https://gnews.io/api/v4/top-headlines?q=manchester+united&token=c276e35eade36eea9a97d3bb9c8eda9f&lang=en&max=2&in=title";
  //const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=46e1686127a8bab7d64f6af9e0b4a124&lang=en&max=2&in=title";
  //const url3 = "https://gnews.io/api/v4/top-headlines?q=manchester+united&token=46e1686127a8bab7d64f6af9e0b4a124&lang=en&max=2&in=title";
  //const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=5d5b4948702509a255d53a556bec5ba4&lang=en&max=2&in=title";
  //const url3 = "https://gnews.io/api/v4/top-headlines?q=manchester+united&token=5d5b4948702509a255d53a556bec5ba4&lang=en&max=2&in=title";
  // const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=f4681ae20797642e3221559d81c7b2aa&lang=en&max=2&in=title";
  // const url3 = "https://gnews.io/api/v4/top-headlines?q=manchester+united&token=f4681ae20797642e3221559d81c7b2aa&lang=en&max=2&in=title";
  //const url1 = "https://gnews.io/api/v4/search?q=manchester+united&token=3cdf1b72b7469b7836cc6c60746e5a40&lang=en&max=1&in=title";
  //const url3 = "https://gnews.io/api/v4/top-headlines?q=manchester+united&token=3cdf1b72b7469b7836cc6c60746e5a40&lang=en&max=1&in=title";
  // const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,images&language=en`;
  
  return (
    <div className="App">
      <h1>Headline news</h1>
      {/* {jokeArr?.articles?.[0]?.title}
          <br></br>
            <Moment fromNow >{jokeArr?.articles?.[0]?.publishedAt}</Moment>
            {jokeArr?.articles?.[0]?.source.name}
            {jokeArr?.articles?.[0]?.url}
            <img src={jokeArr?.articles?.[0]?.image} alt=""/>

            <h1>Top Headline news</h1>
            {jokeArr3?.articles?.[0]?.title}
            <br></br>
              <Moment fromNow >{jokeArr3?.articles?.[0]?.publishedAt}</Moment>
              {jokeArr3?.articles?.[0]?.source.name}
              {jokeArr3?.articles?.[0]?.url}
            <img src={jokeArr3?.articles?.[0]?.image} alt=""/> */}
      <div>
        <h1>Football highlights</h1>
      </div>
      <div>
        <Moment fromNow>{ highlights?.length > 0 ? highlights?.[counter]?.date : (isFirstLoad = true)}</Moment>
        <p>{highlights?.[counter]?.competition?.name}</p>
        <p>{highlights?.[counter]?.title}</p>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <div>
          <iframe
            src={highlights?.[counter]?.embed?.match(urlRegex)[1]}
            frameBorder="0"
            width="560"
            height="650"
            alt=""
            allow="autoplay; fullscreen"
            title="This is a unique title"
          ></iframe>
        </div>
      </div>
      {/*    <div style={{ width: "100px", height: "100px" }}>
        <Moment fromNow>{highlights?.[counter]?.date}</Moment>
        <p>{highlights?.[counter]?.competition.name}</p>
        <p>{highlights?.[counter]?.title}</p>
        <img src={highlights?.[counter]?.thumbnail} alt="" />
      </div> */}
    </div>
  );
}

export default App;
