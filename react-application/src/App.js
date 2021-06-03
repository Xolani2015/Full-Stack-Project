
import './App.css';

import {useState, useEffect} from "react";
import Tweetlist from './components/Tweetlist';


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
           <Tweetlist tweets = {tweets}/>
    </div>
  );
}
export default App;
