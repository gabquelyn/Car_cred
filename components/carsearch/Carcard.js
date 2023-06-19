"use client"
import Image from "next/image";
import Link from "next/link";

const CarCard = () => {

  return (
    <>
        <div className="bg-blue-500 p-4">
            <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/cardetails" className="block  w-full">
                    {/* <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">Like</span> */}
                    <img className="rounded-t-lg" src="/assets/cars/18.jpg" alt="" />

                </a>
                <div className="p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-blue-500">
                            <h3 className="mb-4 block text-sm font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-sm">2011 Toyota Corolla SE</h3>
                            <p className="mb-1 text-sm font-medium text-dark dark:text-white">Sports / 19,000 miles</p>
                        </div>
                        <div className=" text-right">
                            <h3 className="mb-2 block text-xl font-bold text-black dark:text-white sm:text-xl">$6500</h3>
                            <p className="mb-1 text-sm font-medium text-dark dark:text-white">Est. $200 / Bi-weekly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default CarCard;
