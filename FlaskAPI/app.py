from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)

app.config('SQLALCHEMY_DATABASE_URI') = 'mysql://root:''@localhost/flask'
app.config('SQLALCHEMY_TRACK_MODIFICATIONS') = False

db = SQLAlchemy(app)

class Tweets(db.Model):
    id = db.Columb(db.Integer, primary_key=True)
    tweettext = db.Column(db.Text)
    tweetuser = db.Column(db.String(100))
    tweetdate = db.Column(db.DateTime, default = datetime.datetime.now)
    tweetsentiment = db.Column(db.String(100))

@app.route('/', methods = ['GET'])
def get_articles():
    return jsonify({"Hello" : "Hamba"})


if __name__ == "__main__":
    app.run(debug=True)
