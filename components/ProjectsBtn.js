import { useRouter } from "next/router";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/work");
  };

  return (
    <div className="mx-auto xl:mx-0">
      <div
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10"
        onClick={handleClick}
      >
        <img
          src="/scroll.png"
          width={141}
          height={148}
          alt="In this photo it is written our successes"
          className="animate-spin-slow w-full h-full max-w-[160px] max-h-[160px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </div>
    </div>
  );
};

export default ProjectsBtn;