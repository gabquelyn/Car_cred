import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
// import StarRating from '../../components/shopdetails/starsrating';
import { useEffect, useState } from 'react';
import {
    Modal,
    Ripple,
    initTE,
} from "tw-elements";
import InspectionForm from '../../components/shopdetails/scheduleinspectionform';
import ReviewSection from '../../components/shopdetails/reviews';

const StarRating = ({ rating }) => {
    // Generate an array from 1 to 5
    const starIndices = [1, 2, 3, 4, 5];
    
    return (
      <div>
        {starIndices.map((index) => {
          if (index <= rating) {
            // Filled star
            return <span key={index} style={{ color: '#6a994e', fontSize:"25px"}}>&#10030;</span>;
          } else {
            // Empty star
            return <span key={index} style={{ color: '#6a994e', fontSize:"25px" }}>&#10032;</span>;
          }
        })}
      </div>
    );
  };

const ShopDetails  = () => {

useEffect(() => {
    initTE({ Modal, Ripple });
}, []);

const shop = {
    name: 'Pep Boys',
    address: '3 Walton St',
    city: 'Dorchester',
    state: 'MA',
    zip: '02124',
    phone: '+1 678 889 0929',
    rating: 4.2,
    price: '$200 /Inspection'
    };

  return (
    <>
      <Header />
      <div className='mt-[90px]'>
        <div
        className="bg-white-500
        border-b-2 border-white-300
        max-w-screen-xl py-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="price"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h1 className="font-normal text-2xl mb-2">{shop.name}</h1>
                    <p className="mb-1 text-sm font-medium text-body-color">{shop.address}, {shop.city}, {shop.state}, {shop.zip}</p>
                    <p className="mb-1 text-sm font-medium text-body-color">{shop.phone}</p>
                    <div className="flex items-center mb-2">
                    <StarRating rating={shop.rating} />
                    <p className="ml-2">{shop.rating}</p>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end py-10 px-4">
                    <div>
                        <h3 className="font-normal text-xl mb-2">Inspection Price</h3>
                        <p className="font-medium text-body-color text-lg">{shop.price}</p>
                        <a href="/viewshop"
                          data-te-toggle="modal"
                          data-te-target="#exampleModal"
                        className="ease-in-up rounded-md text-center bg-green-500 hover:opacity-[0.8] text-white-500 py-2 px-2 leading-[25px] h-10 text-sm font-normal text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp sm:block sm:px-9 md:px-4 lg:px-6 xl:px-9">
                        Schedule
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div
      className="bg-white-500
       max-w-screen-xl py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
        <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <ReviewSection />
              </div>
          </div>
      </div>
      <Footer />
        {/* Modal */}
        <div data-te-modal-init className="fixed bg-rgba-100 left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div data-te-modal-dialog-ref className="pointer-events-none relative bg-white-500 w-2/4 mx-auto mt-20 rounded-lg translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-1 border-white-300 border-opacity-100 p-4 dark:border-opacity-50">
                {/*Modal title*/}
                <div className='clear-both'><h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="exampleModalLabel">{shop.name}</h5></div>
                {/* <div className=''><p className="mb-1 text-sm font-medium text-body-color">{shop.address}, {shop.city}, {shop.state}, {shop.zip}</p></div> */}
                {/*Close button*/}
                <button type="button" className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/*Modal body*/}
              <div className="relative flex-auto p-4" data-te-modal-body-ref>
                <InspectionForm />
              </div>
              {/*Modal footer*/}
              <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-1 border-white-300 border-opacity-100 p-4 dark:border-opacity-50">
                <button type="button" className="inline-block rounded bg-white-300 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                  Close
                </button>
                <button type="button" className="ml-1 inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white-500 transition duration-150 ease-in-out hover:opacity-[0.8] " data-te-ripple-init data-te-ripple-color="light">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ShopDetails ;
