import noteContext from './noteContext'
import { useState } from 'react'


const NoteState = (props) => {
    const s1 = {
        "name": "Ankita",
        "class": "10A"
    }

    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Nikita",
                "class": "5A"
            })
        }, 1000);
    }
    return (
        // whenever you write this Syntax, in between that, automatically all children will come
        <noteContext.Provider value={{state ,update}}>
            {/* Must write while creating context */}
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;