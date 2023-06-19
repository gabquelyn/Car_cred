"use client"
import Image from "next/image";
import Link from "next/link";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import CarCard from "./Carcard";

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
    {
        id: 'usage',
        name: 'Usage',
        options: [
            { value: 'used', label: 'Used', checked: false },
            { value: 'new', label: 'New', checked: false },
        ],
    },
    {
        id: 'seller',
        name: 'Seller',
        options: [
            { value: 'dealer', label: 'Dealer', checked: false },
            { value: 'personal', label: 'Personal Seller', checked: false },
        ],
    },
    {
        id: 'color',
        name: 'Color',
        options: [
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'black', label: 'Black', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'gray', label: 'Gray', checked: false },
        { value: 'orange', label: 'Orange', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
        { value: 'red', label: 'Red', checked: false },
        { value: 'silver', label: 'Silver', checked: false },
        { value: 'white', label: 'White', checked: false },
        { value: 'yellow', label: 'Yellow', checked: false },
        ],
    },
    {
        id: 'features',
        name: 'Features',
        options: [
        { value: 'alloy wheels', label: 'Alloy Wheels', checked: false },
        { value: 'sunroof / moonroof', label: 'Sunroof / Moonroof', checked: false },
        { value: 'panoramic roof', label: 'Panoramic Roof', checked: false },
        { value: 'tinted glass', label: 'Tinted Glass', checked: false },
        { value: 'multi-zone A/C', label: 'Multi-zone A/C', checked: false },
        { value: 'heated front seats', label: 'Heated Front Seats', checked: false },
        { value: 'premium sound system', label: 'Premium Sound System', checked: false },
        { value: 'bluetooth', label: 'Bluetooth', checked: false },
        { value: 'airbag: driver', label: 'Airbag: Driver', checked: false },
        { value: 'airbag: passenger', label: 'Airbag: Passenger', checked: false },
        { value: 'adaptive cruise control', label: 'Adaptive Cruise Control', checked: false },
        { value: 'blind spot monitor', label: 'Blind Spot Monitor', checked: false },
        ],
    },
    {
        id: 'fuel type',
        name: 'Fuel Type',
        options: [
        { value: 'gasoline', label: 'Gasoline', checked: false },
        { value: 'hybrid', label: 'Hybrid', checked: false },
        { value: 'electric', label: 'Electric', checked: false },
        { value: 'flexible fuel', label: 'Flexible Fuel', checked: false },
        { value: 'diesel', label: 'Diesel', checked: false },
        ],
    },
    {
        id: 'transmission',
        name: 'Transmission',
        options: [
        { value: 'automatic', label: 'Automatic', checked: false },
        { value: 'manual', label: 'Manual', checked: false },
        ],
    },
    {
        id: 'drive type',
        name: 'Drive Type',
        options: [
        { value: 'awd', label: 'AWD', checked: false },
        { value: 'fwd', label: 'FWD', checked: false },
        { value: '4wd', label: '4WD', checked: false },
        { value: 'rwd', label: 'RWD', checked: false },
        ],
    },
    {
        id: 'engine',
        name: 'Engine',
        options: [
        { value: '3 cyl', label: '3 Cyl', checked: false },
        { value: '4 cyl', label: '4 Cyl', checked: false },
        { value: '6 cyl', label: '6 Cyl', checked: false },
        { value: '8 cyl', label: '8 cyl', checked: false },
        { value: '10 cyl', label: '10 cyl', checked: false },
        { value: '12 cyl', label: '12 cyl', checked: false },
        { value: 'electric', label: 'Electric', checked: false },
        ],
    },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CarSearchFilter = () => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      // Handle search functionality here
    };

    return (
      <>
        <div className="">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                    <Dialog.Panel className="relative bg-white-500-500 ml-auto dark:bg-dark flex h-full w-full max-w-xs flex-col overflow-y-auto  py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                        <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md  p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                        >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Filters Mobile */}
                    <form className="mt-4 border-gray-200">
                    <h3 className="sr-only">Create</h3>
                        <h3 className="sr-only">Categories</h3>
                            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href} className="block px-2 py-3">
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        <div className="px-4 py-4">
                            <div>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                    <div className="bg-blue-500">
                                        <input type="text" id="min" className="block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50" placeholder="Zip or City or State" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="countries" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model Year</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-blue-500">
                                        <select id="countries" className="text-sm rounded-lg block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50">
                                            <option value="">Min</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2020">2021</option>
                                            <option value="2019">2020</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <select id="countries" className="text-sm rounded-lg block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50">
                                            <option value="">Max</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2020">2021</option>
                                            <option value="2019">2020</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="countries" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mileage</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-blue-500">
                                        <input type="text" id="min" className="block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50" placeholder="Min" />
                                    </div>
                                    <div className="">
                                        <input type="text" id="min" className="block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50" placeholder="Max" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="countries" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                    <div className="bg-blue-500">
                                        <select id="countries" className="text-sm rounded-lg block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50">
                                            <option value="">Compact</option>
                                            <option value="">Convertible</option>
                                            <option value="">Coupe</option>
                                            <option value="">Crossover</option>
                                            <option value="">MPV</option>
                                            <option value="">Pickup</option>
                                            <option value="">Sedan</option>
                                            <option value="">Sports</option>
                                            <option value="">SUV</option>
                                            <option value="">Wagon</option>
                                            <option value="">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                            {({ open }) => (
                            <>
                                <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                    {open ? (
                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                    </span>
                                </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                    {section.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                        <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                        >
                                        {option.label}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                        ))}
                    </form>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex sm:flex-cols-2 items-baseline justify-between border-b border-container pb-6 pt-2">
                        {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1> */}
                        <div className="flex">
                            <form className="flex items-center" onSubmit={handleSearch}>
                                <label htmlFor="simple-search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    </div>
                                    <input
                                    type="text"
                                    id="simple-search"
                                    className=" rounded-md border border-body-color text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50 text-gray-900 text-sm block w-full pl-10 p-2.5 "
                                    placeholder="Search makes, model or any keywords"
                                    required
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                        </div>
                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                    />
                                </Menu.Button>
                                </div>

                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute bg-white-500 dark:text-black right-0 z-10 mt-2 w-40 origin-top-right rounded-md  shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <Menu.Item key={option.name}>
                                        {({ active }) => (
                                            <a
                                            href={option.href}
                                            className={classNames(
                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            {option.name}
                                            </a>
                                        )}
                                        </Menu.Item>
                                    ))}
                                    </div>
                                </Menu.Items>
                                </Transition>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                        Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">

                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                    <a href={category.href}>{category.name}</a>
                                    </li>
                                ))}
                                </ul>
                                <div>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                        <div className="bg-blue-500">
                                            <input type="text" id="min" className="block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50" placeholder="Zip or City or State" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="countries" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model Year</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-blue-500">
                                            <select id="countries" className="text-sm rounded-lg block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50">
                                                <option value="">Min</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2020">2021</option>
                                                <option value="2019">2020</option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <select id="countries" className="text-sm rounded-lg block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50">
                                                <option value="">Max</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2020">2021</option>
                                                <option value="2019">2020</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="countries" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mileage</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-blue-500">
                                            <input type="text" id="min" className="block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50" placeholder="Min" />
                                        </div>
                                        <div className="">
                                            <input type="text" id="min" className="block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50" placeholder="Max" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="countries" className="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                        <div className="bg-blue-500">
                                            <select id="countries" className="text-sm rounded-lg block w-full p-2.5 rounded-md border border-body-color border-opacity-10 text-sm font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50">
                                                <option value="">Compact</option>
                                                <option value="">Convertible</option>
                                                <option value="">Coupe</option>
                                                <option value="">Crossover</option>
                                                <option value="">MPV</option>
                                                <option value="">Pickup</option>
                                                <option value="">Sedan</option>
                                                <option value="">Sports</option>
                                                <option value="">SUV</option>
                                                <option value="">Wagon</option>
                                                <option value="">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {filters.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                    <>
                                        <h3 className="-my-3 flow-root">
                                        <Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                            {open ? (
                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                            ) : (
                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                            )}
                                            </span>
                                        </Disclosure.Button>
                                        </h3>
                                        <Disclosure.Panel className="pt-6">
                                        <div className="space-y-4">
                                            {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-600"
                                                >
                                                {option.label}
                                                </label>
                                            </div>
                                            ))}
                                        </div>
                                        </Disclosure.Panel>
                                    </>
                                    )}
                                </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* Your content */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <CarCard />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>  
      </>
    );
  };
  
  export default CarSearchFilter;
  