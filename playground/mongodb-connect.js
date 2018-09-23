const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
  if(err){
    return console.log('Unable to Connect to MongoDB server!');
  }
  console.log('Connected to MongoDB server!');

// const myDb = db.db('Todos');
// myDb.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if(err){
//     return console.log('Unable to insert todo!');
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

const myDb = db.db('TodoApp');
myDb.collection('Todos').insertOne({
  text: 'Complete the Todo API!',
  completed: true
}, (err, result) => {
  if(err){
    return console.log('Unable to insert todo!');
  }

  console.log(JSON.stringify(result.ops, undefined, 2));
});
  db.close();
});
