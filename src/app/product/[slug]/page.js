"use client";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);

  const unwrapParams = React.use(params); // Unwrap params
  const { slug } = unwrapParams;

  const fetchedProduct = useCallback(async () => {
    const res = await axios.get("/api/products", {
      params: { slug: `/${slug}` },
    });

    console.log("res", res);
    setProduct(res.data);
  }, [slug]);

  useEffect(() => {
    fetchedProduct();
  }, [fetchedProduct]);

  const handleCart = () => {};

  return (
    <div className="">
      {product && (
        <div className="flex flex-row gap-10 lg:gap-20 my-8 text-xl">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            className="lg:w-[700px] w-[300px] lg:h-[600px] object-cover"
          />
          <div className="flex flex-col gap-6 lg:w-[70%]">
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <h2 className="text-xl text-red-700">₹{product.price}</h2>
            <p>{product.description}</p>
            <p className="border border-gray-400 p-3 w-20 text-center">
              {product.quantity || 0}
            </p>
            <button
              className="text-white bg-green-400 p-3 w-44 font-semibold"
              onClick={handleCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
