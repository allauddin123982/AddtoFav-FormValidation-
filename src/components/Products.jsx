import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { AiFillHeart } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";

const Products = () => {
  const [data, setData] = useState([]);
  const { addToFav } = useContext(AppContext);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [showindec, setShowIncDec] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const savedToFav = () => {
    toast.success("Saved to Favorites");
  };

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const convertJson = await response.json();
    setData(convertJson);
  };

  function handleChangeColor(id) {
    setSelectedCardId(id);
  }

  function showBtns(id) {
    setShowIncDec(id);
    if (toggle === false) {
      setToggle(true);
    }
  }

  function handleAddPrice(id, price) {
    setCartItems([...cartItems, id]);

    setTotal((prevTotal) => prevTotal + price);
  }

  function handleSubPrice(id, price) {
    if (total > 0) {
      const itemIndex = cartItems.indexOf(id);
      if (itemIndex !== -1) {
        // Item found in the cart
        setTotal((prevTotal) => prevTotal - price);
        subItem();
        // Remove the item from cartItems
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(itemIndex, 1);
        setCartItems(updatedCartItems);
      } else {
        console.log("Item not in cart");
      }
    }
  }

  function addItem() {
    setCount((count) => count + 1);
  }

  function subItem() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  return (
    <>
     {cartItems.length > 0 ? <div className=" flex justify-center gap-x-10 font-bold text-green-500 text-center m-5 text-2xl">
        <p> item id: {cartItems.join(",")}</p>
        <p> Total: ${Math.floor(total * 1)}</p>
        <p>Products {count}</p>
      </div>:<p className="text-red-600 flex justify-center font-serif text-xl"> no Items in cart</p>}
      <div className="flex flex-wrap gap-x-4 gap-y-10 m-10 max-w-[1440px] mx-auto">
        {data.length > 0 &&
          data.map((elements) => (
            <div className="  bg-white rounded-lg drop-shadow-2xl max-w-[300px] h-[380px] mx-auto ">
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
                  <p class="description text-justify mt-2 h-[50px] ">
                    {elements.description.substring(0, 60)}
                  </p>
                  <div className="flex gap-x-28">
                    <button
                      className=" border border-blue-600  rounded mt-4 font-bold p-3 flex items-center gap-1"
                      onClick={() => {
                        addToFav(elements);
                        savedToFav();
                        handleChangeColor(elements.id);
                      }}
                    >
                      <icon className="text-gray-500 hover:text-red-600 text-xl font-bold ">
                        <AiFillHeart
                          className={`${
                            selectedCardId === elements.id
                              ? "text-[#FF0000]"
                              : ""
                          }`}
                        />
                      </icon>
                    </button>

                    <button
                      className="border rounded mt-3 font-bold p-3 flex items-center "
                      onClick={() => {
                        showBtns(elements.id);
                        // handlePrice(elements.price);
                      }}
                    >
                      Buy now
                    </button>
                  </div>

                  {toggle === true && showindec === elements.id ? (
                    <div className="p-1 w-[250px] flex justify-end gap-x-1">
                      <>
                        <button
                          className="border p-1 w-[40px]"
                          onClick={() => {
                            addItem();
                            handleAddPrice(elements.id, elements.price);
                          }}
                        >
                          +
                        </button>
                        <button
                          className="border p-1 w-[40px]"
                          onClick={() => { 
                            handleSubPrice(elements.id, elements.price);
                          }}
                        >
                          -
                        </button>
                      </>
                    </div>
                  ) : null}
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
