import Context from '../context/userContext'
import React, {useCallback,useContext,} from 'react'
export default function useUser () {

    const {jwt,setJWT} = useContext(Context)

    
    const login = useCallback(({username,password}) => 
    {
            setJWT('test')
    },
        [setJWT],)

    const logout = useCallback(
        () => {
            setJWT(null)
        },
        [setJWT],
    )
    return{
        isLogged: Boolean(jwt),
        login,
        logout
    }
}