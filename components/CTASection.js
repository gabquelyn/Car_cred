import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-white p-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-4">
          Get Your Car Checked Today!
        </h2>
        <p className="text-white text-lg mb-8">
          Ensure peace of mind and make an informed decision.
        </p>
        <a
          href="#contact"
          className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-green-500 hover:opacity-[0.8] hover:shadow-green-md transition-all outline-none undefined"
        >
          Schedule Inspection
        </a>
      </div>
    </section>
  );
};

export default CTASection;
