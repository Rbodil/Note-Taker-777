const path = require('path');
const router = require('express').Router();
const { data } = require('../../db/db.json')
const {
    getAndRenderNotes,
    saveNote,
    deleteNote,
    handleNoteSave,
    handleNoteDelete
} = require('../../public/assets/js/index')

router.get('/api/notes', (req,res) => {
    let results = data;

    res.json(results);
});

router.post('/api/notes', (req,res) => {
    req.body.id = data.length.toString();

    if(req.body===""){
        res.status(400).send("Note not found");
    } else {
        
    }
})

router.delete('/api/notes', (req, res) => {
    res.send(`Delete note ${req.params.id}`)
})


module.exports = router;