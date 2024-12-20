"use client";
import { useEffect, useState } from "react";
import { fetchedData } from "../lib/ProductAction";
import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchedData();
        console.log(data);

        const newArrival = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
        setItems(newArrival);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-4">New Arrival</h1>
      {items.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Link href={`/product/${item.slug}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={800}
                  className="h-64 w-56 object-cover"
                />
                <h2>{item.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        "No Products Found"
      )}
    </div>
  );
};
export default NewArrival;
