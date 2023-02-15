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

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(20), nullable=False, unique=True)
  password = db.Column(db.String(100), nullable=False)
  role = db.Column(db.String(10), nullable=False)

  def __init__(self, username, password, role):
    self.username = username
    self.password = password
    self.role = role

class Register(Resource):
  @classmethod
  def user_exists(self, username):
    return User.query.filter_by(username=username).first()

  def post(self):
    data = request.form
    if self.user_exists(data['username']):
      return {
        "statusCode": 409,
        "response": "Conflict error. User already exists."
      }
    else:
      new_user = User(data['username'], data['password'], data['role'])
      db.session.add(new_user)
      db.session.commit()

      return {
        "statusCode": 200,
        "response": "New user {} registered.".format(data['username']),
      }

class GetUser(Resource):
  def get(self, username):
    user = User.query.filter_by(username=username).first()
    if user:
      return {
        "statusCode": 200,
        "response": "User {} found".format(username),
        "body": {
          "ID": user.id,
          "role": user.role   
        }
      }
    else:
      return {
        "statusCode": 404,
        "response": "User does not exist."
      }

api.add_resource(Test, '/test')
api.add_resource(Register, '/register')
api.add_resource(GetUser, '/user/<string:username>')

if __name__ == '__main__':
    db.create_all()
    app.run(host="0.0.0.0", port=8080)  # run our Flask app