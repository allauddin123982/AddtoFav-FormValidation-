import { createContext, useState } from "react";

export const AppContext = createContext();
//context will be used to share data (in this case,
// the list of favorite items and the addToFav function

export const AppContextProvider = (props) => {
  const [fav, setfav] = useState([]);
  //This state variable will hold the list of favorite items.

  const addToFav = (props) => {
    const oldfav = [...fav];
    const newfav = oldfav.concat(props);
    setfav(newfav);
  };

  return (
    
      <AppContext.Provider value={{ fav, addToFav }}>
        {props.children}
      </AppContext.Provider>

  )
}
