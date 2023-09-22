import React, { useContext, useState } from "react";
import { MdFavorite} from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import Login from "./Login";
import logo from "../assets/logo.png";
import { AppContext } from "./AppContext";
import { CartContext } from "./CartContext";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {favCount} = useContext(AppContext)
  const {cartItemCount} = useContext(CartContext)
  
  return (
    <>
      <div className="header bg-[#131921] flex text-white h-20 box-border">
        <div className=" flex items-center gap-x-4 box-border">
          <div className="logo ms-6 hover:border">
            <Link to={'/'}><img src={logo} alt="" className="h-14 w-[120px] object-contain" /></Link>
          </div>
          <div className="deliver hover:border ">
            <p className="text-center ">Deliver to </p>
            <p className="flex items-center tracking-widest w-28 text-center font-bold">
              <SlLocationPin className=" text-xl" />
              <p>Pakistan</p>
            </p>
          </div>
          <div className="w-[1240px] border flex h-10">
            <select name="" id="" className="bg-[#E6E6E6] w-12 text-black">
              <option value="">All</option>
              <option value="">Arts</option>
              <option value="">Crafts</option>
              <option value="">Gadgets</option>
              <option value="">Computer</option>
              <option value="">Mobile</option>
              <option value="">Laugage</option>
              <option value="">Sports</option>
              <option value="">Tools</option>
              <option value="">Toys</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-full ps-2"
            />
            <button className="bg-[#FEBD69] w-14 flex justify-center items-center text-black">
              <BsSearch />
            </button>
          </div>
          <ul className="flex gap-4 text-lg hover:cursor-pointer">
            <li className="p-1">
              <select name="" id="" className="bg-[#E6E6E6] w-12 text-black">
              <option value="">En</option>
              <option value="">Pak</option>
              <option value="">Ind</option>
              <option value="">Uk</option>
              <option value="">USA</option>
              <option value="">Nz</option>
              <option value="">Aus</option>
              <option value="">Auk</option>
              <option value="">Syd</option>
              <option value="">CN</option>
            </select>
            </li>
            <li className="p-1 ">
              <Link to={"/fav"} className="flex items-center gap-x-1">
                <MdFavorite className={`inline-block ${ favCount>0 ?"text-red-500":null } `} />
                {
                  favCount>0 ?
                 <p className="absolute top-4 ms-1 text-sm font-bold">{favCount}</p>
                  :null
                }
                Favourite
              </Link>
            </li>

            <li className="p-1 ">
              <Link to={"/cart"} className="flex items-center gap-x-1">
                <BsFillCartCheckFill className="inline-block" />
                {
                  cartItemCount>0 ?
                 <p className="absolute top-4 ms-1 text-sm font-bold">{cartItemCount}</p>
                  :null
                }
                Cart
              </Link>
            </li>

            <li
              className=" p-1 flex items-center gap-x-1 "
              onClick={() => setToggle(!toggle)}
            >
              <BiLogIn className="inline-block" />
              Login
            </li>
          </ul>
        </div>
      </div>
      {toggle ? <Login /> : null}
    </>
  );
};

export default Header;
