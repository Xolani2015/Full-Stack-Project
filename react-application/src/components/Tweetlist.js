

import React from 'react'

function Tweetlist(props) {
    return (
        <div>
            
               {props.tweets && props.tweets.map(tweet => {
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
    )
}

export default Tweetlist

