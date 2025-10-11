import React from "react";
import { motion } from "motion/react"
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 70, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            className="border-l-12 border-b-12 border-blue-600 rounded-t-3xl max-w-sm  shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 170, 100] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            src={team2}
            className="border-l-12 border-b-12 border-blue-600 rounded-t-3xl max-w-sm  shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              rotate: 360,
              transition: { duration: 1 },
            }}
            className="text-5xl font-bold"
          >
            Your future{" "}
            <motion.span
              animate={{
                color: ["#22c55e", "#3b82f6", "#f97316", "#ec4899"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              Job
            </motion.span>{" "}
            Here!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
