"use client"
import { useEffect, useState } from 'react';

const checkIcon = (
    <svg width="8" height="8" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

const CarInfo = () => {

    const List = ({ text }) => (
        <p className="mb-5 flex items-center text-sm font-medium text-body-color">
          <span className="mr-4 flex h-[20px] w-[20px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
          {text}
        </p>
      ); 

    return (
      <>
        <div>
            <h3 className="my-4 block text-xl font-bold text-black dark:text-white dark:hover:text-primary sm:text-2xl">Specifications</h3>
            <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
            >
                <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Manufacturing Year:2018" />
                    <List text="Mileage:25K miles" />
                    <List text="Body Type:Convertible" />
                    <List text="Drivetrain:Front Wheel Drive" />
                    <List text="Engine:2.5L Turbo 6 Cylinder" />
                    <List text="Transmission:7-Speed Shiftable Automatic" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Fuel Type:Gasoline" />
                    <List text="City MPG:20" />
                    <List text="Highway MPG:29" />
                    <List text="Exterior Color:Aspen White" />
                    <List text="Interior Color:Charcoal" />
                    <List text="VIN:2VW821AU9JM754284" />
                </div>
                </div>
            </div>
        </div>
        <div>
            <h3 className="my-4 block text-xl font-bold text-black dark:text-white dark:hover:text-primary sm:text-2xl">Features</h3>
            <div id="accordionExample">
            <div className="rounded-t-lg border border--container dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingOne">
                <button className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]" type="button" data-te-collapse-init data-te-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Exterior
                    <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div id="collapseOne" className="!visible" data-te-collapse-item data-te-collapse-show aria-labelledby="headingOne" data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                    <div
                        className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                        data-wow-delay=".15s"
                    >
                        <div className="mx-[-12px] flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                            <List text="Alloy Wheels" />
                            <List text="Sunroof / Moonroof" />
                        </div>

                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                            <List text="Tinged glass" />
                            <List text="LED Headlights" />
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="border border-t-0 border--container bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingTwo">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Interior
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div id="collapseTwo" className="!visible hidden" data-te-collapse-item aria-labelledby="headingTwo" data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                    <div
                    className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                    data-wow-delay=".15s"
                    >
                    <div className="mx-[-12px] flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Alloy Wheels" />
                        <List text="Sunroof / Moonroof" />
                        </div>

                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Tinged glass" />
                        <List text="LED Headlights" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="border border-t-0 border--container dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingThree">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Technology
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div id="collapseThree" className="!visible hidden" data-te-collapse-item aria-labelledby="headingThree" data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                    <div
                    className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                    data-wow-delay=".15s"
                    >
                    <div className="mx-[-12px] flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Alloy Wheels" />
                        <List text="Sunroof / Moonroof" />
                        </div>

                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Tinged glass" />
                        <List text="LED Headlights" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="rounded-b-lg border border-t-0 border--container bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="accordion-header mb-0" id="headingFour">
                <button className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Safety
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div id="collapseFour" className="!visible hidden" data-te-collapse-item aria-labelledby="headingThree" data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                    <div
                    className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                    data-wow-delay=".15s"
                    >
                    <div className="mx-[-12px] flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Alloy Wheels" />
                        <List text="Sunroof / Moonroof" />
                        </div>

                        <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Tinged glass" />
                        <List text="LED Headlights" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div>
            <h3 className="my-4 block text-xl font-bold text-black dark:text-white dark:hover:text-primary sm:text-2xl">About the car</h3>
            <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus nemo harum ipsa deleniti, voluptas beatae inventore officia, eos accusantium non exercitationem eveniet ad facere deserunt, ullam architecto saepe cupiditate.</p>
        </div>
      </>
    );
  };
  
  export default CarInfo;
  