import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "./Button";
import Card from "./Card";
import Info from "../Pages/Info";
import Carousel from "./Carousel";

function HomePage() {
  return (
    <>
      <LazyLoadComponent>
        <div
          className="relative w-full h-screen flex items-center px-6 md:px-20"
          style={{
            backgroundImage: "url('/src/assets/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content Section */}
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold text-white">
              Money Doesn’t Come
              <span className="text-green-500 pl-2">Without Care</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              Finding your next Financial Advisor is as easy as counting from
              one to five.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <Link to={"/contact"}>
                <Button className="text-black">CONTACT US</Button>
              </Link>
            </div>
          </div>
        </div>
      </LazyLoadComponent>

      <Card />
      <Info />
      <Carousel />
    </>
  );
}

export default HomePage;
