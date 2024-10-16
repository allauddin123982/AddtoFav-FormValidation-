import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [fav, setFav] = useState([]);
  const [favCount, setFavCount] = useState(0);

  const handleFav = (item) => {
    const foundIndex = fav.findIndex((each) => each.id === item.id);
    if (foundIndex !== -1) {
      // Item already exists in favorites, remove it
      const updatedArray = [...fav];
      updatedArray.splice(foundIndex, 1);
      setFav(updatedArray);
      setFavCount((prevCount) => prevCount - 1);
    } else {
      // Item doesn't exist in favorites, add it
      setFav((prevItem) => ([...prevItem, item]))

      setFavCount((prevCount) => prevCount + 1);
    }
  };
 

  return (
    <AppContext.Provider value={{ fav, favCount, handleFav }}>
      {props.children}
    </AppContext.Provider>
  );
};
