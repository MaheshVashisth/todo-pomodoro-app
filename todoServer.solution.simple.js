const express = require('express');
const bodyParser = require('body-parser');                 //  node ./solutions/todoServer.solution.simple.js
const path = require("path");

const app = express();
const cors = require("cors"); //backened allows request from everywhere install cors
app.use(bodyParser.json());
app.use(cors());  
let todos = [];     //global variable an array which stores all the info of to do items and updated by newtodo.

function findIndex(arr, id) {          // iterates over the array and return the index (find the index of at which a certain id is present)
  for (let i = 0; i < arr.length; i++) {    //search for the id passed in  findIndex(arr, id)
    if (arr[i].id === id) return i;
  }                                       // also this is an js internal function
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];                      // remove the index got from  findIndex(arr, id) 
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);  // logic --> if index which is gotten by findindex match then don't push it else does
  }
  return newArray;
}

app.get('/todos', (req, res) => {
  res.json(todos);
});

// app.get('/todos/:id', (req, res) => {
//   const todoIndex = findIndex(todos, parseInt(req.params.id));
//   if (todoIndex === -1) {
//     res.status(404).send();
//   } else {
//     res.json(todos[todoIndex]);
//   }
// });

var ctr = 1;  //global variable
app.post('/todos', (req, res) => {
  const newTodo = {
    id: ctr, // unique random id
    title: req.body.title,
    description: req.body.description
  };
  ctr = ctr + 1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// app.put('/todos/:id', (req, res) => {
//   const todoIndex = findIndex(todos, parseInt(req.params.id));
//   if (todoIndex === -1) {
//     res.status(404).send();
//   } else {
//     todos[todoIndex].title = req.body.title;
//     todos[todoIndex].description = req.body.description;
//     res.json(todos[todoIndex]);
//   }
// });

app.delete('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeAtIndex(todos, todoIndex);
    res.status(200).send();
  }
});

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "index.html"));   //frontend and backened url are same
})

// for all other routes, return 404
// app.use((req, res, next) => {
//   res.status(404).send();
// });



app.listen(3000);
// module.exports = app;

