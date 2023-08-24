const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note')

//ROUTE 1: get all notes using: GET "/api/notes/fetchallnotes"
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }


})
//ROUTE 2: add notes using: POST "/api/notes/addnote" login required
router.post('/addnote', fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'enter a valid description').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})


//ROUTE 3: update new notes using POST: "/api/notes/updatenote" login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body
    //new note object
    try {
        const newnote = {}
        if (title) { newnote.title = title }
        if (description) { newnote.description = description }
        if (tag) { newnote.tag = tag }

        //find a new note to be updated and update it
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("not found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})

//ROUTE 4: delete notes using DELETE: "/api/notes/deletenote" login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //find a new note to be deleted and delete it
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("not found") }

        //allow deletion if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "Note has been seleted" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})
module.exports = router