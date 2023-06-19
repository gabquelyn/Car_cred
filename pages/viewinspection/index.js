'use client'
import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { useState } from 'react';

const ViewInspectionReportPage  = () => {

  // Mock inspection report data
  const inspectionReport = {
    createdAt: '2023-06-09T09:30:00Z', // Example creation date and time
    vehicleMake: 'Toyota',
    vehicleModel: 'Camry',
    year: 2020,
    mileage: 50000,
    vin: '1HGCM82633A123456',
    inspectorName: 'John Doe',
    inspectionDate: '2023-06-09',
    reportDetails: {
      engine: {
        oilLevel: 'Good',
        coolantLevel: 'Good',
        batteryHealth: 'Good',
        // ... other engine inspection details
      },
      brakes: {
        brakePads: 'Good',
        brakeDiscs: 'Good',
        brakeFluid: 'Needs Replacement',
        // ... other brakes inspection details
      },
      suspension: {
        shockAbsorbers: 'Good',
        struts: 'Needs Replacement',
        controlArms: 'Good',
        // ... other suspension inspection details
      },
      // ... other inspection categories and their details
    },
  };
  // Format the creation date
  const formattedCreatedAt = new Date(inspectionReport.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // Function to determine the icon for the condition
  const getConditionIcon = (condition) => {
    if (condition === 'Good') {
      return <span className="text-green-500">✔</span>; // Checkmark icon
    }
    return <span className="text-danger">✘</span>; // Cross icon
  };
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter inspection details based on search term
  const filterInspectionDetails = (details) => {
    if (searchTerm === '') {
      return details;
    }

    const filteredDetails = {};

    for (const category in details) {
      filteredDetails[category] = Object.keys(details[category]).reduce((filtered, key) => {
        if (details[category][key].toLowerCase().includes(searchTerm.toLowerCase())) {
          filtered[key] = details[category][key];
        }
        return filtered;
      }, {});
    }

    return filteredDetails;
  };

  const filteredDetails = filterInspectionDetails(inspectionReport.reportDetails);

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
            Inspection Report Details
          </h2>
          <div className="w-3/4 mx-auto bg-white rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Vehicle Information</h3>
              <p className="text-gray-700">Created At: {formattedCreatedAt}</p>
              <p className="text-gray-700">Make: {inspectionReport.vehicleMake}</p>
              <p className="text-gray-700">Model: {inspectionReport.vehicleModel}</p>
              <p className="text-gray-700">Year: {inspectionReport.year}</p>
              <p className="text-gray-700">Mileage: {inspectionReport.mileage}</p>
              <p className="text-gray-700">VIN: {inspectionReport.vin}</p>
              <p className="text-gray-700">Inspector: {inspectionReport.inspectorName}</p>
              <p className="text-gray-700">Inspection Date: {inspectionReport.inspectionDate}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Inspection Details</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search inspection details..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">Engine</h4>
              <p className="text-gray-700">Oil Level: {getConditionIcon(inspectionReport.reportDetails.engine.oilLevel)}{' '}
                {inspectionReport.reportDetails.engine.oilLevel}</p>
              <p className="text-gray-700">Coolant Level: {getConditionIcon(inspectionReport.reportDetails.engine.coolantLevel)}{' '}
                {inspectionReport.reportDetails.engine.coolantLevel}</p>
              <p className="text-gray-700">Battery Health: {getConditionIcon(inspectionReport.reportDetails.engine.batteryHealth)}{' '}
                {inspectionReport.reportDetails.engine.batteryHealth}</p>
              {/* ... other engine inspection details */}
              
              <h4 className="text-lg font-bold my-4">Brakes</h4>
              <p className="text-gray-700">Brake Pads: {getConditionIcon(inspectionReport.reportDetails.brakes.brakePads)}{' '}
                {inspectionReport.reportDetails.brakes.brakePads}</p>
              <p className="text-gray-700">Brake Discs: {getConditionIcon(inspectionReport.reportDetails.brakes.brakeDiscs)}{' '}
                {inspectionReport.reportDetails.brakes.brakeDiscs}</p>
              <p className="text-gray-700">Brake Fluid: {getConditionIcon(inspectionReport.reportDetails.brakes.brakeFluid)}{' '}
                {inspectionReport.reportDetails.brakes.brakeFluid}</p>
              {/* ... other brakes inspection details */}
              
              <h4 className="text-lg font-bold my-4">Suspension</h4>
              <p className="text-gray-700">Shock Absorbers: {getConditionIcon(inspectionReport.reportDetails.suspension.shockAbsorbers)}{' '}
                {inspectionReport.reportDetails.suspension.shockAbsorbers}</p>
              <p className="text-gray-700">Struts: {getConditionIcon(inspectionReport.reportDetails.suspension.struts)}{' '}
                {inspectionReport.reportDetails.suspension.struts}</p>
              <p className="text-gray-700">Control Arms: {getConditionIcon(inspectionReport.reportDetails.suspension.controlArms)}{' '}
                {inspectionReport.reportDetails.suspension.controlArms}</p>
              {/* ... other suspension inspection details */}
              
              {/* ... other inspection categories and their details */}
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default ViewInspectionReportPage ;
