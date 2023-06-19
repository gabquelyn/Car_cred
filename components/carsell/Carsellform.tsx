"use client"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Geocode from 'react-geocode';
import React, { useEffect, useState } from 'react';

const SignupSchema = Yup.object().shape({
    basicInfo: Yup.object().shape({
      usage: Yup.string().required('Usage is required'),
      seller: Yup.string().required('Seller is required'),
    }),
    price: Yup.object().shape({
      currency: Yup.string().required('Currency is required'),
      price: Yup.number().required('Price is required'),
    }),
    vehicleInfo: Yup.object().shape({
      vin: Yup.string().required('VIN Number is required'),
      mileage: Yup.number().required('Mileage is required'),
      color: Yup.string().required('Color is required'),
      description: Yup.string().required('Description is required'),
    }),
    features: Yup.object().shape({
      exterior: Yup.array().min(1, 'Select at least one exterior feature'),
      interior: Yup.array().min(1, 'Select at least one interior feature'),
      safety: Yup.array().min(1, 'Select at least one safety feature'),
    }),
    location: Yup.object().shape({
      address: Yup.string().required('Address is required'),
    }),
});
interface VehicleInfoProps {
    year?: string;
    make?: string;
    model?: string;
    bodytype?: string;
    fueltype?: string;
    engine?: string;
    transmition?: string;
    drivetrain?: string;
}
const CarSellForm = () => {

    useEffect(() => {
        Geocode.setApiKey('AIzaSyCfRPl1B_VNo2j4oToAEhHBaiDr54MpA2w');
    }, []);

    // Day and Time

    const [fields, setFields] = useState([{ day: '', fromTime: '', toTime: '' }]);

    const handleAddField = () => {
      setFields([...fields, { day: '', fromTime: '', toTime: '' }]);
    };
  
    const handleRemoveField = (index) => {
      const updatedFields = [...fields];
      updatedFields.splice(index, 1);
      setFields(updatedFields);
    };
  
    const handleDayChange = (index, value) => {
      const updatedFields = [...fields];
      updatedFields[index].day = value;
      setFields(updatedFields);
    };
  
    const handleFromTimeChange = (index, value) => {
      const updatedFields = [...fields];
      updatedFields[index].fromTime = value;
      setFields(updatedFields);
    };
  
    const handleToTimeChange = (index, value) => {
      const updatedFields = [...fields];
      updatedFields[index].toTime = value;
      setFields(updatedFields);
    };

    const handleSubmit = (values: any) => {
        // Handle form submission
        console.log(values);
    };

    const handleAddressBlur = async (event) => {
        const address = event.target.value;
        try {
          const response = await Geocode.fromAddress(address);
          const { lat, lng } = response.results[0].geometry.location;
          // Do something with the lat and lng coordinates
          console.log('Latitude:', lat);
          console.log('Longitude:', lng);
        } catch (error) {
          console.error('Error geocoding address:', error);
        }
    }

    const getCarPin = async (event) => {
        const vin = event.target.value
        
    }

    return (
        <>
            <Formik
                initialValues={{
                basicInfo: { usage: '', seller: '' },
                price: { currency: '', price: '' },
                vehicleInfo: { vin: '', mileage: '', color: '', description: '' },
                features: { exterior: [], interior: [], safety: [] },
                location: { address: '' },
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                <Form>
                    {/* Step 1: Basic Info */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="mb-3 text-lg font-bold text-black dark:text-white sm:text-lg lg:text-lg xl:text-lg">
                        Step 1: Basic Info
                    </h2>
                    <div className="mb-4">
                        <label htmlFor="usage" className="block mb-1 font-semibold text-textsecond">
                        Usage
                        </label>
                        <Field
                        as="select"
                        id="usage"
                        name="basicInfo.usage"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                        <option value="">Select Usage</option>
                        <option value="used">Used</option>
                        <option value="new">New</option>
                        </Field>
                        <ErrorMessage name="basicInfo.usage" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <div className="mb-2 font-semibold text-textsecond">Seller</div>
                        <div>
                        <label>
                            <Field
                            type="radio"
                            name="basicInfo.seller"
                            value="private-seller"
                            className="mr-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            Private Seller
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="radio"
                            name="basicInfo.seller"
                            value="dealer"
                            className="mr-1 w-4 h-4 text-rprimary bg-gray-100 border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            Dealer
                        </label>
                        </div>
                        <ErrorMessage name="basicInfo.seller" component="div" className="text-red-500" />
                    </div>
                    </div>

                    {/* Step 2: Price */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Step 2: Price</h2>
                    <div className="mb-4">
                        <label htmlFor="currency" className="block mb-1 font-semibold text-textsecond">
                        Currency
                        </label>
                        <Field
                        as="select"
                        id="currency"
                        name="price.currency"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                        <option value="">Select Currency</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        </Field>
                        <ErrorMessage name="price.currency" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-1 font-semibold text-textsecond">
                        Price
                        </label>
                        <Field
                        type="number"
                        id="price"
                        name="price.price"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        <ErrorMessage name="price.price" component="div" className="text-red-500" />
                    </div>
                    </div>

                    {/* Step 3: Vehicle Information */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Step 3: Vehicle Information</h2>
                    <div className="mb-4 flex">
                        <Field
                        type="text"
                        id="vin"
                        name="vehicleInfo.vin"
                        placeholder="VIN Number"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        <button
                        type="button"
                        onClick={() => {
                            // Perform an action on button click
                        }}
                        className="rounded-r px-3 py-2 bg-primary text-white ml-2"
                        >
                        Find
                        </button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mileage" className="block mb-1 font-semibold text-textsecond">
                        Mileage
                        </label>
                        <Field
                        type="number"
                        id="mileage"
                        name="vehicleInfo.mileage"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        <ErrorMessage name="vehicleInfo.mileage" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="color" className="block mb-1 font-semibold text-textsecond">
                        Color
                        </label>
                        <Field
                        as="select"
                        id="color"
                        name="vehicleInfo.color"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        >
                        <option value="">Select Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        </Field>
                        <ErrorMessage name="vehicleInfo.color" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-1 font-semibold text-textsecond">
                        Vehicle Description
                        </label>
                        <Field
                        as="textarea"
                        id="description"
                        name="vehicleInfo.description"
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                        <ErrorMessage name="vehicleInfo.description" component="div" className="text-red-500" />
                    </div>
                    </div>

                    {/* Step 4: Features */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Step 4: Features</h2>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-textsecond">Exterior</h3>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.exterior"
                            value="alloy-wheels"
                            className="mr-1 w-4 h-4 text-primary bg-primary border-primary rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-primary focus:ring-primary dark:bg-primary dark:border-primary"
                            />
                            Alloy Wheels
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.exterior"
                            value="sunroof"
                            className="mr-1"
                            />
                            Sunroof / Moonroof
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.exterior"
                            value="panoramic-roof"
                            className="mr-1"
                            />
                            Panoramic Roof
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.exterior"
                            value="tinted-glass"
                            className="mr-1"
                            />
                            Tinted Glass
                        </label>
                        </div>
                        <ErrorMessage name="features.exterior" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-textsecond">Interior</h3>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.interior"
                            value="multi-zone-ac"
                            className="mr-1"
                            />
                            Multi-zone A/C
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.interior"
                            value="heated-front-seats"
                            className="mr-1"
                            />
                            Heated Front Seats
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.interior"
                            value="premium-sound-system"
                            className="mr-1"
                            />
                            Premium Sound System
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.interior"
                            value="bluetooth"
                            className="mr-1"
                            />
                            Bluetooth
                        </label>
                        </div>
                        {/* Additional checkboxes for interior features */}
                        {/* ... */}
                        <ErrorMessage name="features.interior" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-textsecond">Safety</h3>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.safety"
                            value="airbag-driver"
                            className="mr-1"
                            />
                            Airbag: Driver
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.safety"
                            value="airbag-passenger"
                            className="mr-1"
                            />
                            Airbag: Passenger
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.safety"
                            value="adaptive-cruise-control"
                            className="mr-1"
                            />
                            Adaptive Cruise Control
                        </label>
                        </div>
                        <div>
                        <label>
                            <Field
                            type="checkbox"
                            name="features.safety"
                            value="blind-spot-monitor"
                            className="mr-1"
                            />
                            Blind Spot Monitor
                        </label>
                        </div>
                        {/* Additional checkboxes for safety features */}
                        {/* ... */}
                        <ErrorMessage name="features.safety" component="div" className="text-red-500" />
                    </div>
                    </div>

                    {/* Step 5: Upload Photos and Documents */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Step 5: Upload Photos and Documents</h2>
                    {/* Dropzone for photos */}
                    {/* ... */}
                    {/* Dropzone for documents */}
                    {/* ... */}
                    </div>
                    {/* Step 6: Vehicle Location */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-5">Day and Time to showcase the vehicle</h2>
                    <div>
                    {fields.map((field, index) => (
                        <div key={index} className="mb-4">
                        <div className="flex flex-col md:flex-row md:items-center mt-2">
                            <div className="md:w-1/3">
                            <select
                                value={field.day}
                                onChange={(e) => handleDayChange(index, e.target.value)}
                                className="w-full px-2 py-1 rounded-md border border-dark border-opacity-10 py-3 px-6 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                            >
                                <option value="">Select a day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                            </select>
                            </div>
                            <div className="md:w-1/3 mt-2 md:mt-0 md:ml-4">
                            <select
                                value={field.fromTime}
                                onChange={(e) => handleFromTimeChange(index, e.target.value)}
                                className="w-full px-2 py-1 rounded-md border border-dark border-opacity-10 py-3 px-6 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                            >
                                <option value="">From</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                            </select>
                            </div>
                            <div className="md:w-1/3 mt-2 md:mt-0 md:ml-4">
                            <select
                                value={field.toTime}
                                onChange={(e) => handleToTimeChange(index, e.target.value)}
                                className="w-full px-2 py-1 rounded-md border border-dark border-opacity-10 py-3 px-6 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                            >
                                <option value="">To</option>
                                <option value="9:00 AM">9:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                            </select>
                            </div>
                            <button
                            onClick={() => handleRemoveField(index)}
                            className="mt-2 md:mt-0 md:ml-4 rounded-md bg-container py-2 px-2 text-sm font-normal text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                            >
                            Remove
                            </button>
                        </div>
                    </div>
                    ))}
                    <button
                        onClick={handleAddField}
                        className="ounded-md bg-dark py-2 px-2 rounded-md text-sm font-normal text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                        Add Date
                    </button>
                    </div>
                    {/* <div className="mb-4">
                    <label htmlFor="address" className="block mb-1 font-semibold text-textsecond">
                        Address
                    </label>
                    <Field
                        type="text"
                        id="address"
                        name="location.address"
                        onBlur={handleAddressBlur}
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                    <ErrorMessage name="location.address" component="div" className="text-red-500" />
                    </div> */}
                    </div>
                    {/* Step 7: Vehicle Location */}
                    <div className="border-2 border-container rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Vehicle Location</h2>
                    <div className="mb-4">
                    <label htmlFor="address" className="block mb-1 font-semibold text-textsecond">
                        Address
                    </label>
                    <Field
                        type="text"
                        id="address"
                        name="location.address"
                        onBlur={handleAddressBlur}
                        className="w-full rounded-md border border-container py-3 px-6 text-base text-body-color placeholder-body-color  outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                    <ErrorMessage name="location.address" component="div" className="text-red-500" />
                    </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Submit
                    </button>
                </Form>
                )}
            </Formik>       
        </>
    );
};

export default CarSellForm;
