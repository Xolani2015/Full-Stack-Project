from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Tweets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tweettext = db.Column(db.Text)
    tweetuser = db.Column(db.String(100))
    tweetdate = db.Column(db.DateTime, default = datetime.datetime.now)
    tweetsentiment = db.Column(db.String(100))


    def __init__(self, tweettext, tweetuser, tweetsentiment):
        self.tweettext = tweettext
        self.tweetuser = tweetuser
        self.tweetsentiment = tweetsentiment

class TweetSchema(ma.Schema):
    class Meta:
        fields = ('id', 'tweettext', 'tweetuser', 'tweetdate', 'tweetsentiment')

    
tweet_schema = TweetSchema()
tweets_schema = TweetSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_articles():
    all_tweets = Tweets.query.all()
    results = tweets_schema.dump(all_tweets)
    return jsonify(results)


@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    tweet = Tweets.query.get(id)
    return tweet_schema.jsonify(tweet)


@app.route('/save', methods = ['POST'])
def save_tweet():
    tweettext = request.json['tweettext']
    tweetuser = request.json['tweetuser']
    tweetsentiment = request.json['tweetsentiment']

    tweets = Tweets(tweettext, tweetuser, tweetsentiment)
    db.session.add(tweets)
    db.session.commit()
    return tweet_schema.jsonify(tweets)


@app.route('/update/<id>/', methods = ['PUT'])
def update_tweet(id):
    tweet = Tweets.query.get(id)

    tweetsentiment = request.json['tweetsentiment']

    tweet.tweetsentiment = tweetsentiment

    db.session.commit()
    return tweet_schema.jsonify(tweet)

         


if __name__ == "__main__":
    app.run(debug=True)
