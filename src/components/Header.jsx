import React, { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { MdFavorite, MdLocationOn } from "react-icons/md";
import { BiLogIn} from "react-icons/bi";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
   
      <div className="header bg-blue-500 p-4 text-white">

        <div className=" max-w-[1640px] mx-auto flex justify-between items-center ">
   
          <div className="logo font-bold text-4xl tracking-widest">
            Add to Favorite
          </div>
     
          <ul className="flex gap-16 items-center text-xl hover:cursor-pointer">
        
            <li className="p-1 flex items-center gap-x-2 ">
            <Link to={"/"} className="flex items-center gap-x-2">
              <AiTwotoneHome className="" />
              Home</Link>
            </li>
           
            <li className=" p-1 flex items-center gap-x-2 ">
              <MdLocationOn className=" inline-block " /> Location
            </li>
          
            <li className=" p-1  ">
            <Link to={"/fav"} className="flex items-center gap-x-2">
              <MdFavorite className=" inline-block" />
                Favourite
              </Link>
            </li>
     
            <li className=" p-1 flex items-center gap-x-2 ">
              <TfiGallery className="inline-block" />
              Gallery
            </li>
     
            <li className=" p-1 flex items-center gap-x-2 " onClick={() => setToggle(!toggle)}>
              <BiLogIn className="inline-block" />
              Login
            </li>
       
          </ul>
        </div>
   
      </div>
      {
        toggle ?
        <Login/>
        :null

      }
     
    </>
  );
};

export default Header;
