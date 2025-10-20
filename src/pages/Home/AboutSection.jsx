import React from "react";
import { FaShieldAlt, FaCheckCircle, FaMoneyCheckAlt } from "react-icons/fa";
import { motion } from "motion/react";

const AboutSection = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Highly Secured",
      desc: "Your account and data are always safe with our strong security system.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Authentic Source",
      desc: "We verify every job post to ensure trusted opportunities.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Cost Effective",
      desc: "Job seekers can access most features free of cost.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
        >
          To Know <span className="text-teal-500">About JOBES</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-xl mx-auto md:mx-0 text-center md:text-left"
        >
          Get valuable feedback from our trusted users worldwide. Explore
          real job opportunities securely and confidently.
        </motion.p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Features */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex items-start gap-4 group p-4 rounded-xl hover:shadow-lg transition-shadow bg-white"
              >
                <div className="text-teal-500 text-3xl flex-shrink-0 group-hover:scale-110 transform transition duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg group-hover:text-teal-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Images */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg"
                alt="team"
                className="rounded-xl shadow-2xl w-80 md:w-96 transform hover:-translate-y-2 hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="discussion"
                className="absolute top-16 -right-16 rounded-xl shadow-2xl w-64 transform hover:translate-y-2 hover:scale-105 transition duration-500 hidden md:block"
              />
            </motion.div>
          </div>
        </div>

        {/* Extra Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center lg:justify-end"
        >
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-teal-100 to-teal-50 shadow-xl rounded-xl max-w-md hover:scale-105 transform transition duration-500">
            <div className="text-teal-600">
              <FaCheckCircle size={40} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Best Quality For Jobs Site</h4>
              <p className="text-gray-600 text-sm">
                Helping you discover genuine job opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
