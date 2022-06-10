import React, { createContext, useState }  from 'react'
import Contact from './Contact';
export const Homedata=createContext();

const Home = () => {
  //Contact 
 const [state,setstate]=useState('Dev')
    
  return (
    <div>
    <Homedata.Provider value={state}>
        <Contact/>
    </Homedata.Provider>
         
    </div>
  )
}

export default Home