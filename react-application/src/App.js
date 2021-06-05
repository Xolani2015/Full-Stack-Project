
import './App.css';

import {useState, useEffect} from "react";
import Tweetlist from './components/Tweetlist';
import Form from './components/Form';
import AddForm from './components/AddForm';
import APIService from './components/APIService';


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



const updatedData = (tweet) => {
  const new_tweet = tweets.map(my_tweet => {
    if(my_tweet.id === tweet.id) {
      return tweet
    } else {
      return my_tweet
    }
  })
  setTweets(new_tweet)
}



const openForm = () => {
  setUpdatedTweet({tweetsentiment: ''})
}

const addedTweet = (tweet) => {
  const new_tweets = [...tweets, tweet]
  setTweets(new_tweets)
}




  return (
    <div className="App">
       <div className = "row">
         <div className = "col">
         <h1>Hamba Twitter Sentiments</h1>
         <hr/>
         <div className="col">
           <button
             className = "btn btn-success"
             onClick= {openForm}
             >Add Tweet </button>

         </div>
         </div>
       </div>

         <hr/>
           <Tweetlist tweets = {tweets} updateTweet = {updateTweet}/>
           {updatedTweet ? <Form tweet = {updatedTweet} updatedData = {updatedData}  addedTweet = {addedTweet}/> : null}
           {updatedTweet ? <AddForm tweet = {updatedTweet} updatedData = {updatedData} /> : null}
    </div>
  );
}
export default App;
