import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ScheduleInspection from '../../components/InspectionForm';

const Com = () => {
  return (
    <>
      <Header />
      <div
      className="bg-white-500
       max-w-screen-xl mt-20 py-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="price"
      >
        <div className="container mx-auto">
          <h3 className="mb-7 text-lg font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">Find a shop near you</h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="">
                      {/* SEARCH AREA */}
                      <form>
                          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                              Search
                          </label>
                          <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                  aria-hidden="true"
                                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  />
                              </svg>
                              </div>
                              <input
                              type="search"
                              id="default-search"
                              className="block w-full p-4 pl-10 mb-4 rounded-md border border-dark border-opacity-10 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                              placeholder="Search Zip-Code, City..."
                              required
                              />
                              <button
                              type="submit"
                              className="text-white absolute right-2.5 bottom-2.5 bg-green-500 text-white-500 hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover: hover:opacity[0.8] dark:focus:ring-blue-800"
                              >
                              Search
                              </button>
                          </div>
                      </form>
                      {/* END SEARCH */}

                      {/* MAP */}
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7508873417655!2d-71.1223193!3d42.3265118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379a03e420c03%3A0x9ec58bb07ce58548!2s61%20Franklin%20St%2C%20Brookline%2C%20MA%2002445!5e0!3m2!1sen!2sus!4v1685302523641!5m2!1sen!2sus" width={568} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      {/* END MAP */}
                  </div>
                  <div className="pl-4">
                    <ScheduleInspection />
                  </div>
              </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Com;
