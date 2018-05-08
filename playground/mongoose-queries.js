const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ae96deb603c5e29cc28b007';
if(!ObjectID.isValid(id)) {
    console.log('ObjectId not valid');
}

// Todo.find({
//     _id: id
// }).then((todos)=> {
//   console.log('Todos', todos);  
// }, (error) => {
//   console.log('Error: ', error); 
// })

// Todo.findOne({
//     _id: id
// }).then((todo)=> {
//   console.log('Todos', todo);  
// })

// Todo.findById(id).then((todo) => {
//  if(!todo) {
//      return console.log('Id not found');
//  }   
//  console.log('Todo by Id', todo);
// }, (error) => {
//   console.log(error);
// })


User.findById('5aeaf2d815e849e853f1f7a7').then((user) => {
 if(!user) {
     return console.log('User not found');
 }   
 console.log(JSON.stringify(user,undefined,2));
}, (error) => {
  console.log(error);
})