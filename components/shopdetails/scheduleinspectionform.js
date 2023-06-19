import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/router';

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  date: '',
  time: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleListing: [{ link: '' }],
  price: '',
  cardNumber: '',
  cardName: '',
  expirationMonth: '',
  expirationYear: '',
  securityCode: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  vehicleYear: Yup.string().required('Vehicle Year is required'),
  vehicleMake: Yup.string().required('Vehicle Make is required'),
  vehicleModel: Yup.string().required('Vehicle Model is required'),
  vehicleListing: Yup.array().of(
    Yup.object().shape({
      link: Yup.string().required('Vehicle Listing Link is required'),
    })
  ),
  price: Yup.string().required('Price is required'),
  cardNumber: Yup.string().required('Card Number is required'),
  cardName: Yup.string().required('Name on Card is required'),
  expirationMonth: Yup.string().required('Expiration Month is required'),
  expirationYear: Yup.string().required('Expiration Year is required'),
  securityCode: Yup.string().required('Security Code is required'),
});

const StepOne = () => (
  <div>
    <div className="mb-4">
      <Field name="firstName" type="text" className="w-full border p-2" placeholder="First Name" />
      <ErrorMessage name="firstName" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="lastName" type="text" className="w-full border p-2" placeholder="Last Name" />
      <ErrorMessage name="lastName" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="phoneNumber" type="text" className="w-full border p-2" placeholder="Phone Number" />
      <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="email" type="email" className="w-full border p-2" placeholder="Email" />
      <ErrorMessage name="email" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="date" as="select" className="w-full border p-2">
        <option value="">Select Date</option>
        {/* Add options for dates */}
      </Field>
      <ErrorMessage name="date" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="time" as="select" className="w-full border p-2">
        <option value="">Select Time</option>
        {/* Add options for time */}
      </Field>
      <ErrorMessage name="time" component="div" className="text-red-500" />
    </div>
  </div>
);

const StepTwo = ({ values, setFieldValue }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">List Your Vehicle</h2>
    <p className="text-gray-500 mb-4">Allow Carcord to recommend your inspected vehicle to potential buyers.</p>
    <div className="mb-4">
      <Field name="vehicleYear" as="select" className="w-full border p-2">
        <option value="">Select Year</option>
        {/* Add options for vehicle years */}
      </Field>
      <ErrorMessage name="vehicleYear" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="vehicleMake" as="select" className="w-full border p-2">
        <option value="">Select Make</option>
        {/* Add options for vehicle makes */}
      </Field>
      <ErrorMessage name="vehicleMake" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="vehicleModel" as="select" className="w-full border p-2">
        <option value="">Select Model</option>
        {/* Add options for vehicle models */}
      </Field>
      <ErrorMessage name="vehicleModel" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field
        name="vehicleListing[0].link"
        type="text"
        className="w-full border p-2"
        placeholder="Vehicle Listing Link"
      />
      <ErrorMessage name="vehicleListing[0].link" component="div" className="text-red-500" />
    </div>
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setFieldValue('vehicleListing', [...values.vehicleListing, { link: '' }])}
    >
      Add Listing Link
    </button>
    {values.vehicleListing.map((_, index) => (
      <div key={index} className="mb-4">
        <Field
          name={`vehicleListing[${index}].link`}
          type="text"
          className="w-full border p-2"
          placeholder="Vehicle Listing Link"
        />
        {index > 0 && (
          <button
            type="button"
            className="text-red-500 hover:text-red-700 font-bold"
            onClick={() =>
              setFieldValue(
                'vehicleListing',
                values.vehicleListing.filter((_, i) => i !== index)
              )
            }
          >
            Remove
          </button>
        )}
      </div>
    ))}
    <div className="mb-4">
      <Field name="price" type="text" className="w-full border p-2" placeholder="Price" />
      <ErrorMessage name="price" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="vehicleImage" type="file" className="border p-2" />
      <ErrorMessage name="vehicleImage" component="div" className="text-red-500" />
    </div>
  </div>
);

const StepThree = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Payment</h2>
    {/* Display price */}
    <div className="mb-4">
      <Field name="cardNumber" type="text" className="w-full border p-2" placeholder="Card Number" />
      <ErrorMessage name="cardNumber" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="cardName" type="text" className="w-full border p-2" placeholder="Name on Card" />
      <ErrorMessage name="cardName" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="expirationMonth" type="text" className="w-full border p-2" placeholder="Expiration Month" />
      <ErrorMessage name="expirationMonth" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="expirationYear" type="text" className="w-full border p-2" placeholder="Expiration Year" />
      <ErrorMessage name="expirationYear" component="div" className="text-red-500" />
    </div>
    <div className="mb-4">
      <Field name="securityCode" type="text" className="w-full border p-2" placeholder="Security Code" />
      <ErrorMessage name="securityCode" component="div" className="text-red-500" />
    </div>
    <a href="https://www.paypal.com">Pay with PayPal</a>
  </div>
);

const steps = [
  {
    title: 'Personal Info',
    content: StepOne,
  },
  {
    title: 'List Your Vehicle',
    content: StepTwo,
  },
  {
    title: 'Payment',
    content: StepThree,
  },
];

const InspectionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values) => {
    // Submit the form data
    console.log(values);
    router.push('/success'); // Redirect to success page
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inspection Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, isSubmitting, dirty, setFieldValue }) => (
          <Form>
            <div className="mb-8">
              {steps[currentStep].content({ values, setFieldValue })}
            </div>
            <div className="flex justify-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              {currentStep < steps.length - 1 && (
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNext}
                  disabled={!dirty || isSubmitting}
                >
                  Next
                </button>
              )}
              {currentStep === steps.length - 1 && (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  disabled={!dirty || isSubmitting}
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InspectionForm;
