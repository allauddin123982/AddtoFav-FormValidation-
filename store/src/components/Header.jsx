import React, { useContext, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import Login from "./Login";
import logo from "../assets/logo.png";
import { AppContext } from "./context/AppContext";
import { CartContext } from "./context/CartContext";
import SearchBar from "./SearchBar";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { favCount } = useContext(AppContext);
  const { cartItemCount } = useContext(CartContext);

  return (
    <>
      <header className="min-w-[1000px]">
        <div className="flex items-center bg-[#131921] text-white h-[60px]">
          {/* Left */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} alt="" className="h-[45px] w-[120px] m-2" />
            </Link>
            <div className="pr-6">
              <div className="text-xs text-center">Deliver to</div>
              <div className="flex items-center gap-x-1">
                <SlLocationPin className="" />
                <p className="font-bold">Pakistan</p>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="flex grow relative items-center ">
            <SearchBar />
          </div>

          {/* Right */}
          <div className="flex">
            <div className="pr-4 pl-4">
              <div className="text-sm xl:text-lg font-bold">
                <Link to={"/fav"} className="flex items-center gap-x-1">
                  <MdFavorite
                    className={`inline-block ${
                      favCount > 0 ? "text-red-500" : null
                    } `}
                  />
                  {favCount > 0 ? (
                    <p className="absolute top-2 ms-1 text-sm font-bold">
                      {favCount}
                    </p>
                  ) : null}
                  Favourite
                </Link>
              </div>
            </div>

            <div className="pr-4">
              <div className="text-xs xl:text-lg ">
                <Link to={"/cart"} className="flex items-center gap-x-1">
                  <BsFillCartCheckFill className="inline-block" />
                  {cartItemCount > 0 ? (
                    <p className="absolute top-2 ms-1 text-sm font-bold">
                      {cartItemCount}
                    </p>
                  ) : null}
                  Cart
                </Link>
              </div>
            </div>
            <div className=" flex gap-x-1 pr-4  cursor-pointer items-center">
              <BiLogIn className="inline-block text-xl" />
              <div
                className="text-xs xl:text-lg "
                onClick={() => setToggle(!toggle)}
              >
                Sign in
              </div>
            </div>
          </div>
        </div>
        <div className="h-9 flex items-center bg-[#232F3E] text-white space-x-2 text-xs lg:sm lg:text-[14px] p-2 pl-8 box-border ">
          <div className="hover:border h-8 w-24 flex items-center justify-center">Today-deals</div>
          <div className="hover:border h-8 w-28 flex items-center justify-center">Cutomer-service</div>
          <div className="hover:border h-8 w-20 flex items-center justify-center">Gift-cards</div>
          <div className="hover:border h-8 w-20 flex items-center justify-center">Registry</div>
          <div className="hover:border h-8 w-10 flex items-center justify-center">Sell</div>
        </div>
      </header>

      {toggle ? <Login /> : null}
    </>
  );
};

export default Header;
