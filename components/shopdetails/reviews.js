import { useState } from 'react';

const reviews = [
  {
    id: 1,
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    userName: 'John Doe',
    rating: 4,
    date: '2023-05-18',
  },
  {
    id: 2,
    year: 2021,
    make: 'Honda',
    model: 'Civic',
    review: 'Nullam ac nisi vitae ligula posuere vehicula in eget metus.',
    userName: 'Jane Smith',
    rating: 5,
    date: '2023-05-12',
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [inspectionCode, setInspectionCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Process the form submission here
    console.log('Form submitted!');
    console.log('Inspection Code:', inspectionCode);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);

    // Clear form fields
    setInspectionCode('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setShowForm(false);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {Array.from(Array(fullStars)).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current text-yellow-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 14.142l4.316 2.303-.824-4.784 3.491-3.397-4.82-.703L10 1.318l-1.163 4.243-4.82.703L7.508 9.66l-.825 4.784L10 14.142z"
              clipRule="evenodd"
            />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current text-yellow-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2 8.215l3.245.473 1.455 2.933L5.91 16.406l4.097-2.156 4.097 2.156-1.79-4.785 1.455-2.933L18 8.215V6.785L14.91 6.42l-1.456-2.934L14.245.785l-4.097 2.157L6.05.785l1.79 4.785-1.456 2.934L2 6.785v1.43z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <>
        <div className="">
            {/* <h3 className="mb-7 text-lg font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">Reviews</h3> */}
            <div className="">
                <div className="">
                    {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="p-4 mb-4 border border-gray-300 rounded"
                    >
                        <h3 className="text-lg font-semibold">
                        {review.year} {review.make} {review.model}
                        </h3>
                        <p className="mt-2">{review.review}</p>
                        <div className="flex items-center mt-2">
                        <span className="mr-1 text-sm">{review.userName}</span>
                        {renderStars(review.rating)}
                        <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="pl-4">
            <div className="">
                <textarea
                className="w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none"
                placeholder="Write your review..."
                onClick={toggleForm}
                ></textarea>
                {showForm && (
                <form onSubmit={handleFormSubmit} className="mt-4">
                    <div className="flex items-center mb-2">
                    <input
                        type="text"
                        className="w-1/3 p-2 border border-gray-300 rounded mr-2 focus:outline-none"
                        placeholder="Inspection Code"
                        value={inspectionCode}
                        onChange={(e) => setInspectionCode(e.target.value)}
                    />
                    <input
                        type="text"
                        className="w-1/3 p-2 border border-gray-300 rounded mr-2 focus:outline-none"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="w-1/3 p-2 border border-gray-300 rounded mr-2 focus:outline-none"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="w-1/3 p-2 border border-gray-300 rounded mr-2 focus:outline-none"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="button"
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                        onClick={toggleForm}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Submit
                    </button>
                    </div>
                </form>
                )}
            </div>
        </div>
    </>

  );
};

export default ReviewSection;
