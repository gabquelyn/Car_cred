'use client'
import React from 'react';

const VehicleInfo = ({
  year,
  make,
  model,
  bodytype,
  fueltype,
  engine,
  transmition,
  drivetrain,
}) => {
  return (
    <div className="col-md-12 mt-4 border border-container">
      {year && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Year :</div>
          <div className="w-1/2 text-right">
            <p>{year}</p>
          </div>
        </div>
      )}
      {make && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Make :</div>
          <div className="w-1/2 text-right">
            <p>{make}</p>
          </div>
        </div>
      )}
      {model && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Model :</div>
          <div className="w-1/2 text-right">
            <p>{model}</p>
          </div>
        </div>
      )}
      {bodytype && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Body type :</div>
          <div className="w-1/2 text-right">
            <p>{bodytype}</p>
          </div>
        </div>
      )}
      {fueltype && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Fuel type :</div>
          <div className="w-1/2 text-right">
            <p>{fueltype}</p>
          </div>
        </div>
      )}
      {engine && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Engine :</div>
          <div className="w-1/2 text-right">
            <p>{engine}</p>
          </div>
        </div>
      )}
      {transmition && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Transmission :</div>
          <div className="w-1/2 text-right">
            <p>{transmition}</p>
          </div>
        </div>
      )}
      {drivetrain && (
        <div className="flex items-center text-lg">
          <div className="w-1/2 font-medium">Drivetrain :</div>
          <div className="w-1/2 text-right">
            <p>{drivetrain}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleInfo;