'use client'
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from 'react-modal';

const InspectionManagement = () => {

  // useEffect(() => {
  //   initTE({ Modal, Ripple });
  // }, []);

  const [showMore, setShowMore] = useState(false);


  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    setShowMore(true);
  };

  const inspection = [
    {
      vehicleInfo: 'Honda Accord',
      vin: '1HGCM82633A123456',
      inspectorName: 'John Doe',
      date: '2022-12-15',
      time: '10:00 AM',
      amount: '$100',
      status: 'Completed',
      vehicleCondition: 'Good',
    },
    {
      vehicleInfo: 'Toyota Camry',
      vin: '4T1BF1FK9CU456789',
      inspectorName: 'Jane Smith',
      date: '2022-12-16',
      time: '2:00 PM',
      amount: '$120',
      status: 'Completed',
      vehicleCondition: 'Excellent',
    },
    // Add more inspections as needed
  ];


  const completedOrders = [
    {
      vehicleInfo: '2024 Honda Accord LE',
      vin: '1HGCM82633A123456',
      sellerName: 'John Doe',
      sellerPhone: '617 256 6869',
      sellerEmail: 'JohnDoe@carbuying.com',
      date: '2022-12-15',
      time: '10:00 AM',
      amount: '$100',
      status: 'Completed',
      vehicleCondition: 'Good',
    },
    {
      vehicleInfo: '2024 Honda Accord LE',
      vin: '1HGCM82633A123456',
      sellerName: 'John Doe',
      sellerPhone: '617 256 6869',
      sellerEmail: 'JohnDoe@carbuying.com',
      date: '2022-12-15',
      time: '10:00 AM',
      amount: '$100',
      status: 'Completed',
      vehicleCondition: 'Good',

    },
    // Add more completed orders as needed
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10; // Number of orders to display per page

  // Filtering the orders based on the search term
  const filteredOrders = completedOrders.filter((order) =>
    order.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  // Function to handle opening the edit card modal
  const openEditCardModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the edit card modal
  const closeEditCardModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

      {/* Completed Inspections */}
      <div className="mt-8 bg-white-300 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by vehicle info"
            className="py-2 px-4 pr-10 w-64 bg-white-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-0 right-0 h-full flex items-center justify-center mr-2 text-gray-600">
            <FaSearch />
          </div>
        </div>
        <p className="text-gray-600">
          Showing {indexOfFirstOrder + 1} - {indexOfLastOrder} of {filteredOrders.length} orders
        </p>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Edit</th>
            <th className="py-2 px-4 border-b border-gray-300">Vehicle Info</th>
            {/* <th className="py-2 px-4 border-b border-gray-300">VIN</th> */}
            <th className="py-2 px-4 border-b border-gray-300">Seller Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Contact</th>
            <th className="py-2 px-4 border-b border-gray-300">Date</th>
            <th className="py-2 px-4 border-b border-gray-300">Time</th>
            <th className="py-2 px-4 border-b border-gray-300">Amount</th>
            {/* <th className="py-2 px-4 border-b border-gray-300">Status</th> */}
            <th className="py-2 px-4 border-b border-gray-300">Action</th>
            {/* <th className="py-2 px-4 border-b border-gray-300">Vehicle Condition</th> */}
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-300">
                <a>
                  Change
                </a>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">{order.vehicleInfo}</td>
              {/* <td className="py-2 px-4 border-b border-gray-300">{order.vin}</td> */}
              <td className="py-2 px-4 border-b border-gray-300">{order.sellerName}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                <p>{order.sellerPhone}</p>
                <p>{order.sellerEmail}</p>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">{order.date}</td>
              <td className="py-2 px-4 border-b border-gray-300">{order.time}</td>
              <td className="py-2 px-4 border-b border-gray-300">{order.amount}</td>
              {/* <td className="py-2 px-4 border-b border-gray-300">{order.status}</td> */}
              {/* <td className="py-2 px-4 border-b border-gray-300">{order.vehicleCondition}</td> */}
              <td className=" border-b">
                <a 
                  data-te-toggle="modal"
                  data-te-target="#exampleModal"
                  className='mt-auto py-2 px-4 w-full bg-orange-500 text-xs text-white-500 rounded-lg self-end mt-4'>
                  Create Report
                </a>

                {/* <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-toggle="modal"
                  data-te-target="#exampleModal"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Launch demo modal
                </button>                 */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredOrders.length > ordersPerPage && (
        <div className="flex justify-center mt-4">
          <ul className="flex">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`mx-1 px-3 py-1 border border-gray-300 ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white-500 text-gray-600'
                } cursor-pointer`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      )}

            {/* Modal */}
            <div data-te-modal-init className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div data-te-modal-dialog-ref className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white-500 bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                  <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    {/*Modal title*/}
                    <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="exampleModalLabel">
                      Modal title
                    </h5>
                    {/*Close button*/}
                    <button type="button" className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss aria-label="Close">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  {/*Modal body*/}
                  <div className="relative flex-auto p-4" data-te-modal-body-ref>
                    Modal body text goes here.
                  </div>
                  {/*Modal footer*/}
                  <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button type="button" className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                      Close
                    </button>
                    <button type="button" className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
      
    </div>
  );
};

export default InspectionManagement;
