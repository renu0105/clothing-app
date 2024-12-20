"use client";
import { useRouter } from "next/navigation";
import NewArrival from "../../components/NewArrivalProduct";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-backgroundImage lg:h-[500px] h-[310px] w-screen bg-no-repeat bg-cover relative top-0 z-[-10] flex justify-center flex-col items-end gap-6 px-16">
        <h1 className=" font-bold text-5xl ">Winter Collection</h1>
        <button
          className="cursor-pointer bg-black text-white w-44 p-3"
          type="button"
          onClick={() => router.push("/products")}
          aria-label="Discover more products"
        >
          Discover more
        </button>
      </div>
      <NewArrival />
    </div>
  );
};
export default Home;
