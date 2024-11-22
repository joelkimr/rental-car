/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";

const Details = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto mt-28">
        <div className="w-full flex flex-row gap-6">
          <div className="">
            <Image
              src="https://ik.imagekit.io/joel/3-Audi-A3-2024-UK-review.jpg?updatedAt=1731054850578"
              alt="Interior"
              className="rounded-tl-2xl"
              width={1000}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-7">
            <Image
              src="https://ik.imagekit.io/joel/interior_audi.jpg?updatedAt=1731914079448"
              alt="nterior"
              className="rounded-tr-2xl"
              width={300}
              height={300}
            />
            <Image
              src="https://ik.imagekit.io/joel/chair_audi.jpg?updatedAt=1731914080072"
              alt="interior"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
