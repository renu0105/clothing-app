"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchedData } from "../lib/ProductAction";
import Link from "next/link";

const ProductItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedItems = async () => {
      const data = await fetchedData();
      setItems(data);
    };
    fetchedItems();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {items.length > 0 ? (
        <div className="flex flex-wrap gap-4" key={items.id}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Link href={`/product/${item.slug}`}>
                <div className="h-64 w-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={800}
                    className=" h-64 w-[100%] object-cover"
                  />
                </div>
                <h2>{item.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>No Products Found</div>
      )}
    </div>
  );
};
export default ProductItems;
