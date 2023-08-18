import React from "react";
import { useContext } from "react";
import { AppContext } from './AppContext';


const FavShow = () => {
  const { fav } = useContext(AppContext);
  return (
    <>
      <h1 className="mt-10 text-center font-bold text-3xl">
        Favorites
      </h1>
        <div className="flex flex-wrap  max-w-[1240px] mx-auto">
      {fav.length > 0 ? fav.map((elements) => (
          <div className="bg-white rounded-lg  border drop-shadow-2xl mt-10 max-w-[400px] h-[600px] mx-auto ">
          <div className="p-10 flex flex-col justify-center items-center h-[600px] ">
            <div className="image w-[200px] overflow-hidden ">
              <img src={elements.image} alt="" className="hover:scale-125" />
            </div>
            <div className="body pt-5 "> 
              <p className="title  text-2xl font-bold">{elements.title}</p>
              <p className="price pt-2 text-xl">{elements.price}$</p>
              <p class="description text-justify mt-5 h-[100px] overflow-hidden">
                {elements.description}
              </p>
  
            
            </div>
          </div>
        </div>
      
        )):<h1 className="mt-10 ms-[43%] font-bold text-red-600 text-3xl">
        no Favorites
        </h1>
      }
      </div>



    </>
  );
};

export default FavShow;
