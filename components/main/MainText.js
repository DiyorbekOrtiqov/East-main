import React from "react";
import ProjectsBtn from "../ProjectsBtn";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const MainText = () => {
  return (
    <div className="pt-32">
      <motion.h1
        variants={fadeIn("down", 0.7)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1 "
      >
        Lorem ipsum dolor <br />{" "}
        <span className="text-orange-600/90">Inventore, ipsam facilis?</span>
      </motion.h1>
      {/* for h1  body or commets */}
      <motion.p
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam
        quod sint excepturi quos dolores necessitatibus perferendis, sequi nemo
        veritatis iusto corrupti accusantium delectus commodi nam officia
        blanditiis molestiae quas? Illo, repudiandae est error deleniti vel
        velit nulla bland aperiam itaque repudiandae dignissimos eius maiores
        nam obcaecati magnam mollitia aliquam totam perferendis, aut modi
        explicabo rem similique? Ad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam
        quod sint excepturi quos dolores necessitatibus perferendis, sequi nemo
        veritatis iusto corrupti accusantium delectus commodi nam officia
        blanditiis molestiae quas? Illo, repudiandae est error deleniti vel
        velit nulla bland aperiam itaque repudiandae dignissimos eius maiores
        nam obcaecati magnam mollitia aliquam totam perferendis, aut modi
        explicabo rem similique? Ad.
        
        
        
      </motion.p>
      {/* Button */}
      <div>
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default MainText;
