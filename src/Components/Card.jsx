import { useState } from "react";

function Card() {
  const [activeId, setActiveId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { id: 1, title: "Money Care", desc: "Finding your Next Advisor" },
    { id: 2, title: "Friendly Assistance", desc: "Expert Financial Advice" },
    { id: 3, title: "Our Experience", desc: "We have 15 Years Experience" },
    { id: 4, title: "Client Investment", desc: "Doing the right thing" },
  ];

  // Pagination logic
  const itemsPerPage = 1; // Show 1 card per page on small screens
  const pages = Math.ceil(data.length / itemsPerPage);

  // const currentData = data.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  return (
    <div>
      {/* Cards for large screens */}
      <div className="hidden md:grid grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-6 md:px-10 py-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`flex flex-col items-start p-4 sm:p-6 border border-gray-100 cursor-pointer transition ${
              activeId === item.id
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold ${
                activeId === item.id
                  ? "bg-white text-green-500"
                  : "bg-green-500 text-white"
              }`}
            >
              {item.id}
            </div>
            <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pagination for medium and small screens */}
      <div className="md:hidden flex justify-center items-center gap-4 py-4">
        {Array.from({ length: pages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              currentPage === index + 1
                ? "bg-green-500 text-white"
                : "bg-white text-green-500 border border-green-500"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Cards for small screens */}
      {/* <div className="lg:hidden grid grid-cols-1 gap-4 px-4 sm:px-6 md:px-10 py-6">
        {currentData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`flex flex-col items-start p-4 sm:p-6 border border-gray-100 cursor-pointer transition ${
              activeId === item.id
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold ${
                activeId === item.id
                  ? "bg-white text-green-500"
                  : "bg-green-500 text-white"
              }`}
            >
              {item.id}
            </div>
            <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Card;
