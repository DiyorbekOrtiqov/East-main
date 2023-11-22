

import Image from "next/image";
import Link from "next/link";
import Socials from "./SocialsMedia/Socials";


const Header = () => {
  return (
    <header className=" absolute z-30 w-full flex px-16 xl:px-0 sms:h-[125px] xl:h-[130px] xl:pt-10 -blur bg-white/20 ">
      <div className=" container mx-auto ">
        <div className=" flex justify-between  gap-y-6 py-8 sms:-ml-12 sm:ml-0">
          <Link href={"/"}>
            <Image className=" absolute top-0 sms:-mt-5 "
              src="/EastAcademyLogo.png"
              width={120}
              height={40}
              alt="here is the east academy logo"
              priority={true}
            />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
