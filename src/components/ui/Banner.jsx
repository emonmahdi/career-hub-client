// import React from "react";
// import { motion } from "motion/react"
// import team1 from "../../assets/team1.jpg";
// import team2 from "../../assets/team2.jpg";

// const Banner = () => {
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
//         <div className="flex-1">
//           <motion.img
//             animate={{ y: [0, 70, 0] }}
//             transition={{ duration: 5, repeat: Infinity }}
//             src={team1}
//             className="border-l-12 border-b-12 border-blue-600 rounded-t-3xl max-w-sm  shadow-2xl"
//           />
//           <motion.img
//             animate={{ x: [100, 170, 100] }}
//             transition={{ duration: 7, repeat: Infinity, delay: 1 }}
//             src={team2}
//             className="border-l-12 border-b-12 border-blue-600 rounded-t-3xl max-w-sm  shadow-2xl"
//           />
//         </div>
//         <div className="flex-1">
//           <motion.h1
//             animate={{
//               rotate: 360,
//               transition: { duration: 1 },
//             }}
//             className="text-5xl font-bold"
//           >
//             Your future{" "}
//             <motion.span
//               animate={{
//                 color: ["#22c55e", "#3b82f6", "#f97316", "#ec4899"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//               className="inline-block"
//             >
//               Job
//             </motion.span>{" "}
//             Here!
//           </motion.h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center text-white">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-5"
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Find Your <span className="text-yellow-300">Dream Job</span> Today
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Discover limitless career opportunities, connect with top companies,
            and grow professionally. JOBES helps you build your future—your way.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Explore Jobs
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-teal-700 transition">
              Upload Resume
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative mt-10 lg:mt-0 flex justify-center"
        >
          <motion.img
            src={team1}
            className="rounded-xl shadow-2xl w-72 lg:w-96 border-4 border-white"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.img
            src={team2}
            className="rounded-xl shadow-2xl w-56 lg:w-80 border-4 border-white absolute -bottom-10 -left-10 hidden lg:block"
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
