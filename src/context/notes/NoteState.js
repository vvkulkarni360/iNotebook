import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInitial=[
        {
          "_id": "64e4fa05f04460935cd4821f",
          "user": "64e45cae6fc5dd548bf807f0",
          "title": "my title",
          "description": "hello how are you2",
          "tag": "personal",
          "date": "1692727813209",
          "__v": 0
        },
        {
          "_id": "64e4fa05f04460935cd4821f",
          "user": "64e45cae6fc5dd548bf807f0",
          "title": "my title",
          "description": "hello how are you2",
          "tag": "personal",
          "date": "1692727813209",
          "__v": 0
        },
        {
          "_id": "64e4fa05f04460935cd4821f",
          "user": "64e45cae6fc5dd548bf807f0",
          "title": "my title",
          "description": "hello how are you2",
          "tag": "personal",
          "date": "1692727813209",
          "__v": 0
        },
        {
          "_id": "64e762f03765bb546f126ef2",
          "user": "64e45cae6fc5dd548bf807f0",
          "title": "my song",
          "description": "subscribe",
          "tag": "song",
          "date": "1692885744949",
          "__v": 0
        },
        {
          "_id": "64e762f03765bb546f126ef2",
          "user": "64e45cae6fc5dd548bf807f0",
          "title": "my song",
          "description": "subscribe",
          "tag": "song",
          "date": "1692885744949",
          "__v": 0
        },
        {
          "_id": "64e762f03765bb546f126ef2",
          "user": "64e45cae6fc5dd548bf807f0",
          "title": "my song",
          "description": "subscribe",
          "tag": "song",
          "date": "1692885744949",
          "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,notesInitial}}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState