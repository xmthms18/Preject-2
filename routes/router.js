const express = require('express');
const route = express.Router()

const services =require('../services/render');
const controller =require('../controllers/controller');

// Root Route
// Method GET /
  route.get('/', services.homeRoutes); // This should render the 'index.ejs' view file

// Root Route
// Method GET /add-exercise
  route.get('/add-exercise', services.add_exercise);

// Root Route
// Method GET / update-exercise
  route.get('/update-exercise', services.update_exercise);

  //api
  route.post('/api/exercise', controller.createExercise);
  route.get('/api/exercise/', controller.find); // Wrap the controller.find function here
  route.put('/api/exercise/:id', controller.update)
  route.delete('/api/exercise/:id', controller.delete)
  
  module.exports = route;