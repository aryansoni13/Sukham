import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";

const StarRating = () => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Akash Singh",
      review:
        "We have enjoyed a lot, it was good experience wild life treking was, overall its was good experience..Thanks for everything.",
    },
    {
      name: "Mohit Kumar Dubey",
      review:
        "My all time favourite. Excellent food. Outstanding view. Best in class location.",
    },
    {
      name: "Rohan Singh",
      review:
        "The location of the resort is awesome. Whether is good. Will surely refer to my friends!",
    },
    {
      name: "Sourabh Kumar Gupta",
      review:
        "Nice property, good amenities & courteous staff, had a lovely stay.!",
    },
    {
      name: "Suman Kumar",
      review:
        "It was an wonderful experience to holiday at sukham resorts, staff at receiption, restaurant, housekeeping all are polite, thank you to team of sukham resorts..",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">
          What Our Guests Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-serif text-gray-600">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {testimonial.name}
                      </h3>
                      <div className="flex justify-center mb-4">
                        <StarRating />
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
