import React, { useContext } from 'react';
import { Homedata } from './Home';

const Contact = () => {
    const user=useContext(Homedata)
  return (
    <div>
        <h4>{user}</h4>
    </div>
  )
}

export default Contact;