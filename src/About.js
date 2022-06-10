import React,{useContext} from 'react'
import { UserContext } from './App';
import { Fname } from './App';

const About = () => {
    //app pagee==commemntjs
    
    const user = useContext(UserContext);
    console.log("user",user)

  return (
    <div>
        <Fname.Consumer>
            {
                (name)=>{
                    return(
                        <h3>hello {name}</h3>
                    )
                }
            }
        </Fname.Consumer>
    </div>
  )
}

export default About