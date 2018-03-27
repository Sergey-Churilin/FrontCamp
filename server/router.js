const express = require('express');
const router = express.Router();

//db
const TodoModel = require('./Database/TodoSchema.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://Siarhei:w333eq1@ds219879.mlab.com:19879/angulartodo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ROUTES FOR OUR SERVER
// =============================================================================
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
//and remove caching so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// on routes that end in /posts
// ----------------------------------------------------
router.route('/todos')

// create a todo (accessed at POST http://localhost:3000/todos)
    .post(function (req, res, next) {
        // .post(function (req, res, next) {
        const todoData = req.body;
        const newTodo = new TodoModel({'name': todoData.name, 'date': todoData.date, 'status': todoData.status, 'mode': todoData.mode, 'visible': todoData.visible});
        newTodo.save(function (err, newTodo) {
            if (err) {
                err.description = "Error in adding new todo";
                console.log('error to add new todo');
                next(err);
            } else {
                res.send(newTodo);
                console.log("Todo created");
            }
        });
    })

    // get all the todos (accessed at GET http://localhost:3000/todos)
    .get(function (req, res, next) {
        TodoModel.find({}, function (err, todos) {
            if (err) {
                err.description = "Can't get todos";
                next(err);
            } else {
                res.send(todos);
            }
        });
    });

// on routes that end in /todos/:todo_id
// ----------------------------------------------------
router.route('/todos/:todo_id')
// get the post with that id
    .get(function (req, res, next) {
        const id = req.params.todo_id;
        TodoModel.findOne({_id: id}, function (err, todo) {
            if (err) {
                err.description = "Todo with id " + id + "  does not exist";
                next(err);
            } else {
                if (post) {
                    console.log('todo = ' + todo);
                    res.send(post);
                } else {
                    res.status(403).send('No todos');
                }
            }
        });
    })

    // update the todo with this id (accessed at PUT http://localhost:8080/todos/:todo_id)
    .put(function (req, res, next) {
        const id = Number(req.params.todo_id);
        const todoData = req.body;

        TodoModel.find({date:id}, function (err, todosArray) {
            if (err) {
                err.description = 'Todo with id ' + id + ' does not exist';
                next(err);
            } else {
                if (todosArray) {
                    var todo = todosArray[0];
                    todo.name = todoData.name;
                    console.log(todo);
                    todo.save(function (err, todo) {
                        if (err) {
                            err.description = 'Error during todo updation occured';

                            if (!err.status) {
                                err.status = 400;
                            }
                            next(err);
                        } else {
                            if (todo) {
                                console.log('Todo with id ' + id + ' UPDATED');
                                res.send(todo);
                            } else {
                                res.status(403).send('Todo with this id does not exist');
                            }
                        }
                    });
                } else {
                    const errObj = {
                        description: 'Todo with id ' + id + ' NOT FOUND',
                        body: 'Todo update FAILED'
                    };

                    next(errObj);
                }
            }
        });
    })
    // delete the todo with this id (accessed at DELETE http://localhost:8080/todos/:todo_id)
    .delete(function (req, res, next) {
        //.delete(function (req, res, next) {
        const id = req.params.todo_id;
        TodoModel.deleteOne({_id: id}, function (err) {
            if (err) {
                err.description = 'Todo with id ' + id + ' NOT FOUND. Delete failed';
                next(err);
            } else {
                res.json({message: 'Todo with id ' + id + ' DELETED'});
            }
        });
    });

// on routes that end in /posts
// ----------------------------------------------------

module.exports = router;