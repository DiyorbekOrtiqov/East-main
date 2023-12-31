import Image from "next/image";
import { motion } from "framer-motion";

// Coll Components
import ParticlesContainer from "../ParticlesContainer";
import ProjectsBtn from "../ProjectsBtn";
import Avatar from "../Avatar/Avatar";
import MainText from "./MainText";
// variants
import { fadeIn } from "../../variants";

const main = () => {
  return (
    <div className="bg-primary/60  heightPlas relative">
      <ParticlesContainer />
      {/* text  */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 overflow-y-auto">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto sms:pt-[100px] sm:pt-9">
          <MainText />
           
        </div>
      </div>
      <div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bagrountte img  or head acher img */}
          <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          {/* avatar img  */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-[30%] lg:right-[0%] xl:right-0"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default main;