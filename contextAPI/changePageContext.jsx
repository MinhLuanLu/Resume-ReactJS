import { useState, createContext } from "react";

export const ChangePageContext = createContext({})

export const ChangePageProvider = ({children})=>{
    const [changePage, setChangePage] = useState (0)
    const [title, setTitle] = useState('Portfolio Projects')

    return(
        <ChangePageContext.Provider value={{
            changePage, setChangePage,
            title, setTitle
        }}>
            {children}
        </ChangePageContext.Provider>
    );
}