import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const host = "http://localhost:8000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    //Get all notes
    const getNotes = async () => {
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVjYWU2ZmM1ZGQ1NDhiZjgwN2YwIn0sImlhdCI6MTY5MjY4OTY0MH0.nomC2qlT9aRdB8EtmpJwmPf7QEn0wqq4PfeUcQBxxog"
            }
        })
        
        const json=await response.json()
        console.log(json)
        setNotes(json);
    }
    //Add note
    const addNote = async (title, description, tag) => {
        //api call

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVjYWU2ZmM1ZGQ1NDhiZjgwN2YwIn0sImlhdCI6MTY5MjY4OTY0MH0.nomC2qlT9aRdB8EtmpJwmPf7QEn0wqq4PfeUcQBxxog"
            },
            body: JSON.stringify({title,description,tag}),
        });
        const json=await response.json()
        console.log(json)
        
        console.log("adding a new note")
        const note = {
            "_id": "64e762f03765bb546f126ef27",
            "user": "64e45cae6fc5dd548bf807f0",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1692885744949",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    //delete note
    const deleteNote = async (id) => {
        //todo api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVjYWU2ZmM1ZGQ1NDhiZjgwN2YwIn0sImlhdCI6MTY5MjY4OTY0MH0.nomC2qlT9aRdB8EtmpJwmPf7QEn0wqq4PfeUcQBxxog"
            }
        });
        const json= await response.json();
        console.log(json)
        console.log("deleting note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
        

    }
    //edit note
    const editNote = async (id, title, description, tag) => {
        //api call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVjYWU2ZmM1ZGQ1NDhiZjgwN2YwIn0sImlhdCI6MTY5MjY4OTY0MH0.nomC2qlT9aRdB8EtmpJwmPf7QEn0wqq4PfeUcQBxxog"
            },
            body: JSON.stringify({title,description,tag}),
        });
        const json= await response.json();
        console.log(json)
    
        let newNotes=JSON.parse(JSON.stringify(notes))
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
            newNotes[index].title = title
            newNotes[index].description = description
            newNotes[index].tag = tag
            break;
        }

    }
    setNotes(newNotes)
}


return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState