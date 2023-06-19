'use client'
import { useEffect } from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import CarGallery from '../../components/cardetails/CarGallery';
import CarInfo from '../../components/cardetails/CarInfo';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const CarDetails = () => {

  const validationSchema = Yup.object().shape({
    day: Yup.string().required('Day is required'),
    time: Yup.string().required('Time is required'),
    notes: Yup.string().required('Notes are required'),
  });

  const initialValues = {
    day: '',
    time: '',
    notes: '',
  };
  const handleSubmit = (values) => {
    console.log(values); // Handle form submission here
  };

  return (
    <div>
      <Header />
      <div className="bg-white max-w-screen-xl mt-10 py-14 px-6 sm:px-8 lg:px-16 mx-auto" id="price">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            {/* IMAGE GALLERY */}
            <CarGallery />
            {/* END IMAGE GALLERY */}
            <CarInfo />
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div>
              <span className="top-6 right-6 z-20 inline-flex items-center justify-center rounded-md bg-dark py-2 px-4 text-sm font-md capitalize text-white">Certified</span>
              <h3 className="my-4 block text-xl font-bold text-black dark:text-white dark:hover:text-primary sm:text-2xl">2011 Toyota Corolla SE</h3>
            </div>
            <div className="containers">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <p className="border-body-color border-opacity-10 text-dark font-medium text-body-color dark:border-white dark:border-opacity-10">250 mileage</p>
                </div>
                <div className="lg:w-1/2">
                  <p className="border-body-color border-opacity-10 text-dark font-medium text-body-color dark:border-white dark:border-opacity-10">Boston, ma, 02445</p>
                  {/* <a href="" className='ease-in-up hidden rounded-md bg-success py-3 px-8 text-base font-bold text-white text-center my-5 transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9'>Get Started</a> */}
                </div>
              </div>
            </div>
            <div className="max-w-md mt-5 p-4 rounded-md border-2 border-container">
              <h3 className="mb-4 text-md font-bold leading-tight text-black dark:text-white">Schedule viewing</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="mb-4">
                    <label htmlFor="day" className="block mb-2">
                      Select Day
                    </label>
                    <Field
                      name="day"
                      as="select"
                      className="mb-4 w-full rounded-md border border-dark border-opacity-10 py-3 px-6 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    >
                      <option value="">Select a day</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      {/* Add more options here */}
                    </Field>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="time" className="block mb-2">
                      Select Time
                    </label>
                    <Field
                      name="time"
                      as="select"
                      className="mb-4 w-full rounded-md border border-dark border-opacity-10 py-3 px-6 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">9 AM</option>
                      <option value="afternoon">10 AM</option>
                      <option value="afternoon">11 AM</option>
                      <option value="afternoon">12 PM</option>
                      <option value="afternoon">1 PM</option>
                      {/* Add more options here */}
                    </Field>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="notes" className="block mb-2">
                      Notes
                    </label>
                    <Field
                      name="notes"
                      as="textarea"
                      className="mb-4 w-full rounded-md border border-dark border-opacity-10 py-3 px-6 text-sm font-sm text-dark placeholder-dark outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
