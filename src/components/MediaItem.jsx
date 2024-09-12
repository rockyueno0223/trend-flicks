import React, { useEffect } from 'react'
import Rating from '@mui/material/Rating';
import "../css/modal.css";

const roundToTenth = (num) => {
  return Math.round(num * 10) / 10;
};

const MediaItem = ({ isOpen, onClose, media }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal-overlay') {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const isMovie = media.media_type === "movie";

  const roundedRating = roundToTenth(media.vote_average / 2);

  return (
    <div>
      <div id="modal-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="bg-white rounded-md shadow-lg relative w-4/5 max-w-lg pb-4 transform transition-all duration-300 scale-0 show-modal-animation">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-4xl text-white hover:text-gray-700"
          >
            &times;
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
            alt={media.media_type === 'movie' ? media.title : media.name}
            className='w-full h-auto'
          />
          <h2 className="text-xl text-black font-bold font-serif mt-4 mb-2">
            {isMovie ? media.title : media.name}
          </h2>
          <div className='w-full flex justify-between px-6 text-gray-600'>
            <span>
              {isMovie ? media.release_date.substring(0, 4) : media.first_air_date.substring(0, 4)}
            </span>
            <span>
              {media.media_type}
            </span>
          </div>
          <p className='text-black text-left mt-2 mb-3 px-4'>{media.overview ? media.overview : "No text available"}</p>
          <div className='w-full flex justify-between px-6 text-gray-600'>
            <span>
              <Rating name="rating" value={roundedRating} precision={0.1} readOnly />
            </span>
            <span>
              Popularity: {Math.round(media.popularity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaItem
