import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CTASection from '../../components/CTASection';

const Benefits = () => {
  return (
    <>
      <Header />
      <div
      className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
        <section id="benefits" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-8">
            Benefits of CarCheck
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/benefit-icon-1.svg"
                alt="Benefit 1"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                Transparent Vehicle History
              </h3>
              <p className="text-center">
                CarCheck provides a comprehensive vehicle history report,
                allowing buyers to make informed decisions about their
                potential purchase.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/benefit-icon-2.svg"
                alt="Benefit 2"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                Buyer Confidence
              </h3>
              <p className="text-center">
                With CarCheck, buyers gain confidence knowing that the vehicle
                they are interested in has been thoroughly inspected by a
                certified mechanic.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/benefit-icon-3.svg"
                alt="Benefit 3"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                Warranty & Repair Coverage
              </h3>
              <p className="text-center">
                CarCheck provides buyers with a 30-day warranty on inspected
                vehicles and offers discounted repair costs if any undisclosed
                issues arise.
              </p>
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

export default Benefits;
