'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';

const PaymentInvoicingPage = () => {
  // Sample data for the seller, vehicle, and payment details
  const paymentData = [
    {
      sellerName: 'John Doe',
      vehicleInfo: 'Toyota Camry',
      price: '$15,000',
      dateTime: '2023-06-15 09:30',
      status: 'Completed',
    },
    {
      sellerName: 'Jane Smith',
      vehicleInfo: 'Honda Civic',
      price: '$12,500',
      dateTime: '2023-06-17 14:00',
      status: 'OnHold',
    },
    // Add more payment data as needed
  ];

  // Card on file data
  const cardOnFile = {
    cardNumber: '**** **** **** 1234',
    cardHolder: 'John Doe',
    expirationDate: '12/25',
  };

  // State for the edit card modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Formik Yup validation schema for the card edit form
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Card number is required'),
    cardHolder: Yup.string().required('Card holder is required'),
    expirationDate: Yup.string().required('Expiration date is required'),
  });

  // Function to handle the form submission for editing the card
  const handleEditCardSubmit = (values) => {
    // Logic to handle updating the card data
    console.log('Updated Card Data:', values);

    // Close the modal after submission
    setIsModalOpen(false);
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
    <div className="container mx-auto">
      <div className="my-4 p-4 bg-white-300 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Card on File</h2>
        <p>Card Number: {cardOnFile.cardNumber}</p>
        <p>Card Holder: {cardOnFile.cardHolder}</p>
        <p>Expiration Date: {cardOnFile.expirationDate}</p>
        <button
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={openEditCardModal}
        >
          Edit Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentData.map((payment, index) => (
          <div key={index} className="bg-white-300 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Seller: {payment.sellerName}</h2>
            <p>Vehicle: {payment.vehicleInfo}</p>
            <p>Price: {payment.price}</p>
            <p>Date & Time: {payment.dateTime}</p>
            <p>Status: {payment.status}</p>
          </div>
        ))}
      </div>

      {/* Edit Card Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeEditCardModal} className='w-1/4 mx-auto rounded-lg mt-10 bg-white-500 p-5 border-white-300 border-2'>
        <h2 className="text-lg font-bold mb-4">Edit Card</h2>
        <Formik
          initialValues={cardOnFile}
          validationSchema={validationSchema}
          onSubmit={handleEditCardSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block font-medium mb-1">
                Card Number:
              </label>
              <Field
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <ErrorMessage name="cardNumber" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="cardHolder" className="block font-medium mb-1">
                Card Holder:
              </label>
              <Field
                type="text"
                id="cardHolder"
                name="cardHolder"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <ErrorMessage name="cardHolder" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="expirationDate" className="block font-medium mb-1">
                Expiration Date:
              </label>
              <Field
                type="text"
                id="expirationDate"
                name="expirationDate"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <ErrorMessage name="expirationDate" component="div" className="text-red-500 mt-1" />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                onClick={closeEditCardModal}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default PaymentInvoicingPage;
