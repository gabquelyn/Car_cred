import Image from "next/image";
import React from 'react';



const Feature = () => {

  return (
    <div
      className="bg-white-300 max-w-screen-xl py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
     <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">
          Features That Set CarCred Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/feature01.svg"
              alt="Feature 1"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Comprehensive Inspections
            </h3>
            <p className="text-center">
              Our experienced mechanics conduct thorough inspections covering
              all vital components, ensuring you have a complete understanding
              of a vehicle's condition.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/feature02.svg"
              alt="Feature 2"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Transparent Reports
            </h3>
            <p className="text-center">
              Receive detailed inspection reports that provide an honest and
              transparent overview of any existing issues, maintenance history,
              and potential concerns.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/feature03.svg"
              alt="Feature 3"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Verified Mechanics
            </h3>
            <p className="text-center">
              We partner with certified mechanics who adhere to strict quality
              standards, ensuring reliable and accurate inspection services for
              every vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
