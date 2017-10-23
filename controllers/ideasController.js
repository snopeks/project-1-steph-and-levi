var db = require('../models')

//get all ideas
const index = (req, res) => {
  console.log("in es6 index fn");
  db.Idea.find({}, (err, allIdeas) => {
    if(err){ console.log('there was an error getting ideas', err);}
    res.json(allIdeas)
  });
};

// create an idea

const create = (req, res) => {
  let userId = req.body.userId;
  let inputIdea  = req.body;
  console.log(userId, inputIdea)
  db.Idea.create(inputIdea, (err, idea) => {
    if(err) {console.log('error', err);}
    res.json(idea)
  })
}

//update an idea

const update = (req, res) => {
  db.Idea.findById(req.params.id, (err, foundIdea) => {
    if(err) {console.log('error updating idea', err);}
    foundIdea.title = req.body.title;
    foundIdea.description = req.body.description;
    foundIdea.save((err, savedIdea) => {
      if(err) { console.log("error saving idea", err);}
      res.json(savedIdea);
    })
  })
}

//delete an idea

const destroy = (req, res) => {
  console.log("let's destroy an idea!");
  db.Idea.findByIdAndRemove(req.params.id, (err, deletedIdea) => {
    if(err) {console.log('error deleting idea', err);}
    res.json(deletedIdea);
  })
}


module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
}