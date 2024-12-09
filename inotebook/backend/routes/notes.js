const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require("express-validator");

//Route 1: Get all notes using: GET"/api/auth/getuser". Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

//Route 2: Add a new note using: POST "/api/auth/getuser". Login Required
router.post('/addnote', fetchuser, [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

//Route 3: Update existing note using: PUT "/api/auth/updatenote". Login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
const {title, description, tag} = req.body;
try{
    //Create newNote object
const newNote = {};
if(title){newNote.title = title};
if(description){newNote.description = description};
if(tag){newNote.tag = tag};

//Find note to be updated and update
let note = await Notes.findById(req.params.id)
if(!note){return res.status(404).send("Not Found")}


if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not allowed");
}

note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true}); res.json({note});
}catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
}
})




//Route 4: Delete existing note using: DELETE "/api/auth/deletenote". Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
try{
        //Find note to be deleted and delete
        let note = await Notes.findById(req.params.id)
        if(!note){return res.status(404).send("Not Found")}
        
        //ALlow deletion only if note belongs to user
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed");
        }
        
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Sucess": "Note deleted", note:note});
    
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
    })

module.exports = router