import { Children, createContext, useContext, useState } from "react";

const AppContext = createContext(undefined);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(context===undefined){
        throw new Error('AppContext must be in AppContextProvide');
    }
    return context;

}

const AppContextProvider = (props) =>{
    const [fav, setfav] = useState([]);

    const addToFav = (props) =>{
        const oldfav = [...fav];
        const newfav = oldfav.concat(props);
        setfav(newfav);

    }

    return(
        <AppContext.Provider value={{fav, addToFav}}>
     
            {props.children}
        </AppContext.Provider>
    )
} 


export default AppContextProvider;