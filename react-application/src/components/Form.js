import React, {useState, useEffect, Component} from 'react'
import APIService from '../components/APIService';
import {button, ButtonToobalBar} from 'react-bootstrap';
import {Add} from './Add';



function Form(props) 
{
    const [tweetsentiment, setTweetsentiment] = useState(props.tweet.tweetsentiment)
    const [tweetuser, setTweetuser] = useState(props.tweet.tweetuser)
    const [tweettext, setTweettext] = useState(props.tweet.tweettext)

    useEffect(() => {
        setTweetsentiment(props.tweet.tweetsentiment)
    }, [props.tweet])
    
    const updateTweet = () => {
         APIService.UpdateTweet(props.tweet.id, {tweetsentiment})
         .then(resp => props.updatedData(resp))
         .catch(error=> console.log(error))
    }

    const addTweet = () => {
        APIService.AddTweet({tweetsentiment,tweetuser,tweettext })
        .then(resp=> props.addedTweet(resp))
        .catch(error => console.log(error))
    }

    return (
        <div>
           {props.tweet ? (


           


                  <div className = "mb-3">
           

              

                   {
                    props.tweet.id ?  
                    <div>
                         <label>Twitter sentiment</label>
                         <input type="text" className = "form-control"
                    value = {tweetsentiment}
                    placeholder = "Please Enter New Sentiment"
                    onChange = {(e) => setTweetsentiment(e.target.value)}
                    />     
                    </div>
                
                   
                    :  
                    <div>
                   

                    <label>Twitter User</label>
                    <input type="text" className = "form-control"
                    value = {tweetuser}
                    placeholder = "Please Enter New User"
                    onChange = {(e) => setTweetuser(e.target.value)}
                    />
                    <label>Twitter Text</label>
                      <input type="text" className = "form-control"
                    value = {tweettext}
                    placeholder = "Please Enter the text"
                    onChange = {(e) => setTweettext(e.target.value)}
                    /> 
                     <label>Twitter sentiment</label>
                    <input type="text" className = "form-control"
                    value = {tweetsentiment}
                    placeholder = "Please Enter New Sentiment"
                    onChange = {(e) => setTweetsentiment(e.target.value)}
                    />    
                    </div>
                                     
                  
                   } 


                 {
                    props.tweet.id ?  
                    
                    
                    
                    <button 
                     onClick = {updateTweet}
                     className = "btn btn-success mt-3">
                     Update API </button>
                     :
                     
                     <button 
                  onClick = {addTweet}
                  className = "btn btn-success mt-3">
                  Add Tweet</button> 
                 } 

                 

           </div>
           ):null}
           
         

           </div> 
    )
}

export default Form
