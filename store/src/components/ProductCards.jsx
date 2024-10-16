import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { AiFillHeart } from "react-icons/ai";

const ProductCards = (props) => {
  const { fav, addToFav } = useContext(AppContext);
  console.log("fav are ", fav);

  return (
    <>
      {/* <div className="border drop-shadow-2xl mt-20  max-w-[400px] h-[600px] mx-auto fixed">
        <div className="p-10 flex flex-col justify-center items-center ">
          <div className="image w-[200px] overflow-hidden ">
            <img src={props.Pic} alt="" className="hover:scale-110" />
          </div>
          <div className="body pt-5 ">
            <p className="title pt-5 text-2xl font-bold">{props.Title}</p>
            <p className="price pt-5 text-xl">{props.Price}$</p>
            <p class="description text-justify mt-5 h-[100px] overflow-hidden">
              {props.des}
            </p>

            <button
              className="border rounded mt-5 font-bold p-3 bg-blue-500 flex items-center gap-1"
              onClick={() => {
                addToFav(props);
              }}
            >
              <icon className="text-red-700 ">
                <AiFillHeart />
              </icon>
              Add to fav
            </button>
          </div>
        </div>
      </div> */}

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={props.Pic}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.Title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
          {props.des}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              addToFav(props);
            }}
         >
            <icon className="text-red-700 ">
                <AiFillHeart />
              </icon>
          
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
