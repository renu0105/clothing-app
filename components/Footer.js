import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white absolute bottom-0 w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">SnowStyle</h1>
      <div className="flex flex-row text-5xl gap-6 my-5">
        <Link href={"/"}>
          <FaInstagram />
        </Link>
        <Link href={"/"}>
          <IoMdMail />
        </Link>
        <Link href={"/"}>
          <FaTwitter />
        </Link>
        <Link href={"/"}>
          <FaFacebookSquare />
        </Link>
      </div>

      <div>
        <h1>Terms & Conditions</h1>
      </div>

      <div className="flex flex-row justify-between text-sm text-gray-400">
        <p>Copyright © 2024 SnowStyle</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
