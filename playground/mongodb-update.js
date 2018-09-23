//const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, db) => {
  if(err){
    return console.log('Unable to Connect to MongoDB server!');
  }
  console.log('Connected to MongoDB server!');

  // const myDb = db.db('TodoApp');
  // myDb.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ba73612b9556727292837d9')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  const myDb = db.db('TodoApp');
  myDb.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5ba708fd27b5c6188087d021')
  }, {
    $set: {
      name: 'Rakthalli Rudri'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
