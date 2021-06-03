
import './App.css';

import {useState, useEffect} from "react";
import Tweetlist from './components/Tweetlist';
import Form from './components/Form';


function App() {

  const [tweets, setTweets] = useState([])
  const [updatedTweet, setUpdatedTweet] = useState(null)

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

const updateTweet = (tweet) => {
 
  setUpdatedTweet(tweet)
}



  return (
    <div className="App">
         <h1>Hamba Twitter Sentiments</h1>
         <hr/>
         <hr/>
           <Tweetlist tweets = {tweets} updateTweet = {updateTweet}/>
           {updatedTweet ? <Form tweet = {updatedTweet}/> : null}
           
    </div>
  );
}
export default App;
