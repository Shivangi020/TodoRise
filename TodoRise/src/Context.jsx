import React, { useContext } from 'react'

const AppContext = React.createContext();


export const AppProvider = ({children}) =>{
    const name = "ankita"
    return <AppContext.Provider value={{name}}>
         {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}


