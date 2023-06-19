import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CarSellForm from '../../components/carsell/Carsellform';
import VehicleInfo from '../../components/carsell/Carinfo';

const SellCars = () => {
  return (
    <>
      <Header />
      <div
      className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-4 rounded-md">
                <CarSellForm />
            </div>
            <div className=" p-4 rounded-md">
                <VehicleInfo />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellCars;
