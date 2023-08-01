exports.homeRoutes = (req, res) => {
    res.render('index'); // This should render the 'index.ejs' view file 
} 

exports.add_exercise = (req, res) => {
    res.render('add_exercise');
}

exports.update_exercise = (rea, res) => {
    res.render('update_exercise');
}