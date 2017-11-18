var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
var url = "mongodb://aadams45:asdfasdf@ds113566.mlab.com:13566/not-just-a-handout";

module.exports = class MongoDatabase {
  createContribution(contrubutionData, callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('contributions').insertOne({
        ...contrubutionData
      }, callback);
    });
  }

  getContributions(userId, callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('contributions').find({userId}).toArray(callback);
    });
  }

  createUser(user, callback = () => {}){
    MongoClient.connect(url, (err, db) => {
      db.collection('users').insertOne(user, callback);
    });
  }

  getUser(data, key = 'email', callback = () => {}){
    MongoClient.connect(url, (err, db) => {
      db.collection('users').find({
        [key]: data
      }).next(callback);
    });
  }
  
  createResource(resource, callback = () => {}){
    MongoClient.connect(url, (err, db) => {
      console.log(err);
      db.collection('resources').insertOne(resource, callback);
    });
  }
}
