"use client";
import React from "react";
import { TiStar } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import { TbEngine } from "react-icons/tb";
import Footer from "../../components/Footer";
import Link from "next/link";
import { SearchPanelWrapper } from "../../components/Booking/search-panel-wrapper";

interface Icard {
  photo: string;
  model: string;
  rating: number;
  rate: number;
  type: string;
  gear: string;
  price: number;
}

const cars = () => {
  const carCategories: Icard[] = [
    {
      photo:
        "https://res.cloudinary.com/dejgthlwx/image/upload/c_limit,w_384/f_auto/q_auto/v1/carhive/cars/hatchback_hawhtv?_a=BAVAfVDW0",
      model: "Hatchback Basic",
      rating: 4.1,
      rate: 150,
      type: "Hybrid",
      gear: "Automatic",
      price: 46,
    },
    {
      photo: "https://ik.imagekit.io/joel/audia1.jpg?updatedAt=1697711751386",
      model: "SUV Audi A4",
      rating: 4.7,
      rate: 180,
      type: "Gasoline",
      gear: "Automatic",
      price: 55,
    },
    {
      photo: "https://ik.imagekit.io/joel/benz.jpg?updatedAt=1697711751259",
      model: "Mercedes-Benz",
      rating: 5,
      rate: 210,
      type: "Gasoline",
      gear: "Automatic",
      price: 97,
    },
    {
      photo: "https://ik.imagekit.io/joel/bmw320.jpg?updatedAt=1697711609015",
      model: "BMW 320",
      rating: 4.4,
      rate: 140,
      type: "Diesel",
      gear: "Manuel",
      price: 80,
    },
    {
      photo: "https://ik.imagekit.io/joel/hilux.jpg?updatedAt=1697712037718",
      model: "Toyota Hilux",
      rating: 4.7,
      rate: 199,
      type: "Diesel",
      gear: "Automatic",
      price: 60,
    },
    {
      photo:
        "https://ik.imagekit.io/joel/toyotacamry.jpg?updatedAt=1697711886811",
      model: "Toyota Passo",
      rating: 4.1,
      rate: 125,
      type: "Hybrid",
      gear: "Automatic",
      price: 30,
    },
    {
      photo:
        "https://ik.imagekit.io/joel/toyotacamry.jpg?updatedAt=1697711886811",
      model: "Toyota Passo",
      rating: 4.1,
      rate: 125,
      type: "Gasoline",
      gear: "Automatic",
      price: 30,
    },
    {
      photo: "https://ik.imagekit.io/joel/audia1.jpg?updatedAt=1697711751386",
      model: "SUV Audi A4",
      rating: 4.7,
      rate: 180,
      type: "Gasoline",
      gear: "Automatic",
      price: 55,
    },
    {
      photo:
        "https://res.cloudinary.com/dejgthlwx/image/upload/c_limit,w_384/f_auto/q_auto/v1/carhive/cars/hatchback_hawhtv?_a=BAVAfVDW0",
      model: "Hatchback Basic",
      rating: 4.1,
      rate: 150,
      type: "Hybrid",
      gear: "Automatic",
      price: 46,
    },

    {
      photo: "https://ik.imagekit.io/joel/bmw320.jpg?updatedAt=1697711609015",
      model: "BMW 320",
      rating: 4.4,
      rate: 140,
      type: "Diesel",
      gear: "Manuel",
      price: 80,
    },
    {
      photo: "https://ik.imagekit.io/joel/hilux.jpg?updatedAt=1697712037718",
      model: "Toyota Hilux",
      rating: 4.7,
      rate: 199,
      type: "Diesel",
      gear: "Automatic",
      price: 60,
    },

    {
      photo: "https://ik.imagekit.io/joel/benz.jpg?updatedAt=1697711751259",
      model: "Mercedes-Benz",
      rating: 5,
      rate: 210,
      type: "Gasoline",
      gear: "Automatic",
      price: 97,
    },
    {
      photo:
        "https://res.cloudinary.com/dejgthlwx/image/upload/c_limit,w_384/f_auto/q_auto/v1/carhive/cars/hatchback_hawhtv?_a=BAVAfVDW0",
      model: "Hatchback Basic",
      rating: 4.1,
      rate: 150,
      type: "Hybrid",
      gear: "Automatic",
      price: 46,
    },
    {
      photo: "https://ik.imagekit.io/joel/audia1.jpg?updatedAt=1697711751386",
      model: "SUV Audi A4",
      rating: 4.7,
      rate: 180,
      type: "Gasoline",
      gear: "Automatic",
      price: 55,
    },
    {
      photo: "https://ik.imagekit.io/joel/benz.jpg?updatedAt=1697711751259",
      model: "Mercedes-Benz",
      rating: 5,
      rate: 210,
      type: "Gasoline",
      gear: "Automatic",
      price: 97,
    },
    {
      photo: "https://ik.imagekit.io/joel/bmw320.jpg?updatedAt=1697711609015",
      model: "BMW 320",
      rating: 4.4,
      rate: 140,
      type: "Diesel",
      gear: "Manuel",
      price: 80,
    },
    {
      photo: "https://ik.imagekit.io/joel/hilux.jpg?updatedAt=1697712037718",
      model: "Toyota Hilux",
      rating: 4.7,
      rate: 199,
      type: "Diesel",
      gear: "Automatic",
      price: 60,
    },
    {
      photo:
        "https://ik.imagekit.io/joel/toyotacamry.jpg?updatedAt=1697711886811",
      model: "Toyota Passo",
      rating: 4.1,
      rate: 125,
      type: "Gasoline",
      gear: "Automatic",
      price: 30,
    },
  ];

  return (
    <div>
      <div className="w-9/12 mx-auto mt-28">
        <SearchPanelWrapper />
        <div className="w-full mt-20 grid grid-cols-3 gap-12">
          {carCategories.map((category, index) => {
            return (
              <Card
                key={index}
                photo={category.photo}
                model={category.model}
                rating={category.rating}
                rate={category.rate}
                type={category.type}
                gear={category.gear}
                price={category.price}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default cars;

const Card = ({
  photo,
  model,
  rating,
  rate,
  type,
  gear,
  price,
}: Icard): JSX.Element => {
  return (
    <div className="w-full flex flex-col border-[1px] border-gray-300 rounded-md">
      <div>
        <img src={photo} alt="" className="rounded-tr-md rounded-tl-md" />
      </div>
      <div className="p-7 space-y-6">
        <div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center space-x-2">
              <p>
                <FaCar />
              </p>
              <p>{model}</p>
            </div>
            <p className="flex flex-row items-center space-x-1 text-sm">
              <span>
                <TiStar className="text-lg text-yellow-400 mx-1" />
              </span>
              {rating}
              <span className="text-gray-400">({rate})</span>
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <p>
              <TbEngine className="text-gray-400" />
            </p>
            <p className="text-sm text-gray-400">{type}</p>
          </div>
          <div className="flex flex-row space-x-2">
            {" "}
            <p>
              <IoMdGitNetwork className="text-gray-400" />
            </p>
            <p className="text-sm text-gray-400">{gear}</p>
          </div>

          <p className="font-bold mt-1">
            ${price}{" "}
            <span className="font-normal text-gray-700 text-sm">/day</span>
          </p>
        </div>
        <div className="w-full border-[1px] border-gray-300 p-1 hover:bg-black hover:text-white duration-300 ease-in-out rounded-md text-center">
          <Link href="/details" className="">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
