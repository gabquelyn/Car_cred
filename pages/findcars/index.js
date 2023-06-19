import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CarSearchFilter from '../../components/carsearch/Carsearch';

const FindCars = () => {
  return (
    <>
      <Header />
      <div
      className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
        <CarSearchFilter />
      </div>
      <Footer />
    </>
  );
};

export default FindCars;
