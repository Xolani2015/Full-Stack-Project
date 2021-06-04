import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService';

function Form(props) 
{
    const [tweetsentiment, setTweetsentiment] = useState(props.tweet.tweetsentiment)

    useEffect(() => {
        setTweetsentiment(props.tweet.tweetsentiment)
    }, [props.tweet])
    
    const updateTweet = () => {
         APIService.UpdateTweet(props.tweet.id, {tweetsentiment})
         .then(resp => props.updatedData(resp))
         .catch(error=> console.log(error))
    }

    const insertTweet = () => {
        APIService.InsertTweet({tweetsentiment})
        .then(resp=> console.log(resp))
        .catch(error => console.log(error))
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

                 {
                     props.tweet.id ?  <button 
                     onClick = {updateTweet}
                     className = "btn btn-success mt-3">
                     Update API</button>
                     :
                     <button 
                  onClick = {insertTweet}
                  className = "btn btn-success mt-3">
                  Add Tweet</button> 
                 } 

                 

           </div>
           ):null}
           
         

           </div> 
    )
}

export default Form
