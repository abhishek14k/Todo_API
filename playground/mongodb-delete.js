//const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to Connect to MongoDB server!');
  }
  console.log('Connected to MongoDB server!');

//deleteMany
// const myDb = db.db('TodoApp');
// myDb.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });
//deleteOne
  // const myDb = db.db('TodoApp');
  // myDb.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

//findOneAndDelete
  // const myDb = db.db('TodoApp');
  // myDb.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

const myDb = db.db('TodoApp');
// myDb.collection('Users').deleteMany({name: 'Pallavi P'});

myDb.collection('Users').findOneAndDelete({_id: new ObjectID("5ba70948f4ed1f2ad0c3a517")
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

  // db.close();
});
