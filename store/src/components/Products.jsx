import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import { CartContext } from "./context/CartContext";
import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
// import { ToastContainer, toast } from "react-toastify";

const Products = () => {
  const [data, setData] = useState([]);

  const { handleFav } = useContext(AppContext);
  const { addToCart } = useContext(CartContext);

  const [selectedCardId, setSelectedCardId] = useState([]);
  // const savedToFav = () => {
  //   toast.success("Saved to Favorites");
  // };

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const convertJson = await response.json();
    setData(convertJson);
  };

  function handleChangeColor(id) {
    const foundItem = selectedCardId.findIndex((each) => each === id);
    if (foundItem !== -1) {
      const updatedFavId = [...selectedCardId];
      updatedFavId.splice(foundItem, 1);
      setSelectedCardId(updatedFavId);
    } else {
      setSelectedCardId([...selectedCardId, id]);
      // savedToFav();
    }
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 mt-10">
        {data.length > 0 &&
          data.map((elements) => (
            <div class="max-w-xs h-94 bg-white border border-gray-200 rounded-lg shadow">
              <div className="w-92 h-40 overflow-hidden p-2">
                <img
                  className="rounded-t-lg object-contain aspect-[6/3]"
                  src={elements.image}
                  alt=""
                />
              </div>
              <div class="p-4">
                <h5 className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                  {elements.title.substring(0, 21)}
                </h5>

                <p className="mt-2">{elements.price}$</p>
                <p className="mt-2 text-gray-700">
                  {elements.description.substring(0, 60)}
                </p>

                  {/* Favorite button */}
                <div className="flex gap-x-28">
                  <button
                    className="mt-4 font-bold p-3 flex items-center gap-1"
                    onClick={() => {
                      handleFav(elements);
                      // savedToFav();
                      handleChangeColor(elements.id);
                    }}
                  >
                    <icon className="text-gray-500 hover:text-red-600 text-xl font-bold ">
                      <AiFillHeart
                        className={`${
                          selectedCardId.find((each) => each === elements.id)
                            ? "text-[#FF0000]"
                            : ""
                        }`}
                      />
                    </icon>
                  </button>

                  <button
                    className="border rounded mt-3 font-bold w-[100px] p-1 flex items-center gap-2 hover:bg-gray-200 "
                    onClick={() => {
                      addToCart(elements);
                    }}
                  >
                   <FaCartShopping /> Buy now
                  </button>
                </div>
              </div>
            </div>

     
          ))}
        {/* <ToastContainer className="mt-16" /> */}
      </div>
    </>
  );
};

export default Products;
