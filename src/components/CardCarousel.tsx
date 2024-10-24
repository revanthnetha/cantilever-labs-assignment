import { useState } from "react";
import CreditCard from "./CreditCard";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const creditCards = [<CreditCard />, <CreditCard />, <CreditCard />];

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? creditCards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === creditCards.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative mb-6 border-r p-4 md:pr-10 pr-4 h-[70%]">
      <div className=" sm:w-[320.43px] md:h-[206.17px] w-[240px] h-[180px] overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {creditCards.map((card, index) => (
            <div
              className=" sm:w-[320.43px] md:h-[206.17px] w-[240px] h-[180px]"
              key={index}
            >
              {card}
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-24 left-[-15px] md:left-[-20px] transform -translate-y-1/2  text-blue-600 hover:cursor-pointer p-2 rounded-full focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-24 right-[-15px] md:right-0 transform -translate-y-1/2 text-blue-500 hover:cursor-pointer p-2 rounded-full focus:outline-none"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
