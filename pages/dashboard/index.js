'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import Footer from '../../components/Layout/Footer';
import DashHeader from '../../components/Layout/Dash/DashHeader';
import DashboardOverview from '../../components/Layout/Dash/DashboardOverview';
import InspectionManagement from '../../components/Layout/Dash/InspectionManagement';
// import CustomerCommunication from '../../components/Layout/Dash/CustomerCommunication';
import WarrantyClaimsPage from '../../components/Layout/Dash/WarrantyClaimPage';
import PaymentInvoicingPage from '../../components/Layout/Dash/PaymenInvoice';
// import SupportHelpCenterPage from '../../components/Layout/Dash/SupportHelp';
// import AnalyticsPerformancePage from '../../components/Layout/Dash/AnalyticsPerformancePage ';
import ReportForm from '../../components/Layout/Dash/ReportForm';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
    localStorage.setItem('activeTab', index.toString());
  };


  useEffect(() => {
    const storedActiveTab = localStorage.getItem('activeTab');
    if (storedActiveTab !== null) {
      setActiveTab(parseInt(storedActiveTab, 10));
    }
  }, []);

  return (
    <>
      <div className="bg-white-500 max-w-screen-xl py-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <DashHeader />
        <div className="mt-8">
          <div className="flex flex-col md:flex-row border-2 border-[#d1d5db] rounded-lg bg-white-500-300 p-3">
            <div className="flex w-full md:w-auto">
              <button
                className={`${
                  activeTab === 0 ? 'text-green-500' : ':hover-text-white-300'
                } py-2 px-4 focus:outline-none`}
                onClick={() => handleTabChange(0)}
              >
                Dashboard
              </button>
              <button
                className={`${
                  activeTab === 1 ? 'text-green-500' : ':hover-text-white-300'
                } py-2 px-4 focus:outline-none`}
                onClick={() => handleTabChange(1)}
              >
                Inspection
              </button>
              <button
                className={`${
                  activeTab === 2 ? 'text-green-500' : ':hover-text-white-300'
                } py-2 px-4 focus:outline-none`}
                onClick={() => handleTabChange(2)}
              >
                Warranty
              </button>
              <button
                className={`${
                  activeTab === 3 ? 'text-green-500' : ':hover-text-white-300'
                } py-2 px-4 focus:outline-none`}
                onClick={() => handleTabChange(3)}
              >
                Payment/Invoicing
              </button>
              <button
                className={`${
                  activeTab === 4 ? 'text-green-500' : ':hover-text-white-300'
                } py-2 px-4 focus:outline-none`}
                onClick={() => handleTabChange(4)}
              >
                Support
              </button>
            </div>
            <div className="md:hidden">
              <select
                className="mt-2 block w-full border border-gray-300 py-2 px-3 bg-white-500-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={activeTab}
                onChange={(e) => handleTabChange(parseInt(e.target.value, 10))}
              >
                <option value={0}>Dashboard</option>
                <option value={1}>Inspection</option>
                <option value={2}>Warranty</option>
                <option value={3}>Payment/Invoicing</option>
                <option value={4}>Support</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            {activeTab === 0 && <div><DashboardOverview /></div>}
            {activeTab === 1 && <div><InspectionManagement /></div>}
            {activeTab === 2 && <div><WarrantyClaimsPage /></div>}
            {activeTab === 3 && <div><PaymentInvoicingPage /></div>}
            {activeTab === 4 && <div>
              <ReportForm />
              </div>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
