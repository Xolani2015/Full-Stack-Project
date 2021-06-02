
import './App.css';

import {useState, useEffect} from "react";


function App() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
        fetch('http://127.0.0.1:5000/get', {
          'method' : 'GET',
          headers: {
            'Content-Type':'application/json'
          }
        })
        .then(resp=> resp.json())
        .then(resp => setTweets(resp))
        .catch(error => console.log(error))

  }, [])


  return (
    <div className="App">
         <h1>Hamba Twitter Sentiments</h1>
         {tweets.map(tweet => {
             return(
               <div key = {tweet.id}>
             
                 <h2>{tweet.tweetuser}</h2>
                 <p>{tweet.tweettext}</p>
                 <p>{tweet.tweetdate}</p>
                 <p>{tweet.tweetsentiment}</p>
                 </div>
             )
         })}
    </div>
  );
}

export default App;
