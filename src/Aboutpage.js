import React, { createContext, useState } from "react";
import Contactoage from "./Contactoage";

export const Abouts=createContext();
//transfer data Contactoage
const Aboutpage = () => {
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [data, setdata] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
 
    const item = values;
    const res = data;
    res?.push(item);
    setvalues({
      ...values,
      item,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setdata({
        ...data,
        res
    })
    console.log("1",values)
    console.log("2",data)
    console.log("3",item)
    console.log("4",res)
    
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={values.firstName}
          onChange={(event) =>
            setvalues({ ...values, firstName: event.target.value })
          }
        />
        <br></br>
        <input
          type="text"
          value={values.lastName}
          onChange={(event) =>
            setvalues({ ...values, lastName: event.target.value })
          }
        />
        <br></br>
        <input
          type="text"
          value={values.email}
          onChange={(event) =>
            setvalues({ ...values, email: event.target.value })
          }
        />
        <br></br>
        <input
          type="text"
          value={values.phone}
          onChange={(event) =>
            setvalues({ ...values, phone: event.target.value })
          }
        />
        <br></br>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Submit
        </button>
      </form>
      <Abouts.Provider value={data}>
          <Contactoage/>
      </Abouts.Provider>

    </div>
  );
};

export default Aboutpage;
