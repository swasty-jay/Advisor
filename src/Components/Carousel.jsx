import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";

const slides = [
  {
    id: 2,
    title: "Investment Planning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.",
    img: "/src/assets/bg.jpg",
  },
];

const sections = [
  {
    id: 3,
    title: "Retirement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.",
    img: "/src/assets/bg.jpg",
    imgFirst: true, // Image on the right
  },
  {
    id: 4,
    title: "Wealth Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore. Love life’s sweetest reward Let it flow it floats back to you.",
    img: "/src/assets/bg.jpg",
    imgFirst: true, // Image on the right
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Combine sections and slides into one array
  const allContent = [...sections, ...slides];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className=" text-center py-12 grid grid-cols-1">
        <h1 className="font-bold text-5xl   text-green-600">
          WHY OUR CONSULTING?
        </h1>
        <br />
        <p className="text-gray-600 font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          recusandae iure molestias.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-12 space-y-12">
        {/* All content (sections + slides) */}
        <div className="w-full">
          {allContent.map(
            (content, index) =>
              activeIndex === index && (
                <div
                  key={content.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 max-w-6xl items-center"
                >
                  {content.imgFirst ? (
                    <>
                      <LazyLoadImage
                        src={content.img}
                        alt={content.title}
                        effect="blur"
                        className="w-full rounded-lg shadow-lg"
                      />
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold">
                          {content.title}
                        </h2>
                        <p className="text-gray-600 mt-3">
                          {content.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold">
                          {content.title}
                        </h2>
                        <p className="text-gray-600 mt-3">
                          {content.description}
                        </p>
                      </div>
                      <LazyLoadImage
                        src={content.img}
                        alt={content.title}
                        effect="blur"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </>
                  )}
                </div>
              )
          )}
        </div>

        {/* Carousel Dots */}
        <div className="flex space-x-2">
          {allContent.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
