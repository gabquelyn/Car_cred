import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const CheckInspectionPage  = () => {
    const handleScanQRCode = (qrCodeData) => {
        // TODO: Implement logic to retrieve inspection report based on QR code data
        // You can fetch the report from the backend using the provided QR code data
        // and display it on the page for the buyer to view.
      };
  return (
    <>
      <Header />
      <div
      className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-8">
            Check Inspection Report
          </h2>
          <div className="max-w-lg mx-auto bg-white rounded-lg p-6">
            <p className="text-center text-gray-700 mb-6">
              Scan the QR code to view the inspection report for the vehicle.
            </p>
            <div className="flex items-center justify-center mb-8">
              {/* Placeholder QR code image */}
              <img src="/path/to/qr-code.png" alt="QR Code" className="w-48 h-48" />
            </div>
            <p className="text-center text-gray-700">
              If you don't have a QR code scanner, you can manually enter the code below:
            </p>
            <div className="flex items-center justify-center mt-6">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                placeholder="Enter QR code manually"
              />
            </div>
            <div className="text-center mt-8">
              <button
                type="button"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={handleScanQRCode}
              >
                View Inspection Report
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default CheckInspectionPage ;
