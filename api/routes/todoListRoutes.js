'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks) // read all
    .post(todoList.create_a_task); // create one


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task) // read one
    .put(todoList.update_a_task) // update one
    .delete(todoList.delete_a_task); // delete one
};