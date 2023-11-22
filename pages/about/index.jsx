import Particles from "react-tsparticles";
import ParticlesContainer from "../../components/ParticlesContainer";
import Link from "next/link";
import classes from "./css/Button.module.css";
import Image from "next/image";
import Card from "./Card";
import Swiper from "./swipper";

const About = () => {
  return (
    <div>
      <div className=" sms:m-4 sms:mt-52 sms:w-full sm:w-full sm:p-5 flex sms:flex-col sm::flex-col sm:flex-row-reverse justify-center  ">
        <div className="flex justify-center w-full h-full ">
          <Image
            className="responsive  "
            src="/person.webp"
            width={500}
            height={500}
            alt="Picture of the author"
            classes
          />
        </div>
        <div className="">
          <h2
            className="sm:pt-20 sms:p-5 sm:p-0    w-[70%] sms:w-[100%] sm:w-[70%]  lg:w-auto   sms:pr-12 h-auto text-teal-700 font-serif"
            style={{ fontSize: "35px", fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h2>
          <p
            className="sm:-pt-20 sms:p-5 w-[70%] sms:w-[100%] sm:w-[70%] lg:w-auto  sms:pr-12 h-auto"
            style={{ fontWeight: "bold", color: "teal" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
            neque id aliquam magni facilis temporibus vel voluptatum vero!
            Voluptate quis, beatae delectus est quasi omnis sed reiciendis nemo
            voluptas.
          </p>
        </div>
      </div>
      <div className="text-center ">
        <div>
          <div className="mt-24">
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
            <p className="pl-36 pr-36">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              optio eum magni laudantium aspernatur nam rerum et eveniet
              assumenda quis aliquid iusto pariatur porro voluptates alias, ab
              enim ipsa. Itaque!
            </p>
          </div>
          <h2
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="mt-10"
          >
            Location
          </h2>
          <Card />
        </div>
      </div>
      {/* some text is written */}
      <div className="pl-36 pr-36 text-center mt-24" style={{ fontSize: "20px", fontWeight: "bold" }} >
        <h2 className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed, fugit aut expedita suscipit laudantium nulla reiciendis deserunt sapiente inventore maxime odio quidem et natus eaque veniam, id quisquam placeat.
        </h2>
        <p className="mt-5 text-emerald-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident perferendis atque nulla voluptatem ipsum.
        </p>
      </div>
      <Swiper/>
    </div>
  );
};

export default About;
