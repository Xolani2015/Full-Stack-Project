export default class APIService{
    static UpdateTweet(id, body){
        return    fetch(`http://127.0.0.1:5000/update/${id}/`, {
            'method' : 'PUT',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp=>resp.json())
    }

    static AddTweet(body){
        return    fetch(`http://127.0.0.1:5000/add`, {
            'method' : 'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp=>resp.json())
    }


}