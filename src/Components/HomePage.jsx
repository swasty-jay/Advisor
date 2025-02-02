import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import Info from "../Pages/Info";

function HomePage() {
  return (
    <>
      <div className="relative w-full h-screen bg-[url('/src/assets/hero.jpg')] bg-cover bg-center flex items-center px-10 md:px-20">
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Section */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            Money Doesn’t Come{" "}
            <span className="text-green-500">Without Care</span>
          </h1>
          <p className="text-lg text-gray-200 mt-4">
            Finding your next Financial Advisor is as easy as counting from one
            to five.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            {/* <Link to={"/about"}>
              <Button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600">
                READ MORE
              </Button>
            </Link> */}

            <Link to={"/contact"}>
              <Button className="text-black">CONTACT US</Button>
            </Link>
          </div>
        </div>
      </div>

      <Card />
      <Info />
    </>
  );
}

export default HomePage;
