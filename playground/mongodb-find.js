//const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to Connect to MongoDB server!');
  }
  console.log('Connected to MongoDB server!');

/*To find through specific ID*/
  // const myDb = db.db('TodoApp');
  // myDb.collection('Todos').find({
  //   _id: new ObjectID('5ba70d2d5348f73320e4a8e5')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

/*To find the count of some data.*/
  // const myDb = db.db('TodoApp');
  // myDb.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

/*To query using name.*/
  const myDb = db.db('TodoApp');
  myDb.collection('Users').find({name: 'Abhishek R'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // db.close();
});
