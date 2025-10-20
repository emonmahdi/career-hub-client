import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaBriefcase, FaBuilding, FaUserTie, FaStar } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Jacoline Franklyn",
    role: "UI/UX Engineer",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
  },
  {
    name: "David Wilson",
    role: "React Developer",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    message:
      "This platform helped me connect with the right companies. The hiring process was smooth and transparent.",
  },
  {
    name: "Sophia Johnson",
    role: "Software Engineer",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    message:
      "A great platform with helpful resources. Highly recommended for job seekers!",
  },
];

const stats = [
  { icon: <FaBriefcase size={28} />, label: "Live Jobs", value: "20,223" },
  { icon: <FaBuilding size={28} />, label: "Companies", value: "803+" },
  { icon: <FaUserTie size={28} />, label: "Candidates", value: "500+" },
  { icon: <GiPlantRoots size={28} />, label: "New Jobs", value: "120+" },
];

const UserFeedback = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          Our Users <span className="text-teal-600">Feedback</span>
        </h2>
        <p className="text-gray-600 mb-10">
          To choose your trending job dream & to make future bright.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 text-center bg-white rounded-lg shadow-md border border-teal-100"
              >
                <div className="flex items-center justify-center text-teal-500 mb-3">
                  {item.icon}
                </div>

                <p className="text-lg font-semibold">{item.label}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">
                  {item.value}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Slider */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg relative"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[current].img}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-teal-500"
              />
              <div>
                <h4 className="font-bold text-gray-800">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-6">
              "{testimonials[current].message}"
            </p>
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar
                  key={idx}
                  className={`${
                    idx < Math.round(testimonials[current].rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 border rounded-full hover:bg-teal-500 hover:text-white transition"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 border rounded-full hover:bg-teal-500 hover:text-white transition"
              >
                <FiChevronRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
