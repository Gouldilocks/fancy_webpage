import pymongo
from flask import Flask

app = Flask(__name__)

# Connect to MongoDB
username = '<your-db-username>'
password = '<your-db-password>'
host = '<your-db-host>'
dbname = '<your-db-name>'

client = pymongo.MongoClient(f'mongodb+srv://{username}:{password}@{host}/{dbname}?retryWrites=true&w=majority')
db = client[dbname]

# Sample endpoint to retrieve all users
@app.route('/users')
def get_users():
    users = db.users.find()
    return {'users': users}

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)  # run our Flask app

