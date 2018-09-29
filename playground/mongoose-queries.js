const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ba74ccac2710c1d20b573e0';

if(!ObjectID.isValid(id)){
  console.log('ID not valid!');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //When finding other than id
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

//When finding by id
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found!');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById('5ba753b4d3693127e0e8696f').then((user) => {
  if(!user){
    return console.log('Unable to find user!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
