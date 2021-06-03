

import React from 'react'

function Tweetlist(props) {

  const updateTweet = (tweet) => {
     props.updateTweet(tweet)
  }
    return (
        <div>
            
               {props.tweets && props.tweets.map(tweet => {
             return(
               <div key = {tweet.id}> 
                 <h2>{tweet.tweetuser}</h2>
                 <p>{tweet.tweettext}</p>
                 <p>{tweet.tweetdate}</p>
                 <p>{tweet.tweetsentiment}</p>
  
                <div className = "row">
                  <div className = "col-md-1">
                    <button className = "btn btn-primary"
                    onClick = {() => updateTweet(tweet)}
                    >Update</button>
                  </div>
                 
                 <div className = "col">
                   <button className = "btn btn-danger">Delete</button>
                 </div>
                 </div>
                 <hr/>
          </div>
          )
         })}
        </div>
    )
}

export default Tweetlist

