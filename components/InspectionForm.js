import { useState } from 'react';

const ScheduleInspection = () => {
  // Sample data
  const shops = [
    { name: 'Pep Boys', address: '3 Walton St, Dorchester, MA', hours: 'Mon - Fri  From 08:30 AM TO 06:00 PM', phone: '+1 678 889 0929', price: '$200 /Inspection' },
    { name: 'Jiffy Lube', address: '250 Broadway, New York, NY', hours: 'Mon - Sat  From 07:00 AM TO 07:00 PM', phone: '+1 123 456 7890', price: '$180 /Inspection' },
    { name: 'Midas', address: '200 Main St, Los Angeles, CA', hours: 'Mon - Sun  From 09:00 AM TO 05:00 PM', phone: '+1 987 654 3210', price: '$220 /Inspection' },
    { name: 'Pep Boys', address: '3 Walton St, Dorchester, MA', hours: 'Mon - Fri  From 08:30 AM TO 06:00 PM', phone: '+1 678 889 0929', price: '$200 /Inspection' },
    { name: 'Jiffy Lube', address: '250 Broadway, New York, NY', hours: 'Mon - Sat  From 07:00 AM TO 07:00 PM', phone: '+1 123 456 7890', price: '$180 /Inspection' },
    { name: 'Midas', address: '200 Main St, Los Angeles, CA', hours: 'Mon - Sun  From 09:00 AM TO 05:00 PM', phone: '+1 987 654 3210', price: '$220 /Inspection' },
    { name: 'Pep Boys', address: '3 Walton St, Dorchester, MA', hours: 'Mon - Fri  From 08:30 AM TO 06:00 PM', phone: '+1 678 889 0929', price: '$200 /Inspection' },
    { name: 'Jiffy Lube', address: '250 Broadway, New York, NY', hours: 'Mon - Sat  From 07:00 AM TO 07:00 PM', phone: '+1 123 456 7890', price: '$180 /Inspection' },
    { name: 'Midas', address: '200 Main St, Los Angeles, CA', hours: 'Mon - Sun  From 09:00 AM TO 05:00 PM', phone: '+1 987 654 3210', price: '$220 /Inspection' },
    { name: 'Pep Boys', address: '3 Walton St, Dorchester, MA', hours: 'Mon - Fri  From 08:30 AM TO 06:00 PM', phone: '+1 678 889 0929', price: '$200 /Inspection' },
    { name: 'Jiffy Lube', address: '250 Broadway, New York, NY', hours: 'Mon - Sat  From 07:00 AM TO 07:00 PM', phone: '+1 123 456 7890', price: '$180 /Inspection' },
    { name: 'Midas', address: '200 Main St, Los Angeles, CA', hours: 'Mon - Sun  From 09:00 AM TO 05:00 PM', phone: '+1 987 654 3210', price: '$220 /Inspection' },
    { name: 'Pep Boys', address: '3 Walton St, Dorchester, MA', hours: 'Mon - Fri  From 08:30 AM TO 06:00 PM', phone: '+1 678 889 0929', price: '$200 /Inspection' },
    { name: 'Jiffy Lube', address: '250 Broadway, New York, NY', hours: 'Mon - Sat  From 07:00 AM TO 07:00 PM', phone: '+1 123 456 7890', price: '$180 /Inspection' },
    { name: 'Midas', address: '200 Main St, Los Angeles, CA', hours: 'Mon - Sun  From 09:00 AM TO 05:00 PM', phone: '+1 987 654 3210', price: '$220 /Inspection' },
    { name: 'Pep Boys', address: '3 Walton St, Dorchester, MA', hours: 'Mon - Fri  From 08:30 AM TO 06:00 PM', phone: '+1 678 889 0929', price: '$200 /Inspection' },
    { name: 'Jiffy Lube', address: '250 Broadway, New York, NY', hours: 'Mon - Sat  From 07:00 AM TO 07:00 PM', phone: '+1 123 456 7890', price: '$180 /Inspection' },
    { name: 'Midas', address: '200 Main St, Los Angeles, CA', hours: 'Mon - Sun  From 09:00 AM TO 05:00 PM', phone: '+1 987 654 3210', price: '$220 /Inspection' },
  ];

  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Keep track of current page

  // Compute the items for the current page
  const currentItems = shops.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Compute total number of pages
  const numPages = Math.ceil(shops.length / itemsPerPage);

  return (
    <>          
      {currentItems.map((shop, index) => (
        <div className="flex flex-col md:flex-row">

            <div key={index} className="grid w-full grid-cols-1 border mb-4 border-container rounded-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="p-4">
                <h3 className="font-normal text-xl mb-2">{shop.name}</h3>
                <p className="mb-1 text-sm font-medium text-body-color">{shop.address}</p>
                <p className="mb-1 text-sm font-medium text-body-color text-xs">{shop.hours}</p>
                <p className="mb-1 text-sm font-medium text-body-color">{shop.phone}</p>
                <b>{shop.price}</b>
              </div>
              <div className="flex justify-center sm:justify-end py-10 px-4">
                <a href="/viewshop"
                  className="ease-in-up rounded-md bg-green-500 hover:opacity-[0.8] text-white-500 py-2 px-2 h-10 text-sm font-normal text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp sm:block sm:px-9 md:px-4 lg:px-6 xl:px-9">
                  Schedule
                </a>
              </div>
            </div>
          
        </div>
      ))}
      <div>
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(oldPage => Math.max(oldPage - 1, 1))}
        >
          Previous
        </button>
        {Array.from({ length: numPages }, (_, i) => (
          <button
            key={i}
            className='mx-3'
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button 
          disabled={currentPage === numPages}
          onClick={() => setCurrentPage(oldPage => Math.min(oldPage + 1, numPages))}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ScheduleInspection;
