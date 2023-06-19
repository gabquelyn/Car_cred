import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

const BusinessInfoForm = () => {
  const [openDays, setOpenDays] = useState([
    { day: '', openTime: '', closeTime: '' },
  ]);

  const addOpenDay = () => {
    setOpenDays([...openDays, { day: '', openTime: '', closeTime: '' }]);
  };

  const removeOpenDay = (index) => {
    setOpenDays((prevOpenDays) => {
      const updatedOpenDays = [...prevOpenDays];
      updatedOpenDays.splice(index, 1);
      return updatedOpenDays;
    });
  };

  const initialValues = {
    shopName: '',
    shopAddress: '',
    shopState: '',
    shopCity: '',
    shopZipCode: '',
    shopEmail: '',
    shopPhone: '',
    inspectionPrice: '',
    openDays: [...openDays],
  };

  const validationSchema = Yup.object().shape({
    shopName: Yup.string().required('Shop Name is required'),
    shopAddress: Yup.string().required('Shop Address is required'),
    shopState: Yup.string().required('State is required'),
    shopCity: Yup.string().required('City is required'),
    shopZipCode: Yup.string().required('Zip Code is required'),
    shopEmail: Yup.string().email('Invalid email').required('Email is required'),
    shopPhone: Yup.string().required('Phone Number is required'),
    inspectionPrice: Yup.number()
      .typeError('Inspection Price must be a number')
      .required('Inspection Price is required'),
    openDays: Yup.array().of(
      Yup.object().shape({
        day: Yup.string().required('Day is required'),
        openTime: Yup.string().required('Open Time is required'),
        closeTime: Yup.string().required('Close Time is required'),
      })
    ),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted!');
    console.log(values);
  };

  const dayOptions = [
    { label: 'Monday', value: 'monday' },
    { label: 'Tuesday', value: 'tuesday' },
    { label: 'Wednesday', value: 'wednesday' },
    { label: 'Thursday', value: 'thursday' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' },
    { label: 'Sunday', value: 'sunday' },
  ];

  const timeOptions = [
    { label: '1 AM', value: '1:00 AM' },
    { label: '2 AM', value: '2:00 AM' },
    { label: '3 AM', value: '3:00 AM' },
    // Add more time options as needed
    { label: '11 PM', value: '11:00 PM' },
    { label: '12 PM', value: '12:00 PM' },
  ];

  return (
    <div className="p-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="shopName" className="block mb-1 font-semibold">
                Shop Name
              </label>
              <Field
                type="text"
                id="shopName"
                name="shopName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              />
              <ErrorMessage
                name="shopName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="shopAddress" className="block mb-1 font-semibold">
                  Shop Address
                </label>
                <Field
                  type="text"
                  id="shopAddress"
                  name="shopAddress"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                />
                <ErrorMessage
                  name="shopAddress"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-1/4 mr-2">
                <label htmlFor="shopState" className="block mb-1 font-semibold">
                  State
                </label>
                <Field
                  as="select"
                  id="shopState"
                  name="shopState"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                >
                  <option value="">Select State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                </Field>
                <ErrorMessage
                  name="shopState"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-1/4">
                <label htmlFor="shopCity" className="block mb-1 font-semibold">
                  City
                </label>
                <Field
                  type="text"
                  id="shopCity"
                  name="shopCity"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                />
                <ErrorMessage
                  name="shopCity"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="shopZipCode" className="block mb-1 font-semibold">
                  Zip Code
                </label>
                <Field
                  type="text"
                  id="shopZipCode"
                  name="shopZipCode"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                />
                <ErrorMessage
                  name="shopZipCode"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="shopEmail" className="block mb-1 font-semibold">
                  Email
                </label>
                <Field
                  type="email"
                  id="shopEmail"
                  name="shopEmail"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                />
                <ErrorMessage
                  name="shopEmail"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="shopPhone" className="block mb-1 font-semibold">
                  Phone Number
                </label>
                <Field
                  type="text"
                  id="shopPhone"
                  name="shopPhone"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                />
                <ErrorMessage
                  name="shopPhone"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="inspectionPrice" className="block mb-1 font-semibold">
                  Inspection Price
                </label>
                <Field
                  type="number"
                  id="inspectionPrice"
                  name="inspectionPrice"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                />
                <ErrorMessage
                  name="inspectionPrice"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Open Days and Times</label>
              <FieldArray name="openDays">
                {({ push, remove }) => (
                  <div>
                    {values.openDays.map((_, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <div className="w-1/3 mr-2">
                          <Field
                            as="select"
                            name={`openDays[${index}].day`}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                          >
                            <option value="">Select Day</option>
                            {dayOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name={`openDays[${index}].day`}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="w-1/3 mr-2">
                          <Field
                            as="select"
                            name={`openDays[${index}].openTime`}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                          >
                            <option value="">Select Time</option>
                            {timeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name={`openDays[${index}].openTime`}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="w-1/3">
                          <Field
                            as="select"
                            name={`openDays[${index}].closeTime`}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                          >
                            <option value="">Select Time</option>
                            {timeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name={`openDays[${index}].closeTime`}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        {index > 0 && (
                                <button
                                type="button"
                                className="ml-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                                onClick={() => remove(index)}
                                >
                                Remove
                                </button>
                            )}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                      onClick={() => push({ day: '', openTime: '', closeTime: '' })}
                    >
                      Add More
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BusinessInfoForm;
