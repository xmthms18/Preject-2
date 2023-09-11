const axios = require('axios');


exports.homeRoutes = (req, res) => {
    const user = req.user;
    // Makes a GET request to the 'index.ejs' view file
    axios.get(`${process.env.API_URL}/api/exercise`)
    .then(function(response) {
        
        res.render('index', {exercise: response.data, user: user}); // This should render the 'index.ejs' view file 
    })
  .catch(err => {
    res.send(err);
    });
} 

exports.add_exercise = (req, res) => {
    const user = req.user;
    res.render('add_exercise', { user: user }); 
};


exports.update_exercise = (req, res) => {
    axios.get(`${process.env.API_URL}`, { params :{id: req.query.id}})
    .then(function(exercisedata) {
        res.render("update_exercise", {exercise: exercisedata.data}); // This should render the 'update_exercise.ejs' view file 
    })
    .catch(err => {
        res.send(err);
    });
}