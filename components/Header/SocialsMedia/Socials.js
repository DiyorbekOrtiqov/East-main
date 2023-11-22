
import Link from "next/link";

import {RiYoutubeLine,
        RiInstagramLine,
        RiTelegramLine,
        RiFacebookCircleFill
} from 'react-icons/ri'


const Socials = () => {
  return <div className=" flex items-center gap-x-5 text-xl sms:pt-11  lg:text-3xl md:text-2xl sm:text-[30px] sms:text-[28px] sms:-mr-14 xl:mr-0 sms:-mt-10 sm:pt-14 xl:pt-5">

    <Link href="https://www.youtube.com/" target="_blank"  className="hover:text-accent transition-all duration-300"   >
      <RiYoutubeLine />
    </Link>
    <Link href={"https://t.me/eastacademyoquvmarkazi"} target="_blank" className=" hover:text-accent transition-all duration-300 ">
      <RiTelegramLine/>
    </Link>
    <Link href={"https://www.instagram.com/"} target="_blank" className=" hover:text-accent transition-all duration-300 ">
      <RiInstagramLine/>
    </Link>
    <Link href={"https://www.facebook.com/"} target="_blank" className=" hover:text-accent transition-all duration-300 ">
      <RiFacebookCircleFill/>
    </Link>
     </div>;
};

export default Socials;
