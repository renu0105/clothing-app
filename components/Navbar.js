import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between my-3">
      <div className="flex flex-row gap-6 items-center">
        <Link href={"/"} className="font-bold text-3xl">
          SnowStyle
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Products</Link>
      </div>
      <div className="flex flex-row gap-6 text-2xl items-center">
        <IoSearch />
        <CiUser />
        <FaShoppingCart />
      </div>
    </div>
  );
};
export default Navbar;
