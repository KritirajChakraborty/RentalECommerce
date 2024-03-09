import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import wardrobe from "/wardrobe.jpg";
import { useContext } from "react";
import { MobileMenuContext } from "../store/context";

const Banner = () => {
  const { state } = useContext(MobileMenuContext);
  return (
    <div
      className={`bg-primaryBG max-w-screen-2xl pt-10 mx-auto md:px-28 px-4 ${
        state ? "mt-48" : ""
      }`}
    >
      <div className="py-28 flex flex-col sm:flex-row-reverse gap-14 justify-between items-center">
        <div className="md:w-1/2">
          <img
            src={wardrobe}
            alt="Photo"
            className="mx-auto h-full w-full md:h-[562px] md:w-[442px] rounded-md"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h2 className="text-Black font-light text-5xl mb-5">Collections</h2>
          <p className="pt-2 text-Black text-xl mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            alias qui deleniti cumque asperiores repudiandae maiores deserunt
            neque magnam officiis!
          </p>
          <Link to="/shop">
            <button className="flex items-center gap-2 border-none bg-Black text-white font-primary px-4 py-2 mt-2 hover:bg-orange-500">
              <FaShoppingBag className="inline-flex" /> Shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
