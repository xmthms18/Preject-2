const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Makes a GET request to the 'index.ejs' view file
    axios.get('http://localhost:3000/api/exercise')
    .then(function(response) {
        
        res.render('index', {exercise: response.data}); // This should render the 'index.ejs' view file 
    })
  .catch(err => {
    res.send(err);
    });
} 

exports.add_exercise = (req, res) => {
    res.render('add_exercise');
}

exports.update_exercise = (req, res) => {
    axios.get('http://localhost:3000/api/exercise/', { params :{id: req.query.id}})
    .then(function(exercise) {
        res.render("update_exercise", {exercise: exercise.data}); // This should render the 'update_exercise.ejs' view file 
    })
    .catch(err => {
        res.send(err);
    });
}