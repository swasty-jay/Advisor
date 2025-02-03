import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Info() {
  return (
    <>
      <LazyLoadComponent>
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-12 bg-gray-100">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-semibold">Welcome to Advisor</h2>
            <p className="text-gray-600">
              We have over 15 years of experience Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean Lorem ipsum dolor sit the
              power of labore.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              bibendum nec risus et suscipit Curabitur metus ipsum.
            </p>
            <button className="mt-4 border-2 border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
              READ MORE
            </button>
          </div>

          {/* Right Image Section with Lazy Loading */}
          <div className="relative md:w-1/2 mt-6 md:mt-0 ml-2 md:ml-12">
            <LazyLoadImage
              src="/src/assets/bg.jpg"
              alt="Advisor"
              effect="blur"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </LazyLoadComponent>
    </>
  );
}

export default Info;
