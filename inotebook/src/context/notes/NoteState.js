import noteContext from './noteContext'
import { useState } from 'react'


const NoteState = (props) => {
  const host = "http://localhost:5000"
const notesInitial = []

//Get all notes
const getNote = async() => {
  //API call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNmViZjM3MjE5YzY3ZmE4NTFjNWI0In0sImlhdCI6MTcyMzI2NDY4N30.5-Qe_KPWdSiP1t2PIBwBcxxslH-CUxeYaHczZMfVQ7o'
    },
  });
  const json = await response.json()
console.log(json)
setNotes(json)

}

//Add note
const addNote = async(title, description, tag) => {
  //API call
  const response = await fetch(`${host}/api/notes/addtenote`, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNmViZjM3MjE5YzY3ZmE4NTFjNWI0In0sImlhdCI6MTcyMzI2NDY4N30.5-Qe_KPWdSiP1t2PIBwBcxxslH-CUxeYaHczZMfVQ7o'
    },
    body: JSON.stringify({title, description, tag})
  });


  console.log("Adding a new note")
  let note = {
    "_id": "66b85b987e32fce3cfa810d4",
        "user": "66b6ebf37219c67fa851c5b4",
        "title": title,
        "description": description,
        "tag": tag,
        "__v": 0
  };
  setNotes(notes.concat(note))
}

//Delete note
const deleteNote = (id) => {
  //API call
  console.log("Deleting note with id" + id)
  const newNotes = notes.filter((note) => {return note._id})
  setNotes(newNotes)
}

//Edit notes
const editNote = async(id, title, description, tag) => {
  //API  call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNmViZjM3MjE5YzY3ZmE4NTFjNWI0In0sImlhdCI6MTcyMzI2NDY4N30.5-Qe_KPWdSiP1t2PIBwBcxxslH-CUxeYaHczZMfVQ7o'
    },
    body: JSON.stringify({title, description, tag})
  });
  const json = await response.json();

  //Logic to edit in client
for (let index = 0; index < notes.length; index++) {
  const element = notes[index];
  if(element._id === id){
    element.title = title;
    element.description = description;
    element.tag = tag;
  }
}
}

const [notes, setNotes] = useState(notesInitial)


    return (
        // whenever you write this Syntax, in between that, automatically all children will come
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNote}}>
            {/* Must write while creating context */}
            {props.children}
        </noteContext.Provider>
    );
  }


export default NoteState;