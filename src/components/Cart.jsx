import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Header from "../components/Header";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const [showindec, setShowIncDec] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

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
      <Header />
      <div className="bg-gray-100 ">
        <div className=" max-w-[1640px] flex gap-x-5 mx-auto">
          <div className="left bg-white my-10  w-[70%]">
            <div className=" border-b p-5 border-b-gray-300 font-bold text-3xl">
              Shopping Cart
            </div>
            {/* data */}
            <div>
              {cart.length > 0 ? (
                cart.map((elements) => (
                  <div className="border-b-2  my-5 rounded-lg drop-shadow-2xl w-full ">
                    <div className="p-2 flex items-center mx-8 gap-x-12 h-[280px] ">
                      <div className="image w-[120px] h-fit overflow-hidden rounded-full ">
                        <img
                          src={elements.image}
                          alt=""
                          className="hover:scale-125 "
                        />
                      </div>
                      <div className="body ">
                        <p className="title text-xl font-bold">
                          {elements.title.substring(0, 20)}
                        </p>
                        <p className="price text-lg">{elements.price}$</p>
                        <p class="description text-justify p-1  ">
                          {elements.description.substring(0, 60)}
                        </p>
                        <button
                          className="bg-gray-300 p-2 w-[100px] rounded font-bold  "
                          onClick={() => {
                            showBtns(elements.id);
                            // handlePrice(elements.price);
                          }}
                        >
                          Quatity
                        </button>
                        {toggle === true && showindec === elements.id ? (
                          <div className="pt-2 w-[250px] flex justify-start gap-x-1">
                            <>
                              <button
                                className="p-1 w-[40px] box-border bg-gray-400"
                                onClick={() => {
                                  addItem();
                                  handleAddPrice(elements.id, elements.price);
                                }}
                              >
                                +
                              </button>
                              <button
                                className="p-1 w-[40px] bg-gray-400"
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
                ))
              ) : (
                <h1 className="mt-10 ms-[43%] font-bold text-red-600 text-3xl">
                  no cart Items
                </h1>
              )}
            </div>
          </div>

          <div className="right w-[20%] me-20 text-center  bg-white h-36 mt-10 rounded ">
            <div className="mt-2 text-lg">
              {/* <p> item id: {cartItems.join(",")}</p> */}
              <p className="flex justify-center gap-2"> 
                Sub Total: ({count} items) : 
                <p className="font-bold">${Math.floor(total * 1)}</p>
              </p>
              <p className=" text-md mt-2 flex justify-center gap-2"> 
                <input type="checkbox" />
                this order contains a gift
              </p>
              <button className="bg-[#F7CA00] px-5 py-1 rounded-lg mt-5 text-sm w-[240px]">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
