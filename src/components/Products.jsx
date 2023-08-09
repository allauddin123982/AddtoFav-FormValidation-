import React, { useEffect, useState } from "react";
import { useAppContext } from "./context/AppCpntext";
import { AiFillHeart } from "react-icons/ai";

const Products = () => {
  const [data, setData] = useState([]);

  const { fav, addToFav } = useAppContext();
  console.log("fav are ");
  
  
  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const convertJson = await response.json();
    setData(convertJson);

    console.log("The data: ", data);
  };
  return (
    <>
      <div className="flex flex-wrap ">
        {data.length > 0 &&
          data.map((elements) => (
            <div className="border bg-white rounded-lg drop-shadow-2xl mt-20 max-w-[400px] h-[600px] mx-auto  ">
              <div className="p-10 flex flex-col justify-center items-center h-[600px] ">
                <div className="image w-[200px] overflow-hidden ">
                  <img
                    src={elements.image}
                    alt=""
                    className="rounded-full hover:scale-110"
                  />
                </div>
                <div className="body pt-5 ">
                  <p className="title pt-0 text-2xl font-bold">
                    {elements.title}
                  </p>
                  <p className="price pt-0 text-xl">{elements.price}$</p>
                  <p class="description text-justify mt-5 h-[100px] overflow-hidden">
                    {elements.description}
                  </p>

                  <button
                    className="border rounded mt-5 font-bold p-3 flex items-center gap-1"
                    onClick={() => {
                      addToFav(elements);
                    }}
                  >
                    <icon className="text-gray-500 hover:text-red-600 text-xl font-bold">
                      <AiFillHeart />
                    </icon>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
