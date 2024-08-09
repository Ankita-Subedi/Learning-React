import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
       a.update();
      //  empty array [] to run only one time
      // eslint-disable-next-line
  },[])
  return (
    <div>
      This is about {a.state.name} and she is in {a.state.class}
    </div>
  )
}

export default About
