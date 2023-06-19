'use client'
import {  Formik, Form, Field, ErrorMessage, FieldArray  } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

// Validation schema with Yup
// Validation schema with Yup
const validationSchema = Yup.object().shape({
    shopName: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required'),
    inspectorName: Yup.string().required('Required'),
    leaks: Yup.string().required('Required'),
    leaksDetails: Yup.string().when('leaks', {
      is: 'Yes',
      then: Yup.string().required('Required'),
    }),
    belts: Yup.string().required('Required'),
    hoses: Yup.string().required('Required'),
    engineMounts: Yup.string().required('Required'),
    airFilter: Yup.string().required('Required'),
    brakePads: Yup.string().required('Required'),
    brakeRotors: Yup.string().required('Required'),
    brakeCalipers: Yup.string().required('Required'),
    brakePedal: Yup.string().required('Required'),
    parkingBrake: Yup.string().required('Required'),
    shocksOrTrusts: Yup.string().required('Required'),
    controlArms: Yup.string().required('Required'),
    bushings: Yup.string().required('Required'),
    ballJoints: Yup.string().required('Required'),
    steeringComponents: Yup.string().required('Required'),
    steeringComponentsDetails: Yup.string().when('steeringComponents', {
      is: 'Bad',
      then: Yup.string().required('Required'),
    }),
    rodsAndSteering: Yup.string().required('Required'),
    powerSteeringSystem: Yup.string().required('Required'),
    tireTread: Yup.string().required('Required'),
    tires: Yup.string().required('Required'),
    wheels: Yup.string().required('Required'),
    wheelAlignmentAndBalance: Yup.string().required('Required'),
    exhaustPipes: Yup.string().required('Required'),
    muffler: Yup.string().required('Required'),
    catalyticConverter: Yup.string().required('Required'),
    emissionsSystem: Yup.string().required('Required'),
    battery: Yup.string().required('Required'),
    alternator: Yup.string().required('Required'),
    starter: Yup.string().required('Required'),
    electricalComponents: Yup.string().required('Required'),
    electricalComponentsDetails: Yup.string().when('electricalComponents', {
      is: 'Bad',
      then: Yup.string().required('Required'),
    }),
    exteriorLight: Yup.string().required('Required'),
    exteriorLightDetails: Yup.string().when('exteriorLight', {
      is: 'Bad',
      then: Yup.string().required('Required'),
    }),
    interiorLights: Yup.string().required('Required'),
    interiorLightsDetails: Yup.string().when('interiorLights', {
      is: 'Bad',
      then: Yup.string().required('Required'),
    }),
    dashboard: Yup.string().required('Required'),
    dashboardDetails: Yup.string().when('dashboard', {
      is: 'Bad',
      then: Yup.string().required('Required'),
    }),
    controlsSwitchesGaugesHVAC: Yup.string().required('Required'),
    operationAirbag: Yup.string().required('Required'),
    seatBelts: Yup.string().required('Required'),
    windshieldWiper: Yup.string().required('Required'),
    wiperMotor: Yup.string().required('Required'),
    vehicleCondition: Yup.string().required('Required'),
  });

const ReportForm = () => {
  const [showLeaksDetails, setShowLeaksDetails] = useState(false);
  const conditionOptions = ['excellent', 'good', 'bad'];
  const yesNoOptions = ['yes', 'no'];
  return (
    <div className="container mx-auto mt-5">
        <Formik
        initialValues={{
            shopName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            inspectorName: '',
            engine: {
                leaks: '',
                leaksDetails: '',
                belts: '',
                hoses: '',
                engineMounts: '',
                airFilter: '',
            },
            // ...other initial values
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
        >
        {({ errors, values, touched }) => (
            <Form>
            <div className="space-y-4">
                <h2 className="text-2xl">Shop Info</h2>
                
                <Field
                name="shopName"
                type="text"
                placeholder="Shop Name"
                className={`form-input mt-1 block w-full ${
                    errors.shopName && touched.shopName ? 'border-red-500' : ''
                }`}
                />
                <ErrorMessage name="shopName" component="div" className="text-red-500" />

                <Field
                name="address"
                type="text"
                placeholder="Address"
                className={`form-input mt-1 block w-full ${
                    errors.address && touched.address ? 'border-red-500' : ''
                }`}
                />
                <ErrorMessage name="address" component="div" className="text-red-500" />

                <Field
                name="city"
                type="text"
                placeholder="City"
                className={`form-input mt-1 block w-full ${
                    errors.city && touched.city ? 'border-red-500' : ''
                }`}
                />
                <ErrorMessage name="city" component="div" className="text-red-500" />

                <Field
                name="state"
                type="text"
                placeholder="State"
                className={`form-input mt-1 block w-full ${
                    errors.state && touched.state ? 'border-red-500' : ''
                }`}
                />
                <ErrorMessage name="state" component="div" className="text-red-500" />

                <Field
                name="zip"
                type="text"
                placeholder="Zip"
                className={`form-input mt-1 block w-full ${
                    errors.zip && touched.zip ? 'border-red-500' : ''
                }`}
                />
                <ErrorMessage name="zip" component="div" className="text-red-500" />

                <Field
                name="inspectorName"
                type="text"
                placeholder="Inspector Name"
                className={`form-input mt-1 block w-full ${
                    errors.inspectorName && touched.inspectorName ? 'border-red-500' : ''
                }`}
                />
                <ErrorMessage name="inspectorName" component="div" className="text-red-500" />

                {/* Continue with other sections here... */}

                <button type="submit" className="px-4 py-2 mt-6 bg-blue-500 text-white">
                Submit
                </button>
            </div>
            <div className='space-y-4'>
                <h2 className="text-2xl mt-6">Engine</h2>

                    <div>
                    <label className="mr-3">Leaks:</label>
                    <Field as="select" name="engine.leaks">
                        <option value="">Select...</option>
                        {yesNoOptions.map((option) => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                        ))}
                    </Field>
                    <ErrorMessage name="engine.leaks" component="div" className="text-red-500" />
                    </div>

                    {values.engine.leaks === 'yes' && (
                    <div>
                        <label className="mr-3">Leaks Details:</label>
                        <Field as="textarea" name="engine.leaksDetails" className="form-input mt-1 block w-full" />
                        <ErrorMessage name="engine.leaksDetails" component="div" className="text-red-500" />
                    </div>
                    )}

                    <div>
                    <label className="mr-3">Belts:</label>
                    <Field as="select" name="engine.belts">
                        <option value="">Select...</option>
                        {conditionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                        ))}
                    </Field>
                    <ErrorMessage name="engine.belts" component="div" className="text-red-500" />
                    </div>

                    {/* Follow the same pattern for hoses, engineMounts, airFilter fields */}

            </div>
            <div className='space-y-4'>
                <h2 className="text-2xl mt-6">Brakes</h2>

                <label className="mr-3">Brake Pads:</label>
                <Field as="select" name="brakePads">
                <option value="">Select...</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
                </Field>
                <ErrorMessage name="brakePads" component="div" className="text-red-500" />

                {/* Similarly, add the remaining fields (brakeRotors, brakeCalipers, brakePedal, parkingBrake) here following the same pattern. */}

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>
            <div className='space-y-4'>

            </div>

            </Form>
        )}
        </Formik>

    </div>
  );
};

export default ReportForm;
