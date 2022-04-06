const fs = require('fs');
const router = require('express').Router();
const { uuid } = require('uuidv4');

router.get('/notes', (req,res) => {
    
    const data = JSON.parse(fs.readFileSync('./db/db.json', "utf8"));

    let results = data;

    res.json(results);
});

router.post('/notes', (req,res) => {
    if(!req.body) return res.status(400);

    const data = JSON.parse(fs.readFileSync('./db/db.json', "utf8"));


    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    };
    

    data.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data, null, 2));
    res.json(newNote);

})

router.delete('/notes/:id', (req, res) => {

    const data = JSON.parse(fs.readFileSync('./db/db.json', "utf8"));

    const id = req.params.id;

    const newData = data.filter(note => {
            return note.id != id
        })

    fs.writeFileSync("./db/db.json", JSON.stringify(newData, null, 2));
    res.json(newData);

})


module.exports = router;