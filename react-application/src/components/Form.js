import React, {useState} from 'react'
import APIService from '../components/APIService';

function Form(props) {
    const [tweetsentiment, setTweetsentiment] = useState(props.tweet.tweetsentiment)

    const updateTweet = () => {
         APIService.UpdateTweet(props.tweet.id, {tweetsentiment})
         .then(resp => props.updatedData(resp))
         .catch(error=> console.log(error))
    }

    return (
        <div>
           {props.tweet ? (
                  <div className = "mb-3">
                  <label htmlFor = "tweetsentiment" className="form-lable">Sentiment</label>
                  <input type="text" className = "form-control"
                  value = {tweetsentiment}
                  placeholder = "Please Enter New Sentiment"
                  onChange = {(e) => setTweetsentiment(e.target.value)}
                  />
               
                  <button 
                  onClick = {updateTweet}
                  className = "btn btn-success mt-3">
                  Update API</button>

           </div>
           ):null}
           
         

           </div> 
    )
}

export default Form
