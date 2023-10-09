"use client";
import { ReviewCard } from "@/components";
import { Reviews } from "@/public/assets/info";
import { useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevslide = () => {
    setCurrent((current - 1 + Reviews.length) % Reviews.length);
  };

  const nextslide = () => {
    setCurrent((current + 1) % Reviews.length);
  };

  const getPreviousIndex = () => {
    return (current - 1 + Reviews.length) % Reviews.length;
  };

  const getNextIndex = () => {
    return (current + 1) % Reviews.length;
  };

  return (
    <div className="w-4/5 mx-auto mt-8">
      <h1>Testimonials</h1>

      <div className="flex justify-between items-center gap-4">
        <div className="cursor-pointer text-2xl" onClick={prevslide}>
          &#10094;
        </div>

        <div className="flex gap-11 justify-center items-center mt-20 mb-5">
          <div className="opacity-50 scale-75" onClick={prevslide}>
            <ReviewCard review={Reviews[getPreviousIndex()]} />
          </div>

          <div className="opacity-100">
            <ReviewCard review={Reviews[current]} />
          </div>

          <div className="opacity-50 scale-75" onClick={nextslide}>
            <ReviewCard review={Reviews[getNextIndex()]} />
          </div>
        </div>

        <div className="cursor-pointer text-2xl" onClick={nextslide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
