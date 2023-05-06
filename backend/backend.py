from flask import Flask, request
from flask_restful import Resource, Api, reqparse, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Connected to sqlite database for now, will be changed later
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'secret'
api = Api(app)
db = SQLAlchemy(app)

class Test(Resource):
   def get(self):
    return {
        "statusCode": 200,
        "body": {"data": "Hello there, welcome to the test"},
        "headers": {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": True,
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
        },
      } 

api.add_resource(Test, '/test')

if __name__ == '__main__':
    db.create_all()
    app.run(host="0.0.0.0", port=8080)  # run our Flask app
