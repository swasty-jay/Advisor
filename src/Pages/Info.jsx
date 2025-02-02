function Info() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-12 bg-gray-100">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl font-semibold">Welcome to Advisor</h2>
        <p className="text-gray-600">
          We have over 15 years of experience Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean Lorem ipsum dolor sit the power of
          consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut
          labore.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          bibendum nec risus et suscipit Curabitur metus ipsum.
        </p>
        <button className="mt-4 border-2 border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
          READ MORE
        </button>
      </div>

      {/* Right Image with Play Button */}
      <div className="relative md:w-1/2 mt-6 md:mt-0">
        <img
          src="/path-to-your-image.jpg"
          alt="Advisor"
          className="rounded-lg shadow-lg"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-75 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl">
            ▶
          </div>
        </button>
      </div>
    </section>
  );
}

export default Info;
