import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Context = React.createContext({})

export function UserContextProvider ({children}) {

    const state = useSelector((state) => state);
  
    const { cart } = state.shopping; 

   
    const [jwt,setJWT] = useState(false)
   
    return <Context.Provider value={{jwt,setJWT,cart}}>
        {children}
    </Context.Provider>
}

export default Context;