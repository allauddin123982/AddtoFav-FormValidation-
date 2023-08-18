import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { AiFillHeart } from "react-icons/ai";

import { ToastContainer, toast } from 'react-toastify';

const Products = () => {
  const [data, setData] = useState([]);

  const { addToFav } = useContext(AppContext);


  const helo = () =>{
    toast.success("Saved to Favorites")
  }


  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const convertJson = await response.json();
    setData(convertJson);

    console.log("The data: ", data);
  };

  const [colorr, setColor] = useState('');
  const [value, setValue] = useState('');

  function handleChangeColor(e) {
    setValue(e.target.value);
    handleChangeColor(value);
  
  }
  function handleChangeColor(value){
    setColor('#FF0000');
  }

  return (
    <>
      <div className="flex flex-wrap gap-10 m-20">
        {data.length > 0 &&
          data.map((elements) => (
            <div className="  bg-white rounded-lg drop-shadow-2xl max-w-[300px] h-[400px] mx-auto ">
              <div className="p-5 flex flex-col justify-center items-center h-[400px] ">
                <div className="image w-[100px] h-[120px] overflow-hidden ">
                  <img
                    src={elements.image}
                    alt=""
                    className="rounded-full hover:scale-110 h-[100px]"
                  />
                </div>
                <div className="body mt-2">
                  <p className="title text-xl font-bold overflow-hidden  h-[30px]">
                    {elements.title}
                  </p>
                  <p className="price">{elements.price}$</p>
                  <p class="description text-justify mt-2 h-[50px] overflow-hidden">
                    {elements.description}
                  </p>

                  <button
                    className="border rounded mt-3 font-bold p-3 flex items-center gap-1"
                    onClick={(e) => {
                      addToFav(elements);
                      helo();
                      handleChangeColor({e});
                    }}
                  >
                    <icon  className="text-gray-500 hover:text-red-600 text-xl font-bold ">
                      <AiFillHeart style={{ color: colorr }}/>
                    </icon>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer />
      </div>
    </>
  );
};

export default Products;
