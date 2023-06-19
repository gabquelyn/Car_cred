import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CTASection from '../../components/CTASection';

const Howitworkspage = () => {
  return (
    <>
      <Header />
      <div
      className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
        <div className="w-3/4 container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8">
            How CarCheck Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="w-full md:w-full">
                <div className="flex items-center mb-4">
                <img
                    src="/assets/icon/how01.svg"
                    alt="Step 1"
                    className="w-24 h-24 mr-4"
                />
                <div>
                    <h3 className="text-xl font-bold mb-2">Schedule an Inspection</h3>
                    <p>
                    Sellers can schedule a car inspection at their nearest CarCheck
                    partner shop and book an appointment at a convenient time.
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full md:w-full">
                <div className="flex items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold mb-2">Expert Inspection</h3>
                    <p>
                    A certified mechanic performs a comprehensive inspection of the
                    vehicle, checking key components and providing an accurate report
                    of its condition.
                    </p>
                </div>
                <img
                    src="/assets/icon/how02.svg"
                    alt="Step 2"
                    className="w-24 h-24 ml-4"
                />
                </div>
            </div>
            <div className="w-full md:w-auto">
                <div className="flex items-center mb-4">
                <img
                    src="/assets/icon/how03.svg"
                    alt="Step 3"
                    className="w-24 h-24 mr-4"
                />
                <div>
                    <h3 className="text-xl font-bold mb-2">Detailed Report</h3>
                    <p>
                    CarCheck generates a detailed inspection report, accessible via a
                    unique QR code, providing transparency and insights to potential
                    buyers.
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full md:w-auto">
                <div className="flex items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold mb-2">Buyer Protection</h3>
                    <p>
                    Buyers purchasing a CarCheck-inspected vehicle receive a 30-day
                    warranty, with access to discounted repair costs if any undisclosed
                    issues arise.
                    </p>
                </div>
                <img
                    src="/assets/icon/how04.svg"
                    alt="Step 4"
                    className="w-24 h-24 ml-4"
                />
                </div>
            </div>
            </div>
        </div>
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default Howitworkspage;
