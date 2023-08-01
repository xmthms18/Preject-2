let Exercisedb = require('../models/model');

// create and save new exercise
exports.create = (req,res)=>{
// validate request
if(!req.body){
    res.status(400).send({ message : "Content can not be emtpy!"});
    return;
}
// new exercise
const exercise = new Exercisedb({
    name : req.body.name,
    reps : req.body.reps,
    sets: req.body.sets,
    status : req.body.status
})
// save exercise in the database
user
.save(user)
.then(data => {
    //res.send(data)
    res.redirect('/add-exercise');
})
.catch(err =>{
    res.status(500).send({
        message : err.message || "Some error occurred while creating a create operation"
    });
});


// retrieve and return all exercises / retrive and return a single exercise
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;

        Exercisedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Exercisedb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
}

// Update a new idetified exercise by id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Exercisedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update exercise with ${id}. Maybe exercise not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update Exercise information"})
        })
}


// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Exercisedb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Exercise was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Exercise with id=" + id
            });
        });
}
