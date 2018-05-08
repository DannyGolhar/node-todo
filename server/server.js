const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({text: req.body.text});

  todo
    .save()
    .then((doc) => {
      console.log(JSON.stringify(doc, undefined, 2));
      res.send(doc);
    }, (error) => {
      console.log('Error', error);
      res.status(400).send(error);
    })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos)=> {
    res.send({todos});
  }, (error)=> {
    res.status(400).send(e);
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  console.log('id: ', id);

  if(!ObjectID.isValid(id)) {
    return res.status(400).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(400).send();
    }
     res.send({todo});
  }, (e) => {
     res.status(400).send();
  })
})


//Users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});
