import Image from "next/image";


const Avatar = () => {
  return <div className=" hidden xl:flex xl:max-w-none ">
    <Image src={'/person.webp'} width={730} height={678} alt="Senior Teacher  " className=" translate-z-0 w-full h-full" />
  </div>;
};

export default Avatar;