import React, { useState,useMemo } from 'react';
import { useSelector } from 'react-redux';

const Context = React.createContext({})

export function UserContextProvider ({children}) {

    const state = useSelector((state) => state);
  
    const { cart } = state.shopping; 
   
    const [usuario,setUsuario] = useState(null)

    const value = useMemo(() => ({usuario,setUsuario,cart}), [usuario,cart])
   
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

export default Context;

export function useUserContext(){
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new Error(
            "useUserContext must be used within a useContextProvider"
        )
    }
    return context;
}

