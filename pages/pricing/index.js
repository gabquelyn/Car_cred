import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CTASection from '../../components/CTASection';

const Pricing = () => {
  return (
    <>
      <Header />
      <div
      className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
      <section id="pricing" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Basic Plan
              </h3>
              <p className="text-2xl font-bold mb-4 text-center">
                $9.99<span className="text-gray-500 text-lg">/month</span>
              </p>
              <ul className="list-disc list-inside">
                <li>1 car inspection per month</li>
                <li>Access to inspection reports</li>
                <li>30-day warranty</li>
                <li>Discounted repair costs</li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Premium Plan
              </h3>
              <p className="text-2xl font-bold mb-4 text-center">
                $19.99<span className="text-gray-500 text-lg">/month</span>
              </p>
              <ul className="list-disc list-inside">
                <li>3 car inspections per month</li>
                <li>Access to inspection reports</li>
                <li>30-day warranty</li>
                <li>Discounted repair costs</li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Enterprise Plan
              </h3>
              <p className="text-2xl font-bold mb-4 text-center">
                Contact Us
              </p>
              <ul className="list-disc list-inside">
                <li>Customized car inspection solutions</li>
                <li>Access to inspection reports</li>
                <li>30-day warranty</li>
                <li>Discounted repair costs</li>
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
