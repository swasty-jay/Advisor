import { useState } from "react";

function Card() {
  const [activeId, setActiveId] = useState(1);

  const data = [
    { id: 1, title: "Money Care", desc: "Finding your Next Advisor" },
    { id: 2, title: "Friendly Assistance", desc: "Expert Financial Advice" },
    { id: 3, title: "Our Experience", desc: "We have 15 Years Experience" },
    { id: 4, title: "Client Investment", desc: "Doing the right thing" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-6 md:px-10 py-6">
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
  );
}

export default Card;
