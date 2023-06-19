'use client'
import React from 'react';
import { useState } from 'react';


const Box = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col bg-white-300 rounded-lg p-6 h-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{subtitle}</p>
    </div>
  );
}; 

const DashboardOverview = () => {

  const initialAlerts = [
    { type: 'claim', name: 'Claim 1', number: 'CLM001', date: '2023-06-01' },
    { type: 'reservation', seller: 'John Doe', vehicle: '2022 Toyota Camry', date: '2023-06-02' },
    { type: 'payment-on-hold', date: '2023-06-03' },
    { type: 'payment-released', date: '2023-06-04' },
    { type: 'payment-withdrawn', date: '2023-06-05' },
    { type: 'support-message', name: 'Support Message 1', date: '2023-06-06' },
  ];

  const [alerts, setAlerts] = useState(initialAlerts);
  const [visibleAlerts, setVisibleAlerts] = useState(initialAlerts.slice(0, 3));

  const loadMoreAlerts = () => {
    const nextIndex = visibleAlerts.length + 3;
    setVisibleAlerts(alerts.slice(0, nextIndex));
  };

  const getAlertContent = (alert) => {
    switch (alert.type) {
      case 'claim':
        return (
          <div className="flex items-center justify-between">
            <div>
              <p className='font-bold'>Claim Name: {alert.name}</p>
              <p>Claim Number: {alert.number}</p>
            </div>
            <p className="text-right">Date: {alert.date}</p>
          </div>
        );
      case 'reservation':
        return (
          <div className="flex items-center justify-between">
            <div>
              <p className='font-bold'>Seller: {alert.seller}</p>
              <p>Vehicle: {alert.vehicle}</p>
            </div>
            <p className="text-right">Date: {alert.date}</p>
          </div>
        );
      case 'payment-on-hold':
        return (
          <div className="flex items-center justify-between">
            <p className='font-bold'>Payment on Hold</p>
            <p className="text-right">Date: {alert.date}</p>
          </div>
        );
      case 'payment-released':
        return (
          <div className="flex items-center justify-between">
            <p className='font-bold'>Payment Released</p>
            <p className="text-right">Date: {alert.date}</p>
          </div>
        );
      case 'payment-withdrawn':
        return (
          <div className="flex items-center justify-between">
            <p className='font-bold'>Payment Withdrawn</p>
            <p className="text-right">Date: {alert.date}</p>
          </div>
        );
      case 'support-message':
        return (
          <div className="flex items-center justify-between">
            <div>
              <p className='font-bold'>Support Message: {alert.name}</p>
              <p>Date: {alert.date}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Reply
            </button>
          </div>
        );
      default:
        return null;
    }
  };


  // END ALERT SECTION

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 4; // Number of items per page

  const inspections = [
    {
      plateNumber: 'ABC123',
      vin: '1HGCM82633A123456',
      inspector: 'John Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      condition: 'Good',
    },
    {
      plateNumber: 'XYZ789',
      vin: '2HGFG12635H654321',
      inspector: 'Jane Smith',
      date: '2023-06-02',
      time: '2:00 PM',
      condition: 'Fair',
    },
    {
      plateNumber: 'ABC123',
      vin: '1HGCM82633A123456',
      inspector: 'John Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      condition: 'Good',
    },
    {
      plateNumber: 'XYZ789',
      vin: '2HGFG12635H654321',
      inspector: 'Jane Smith',
      date: '2023-06-02',
      time: '2:00 PM',
      condition: 'Fair',
    },
    {
      plateNumber: 'ABC123',
      vin: '1HGCM82633A123456',
      inspector: 'John Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      condition: 'Good',
    },
    {
      plateNumber: 'XYZ789',
      vin: '2HGFG12635H654321',
      inspector: 'Jane Smith',
      date: '2023-06-02',
      time: '2:00 PM',
      condition: 'Fair',
    },
    {
      plateNumber: 'ABC123',
      vin: '1HGCM82633A123456',
      inspector: 'John Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      condition: 'Good',
    },
    {
      plateNumber: 'XYZ789',
      vin: '2HGFG12635H654321',
      inspector: 'Jane Smith',
      date: '2023-06-02',
      time: '2:00 PM',
      condition: 'Fair',
    },
    {
      plateNumber: 'ABC123',
      vin: '1HGCM82633A123456',
      inspector: 'John Doe',
      date: '2023-06-01',
      time: '10:00 AM',
      condition: 'Good',
    },
    {
      plateNumber: '7777',
      vin: '2HGFG12635H654321',
      inspector: 'Gerard Kasemba',
      date: '2023-06-02',
      time: '2:00 PM',
      condition: 'Fair',
    },
    // Add more inspection objects here
  ];

  // Filter inspections based on search term
  const filteredInspections = inspections.filter((inspection) =>
    inspection.plateNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentInspections = filteredInspections.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredInspections.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>

      <div className="flex flex-col md:flex-row gap-4 h-full my-8">
        <div className="w-full md:w-1/3">
          <Box title="Total Earnings to Date" subtitle="$10,000" />
        </div>
        <div className="w-full md:w-1/3">
          <Box title="Total Inspections" subtitle="250" />
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col bg-white-300 rounded-lg p-6 h-full">
            <h3 className="text-lg font-semibold">Balance</h3>
            <p className="text-2xl font-bold mt-2">$5,000</p>
            <button className="mt-auto py-2 px-4 bg-green-500 text-white-500 font-semibold rounded-lg self-end mt-4">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      {/* Recent Inspections */}
      <div className="mt-8 bg-white-300 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Recent Inspections</h2>
        <div className="flex items-center justify-between mt-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <table className="mt-4 w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 text-left">Plate Number</th>
              <th className="py-2 px-4 bg-gray-100 text-left">VIN</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Inspector</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Date</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Time</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Condition</th>
            </tr>
          </thead>
          <tbody>
            {currentInspections.map((inspection) => (
              <tr key={inspection.id} className='bg-gray-50'>
                <td className="py-2 px-4">{inspection.plateNumber}</td>
                <td className="py-2 px-4">{inspection.vin}</td>
                <td className="py-2 px-4">{inspection.inspector}</td>
                <td className="py-2 px-4">{inspection.date}</td>
                <td className="py-2 px-4">{inspection.time}</td>
                <td className="py-2 px-4">{inspection.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredInspections.length)} of {filteredInspections.length} inspections
          </div>
          <div>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 mr-2 rounded-md ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-8 bg-white-300 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>
        {visibleAlerts.map((alert, index) => (
          <div key={index} className="border-b-2 border-white-300 py-5">
            {getAlertContent(alert)}
          </div>
        ))}
        {visibleAlerts.length < alerts.length && (
          <div className="text-center mt-4">
            <button
              onClick={loadMoreAlerts}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Quick Access */}
      <section className="mt-8 bg-white-300 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Generate Report</h3>
            <p>Generate inspection reports for completed inspections.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Customer Communication</h3>
            <p>Communicate with customers regarding their inspections.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Warranty Claims</h3>
            <p>Process warranty claims submitted by buyers.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p>View analytics and performance metrics for your inspections.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardOverview
