"use client"
import { useEffect, useState } from 'react';

const CarGallery = () => {

    const thumbnails = ['/assets/cars/18.jpg','/assets/cars/19.jpg', '/assets/cars/20.jpg', '/assets/cars/21.jpg','/assets/cars/22.jpg', '/assets/cars/23.jpg','/assets/cars/24.jpg', '/assets/cars/25.jpg'];
    const [selectedImage, setSelectedImage] = useState(thumbnails['0']);
    const currentIndex = thumbnails.indexOf(selectedImage);
  
    const handleThumbnailClick = (thumbnail) => {
      setSelectedImage(thumbnail);
    };
  
    const handlePrevious = () => {
      const previousIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      setSelectedImage(thumbnails[previousIndex]);
    };
  
    const handleNext = () => {
      const nextIndex = (currentIndex + 1) % thumbnails.length;
      setSelectedImage(thumbnails[nextIndex]);
    };

    return (
      <>
        <div className="container mb-6">
            <div className="flex-box relative">
                <button
                className="absolute left-0 top-1/2 transform bg-opacity-70 -translate-y-1/2 bg-primary text-white p-2 rounded-md ml-4"
                onClick={handlePrevious}
                >
                Pre
                </button>
                <img src={`${selectedImage}`} alt="Main Image" className="w-full rounded-md" />
                <button
                className="absolute right-0 top-1/2 transform bg-opacity-70 -translate-y-1/2 bg-primary text-white p-2 mr-4 rounded-md"
                onClick={handleNext}
                >
                Next
                </button>
                <div className="absolute bottom-0 right-0 p-2 bg-primary  text-white text-md">
                    {currentIndex + 1} / {thumbnails.length}
                </div>
            </div>
            <div className="flex-box">
                <div className='w-full md:w-1/1 flex flex-wrap mt-4 md:mt-0'>
                {thumbnails.map((thumbnail) => (
                    <div
                    key={thumbnail}
                    className="w-36 h-28 md:w-36 md:h-28 pr-1 pt-1 cursor-pointer"
                    onClick={() => handleThumbnailClick(thumbnail)}
                    >
                    <img src={`${thumbnail}`} alt="Thumbnail" className="w-full h-full rounded-md object-cover" />
                    </div>
                ))}
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default CarGallery;