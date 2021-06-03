import React, {useState} from 'react'

function Form(props) {
    const [tweetsentiment, setTweetsentiment] = useState(props.tweet.tweetsentiment)
    return (
        <div>
           {props.tweet ? (
                  <div className = "mb-3">
                  <label htmlForm = "tweetsentiment" className="form-lable">Sentiment</label>
                  <input type="text" className = "form-control"
                  value = {tweetsentiment}
                  placeholder = "Please Enter New Sentiment"/>
            
           </div>
           ):null}
           
         

           </div> 
    )
}

export default Form
