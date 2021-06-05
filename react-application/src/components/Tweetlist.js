
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';






function Tweetlist(props) {

  const updateTweet = (tweet) => {
     props.updateTweet(tweet)


  }


    return (
        <div>


<ReactBootStrap.Table class="content-table">
  <thead>
    <tr  >
      <th scope="col">#</th>
      <th scope="col">@User</th>
      <th scope="col">Post</th>
      <th scope="col">Sentiment</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
    {
      props.tweets && props.tweets.map((item) => (
         <tr key={item.id} class="table-warning">
      <th scope="row" >{item.id}</th>
      <td>{item.tweetuser}</td>
      <td>{item.tweettext}</td>
      <td>{item.tweetsentiment}</td>
      <td> 
                <div className = "row">
                  <div className = "col">
                    <button className = "btn btn-primary"
                    onClick = {() => updateTweet(item)}
                    >Update</button>
                  </div>
                 
                 <div className = "col">
                   <button className = "btn btn-danger">Delete</button>
                 </div>
                 </div></td>
    </tr>
      ))
    }
   
   
  </tbody>
</ReactBootStrap.Table>
            
               {props.tweets && props.tweets.map(tweet => {
             return(
                 <div key = {tweet.id}> 
                 <h2>{tweet.tweetuser}</h2>
                 <p>{tweet.tweettext}</p>
                 <p>{tweet.tweetdate}</p>
                 <p>{tweet.tweetsentiment}</p>
  
                 <hr/>
          </div>
          )
         })}
        </div>
    )
}

export default Tweetlist

