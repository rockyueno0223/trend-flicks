import React, { useState } from 'react'
import MediaItem from './MediaItem';

const MediaThumbnail = ({ media }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='flex-shrink-0 w-full max-w-[500px] sm:w-1/2 md:w-[300px]'>
      <img
        src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
        alt={media.media_type === 'movie' ? media.title : media.name}
        className='w-full h-auto rounded-md cursor-pointer hover:opacity-70'
        onClick={openModal}
      />
      <MediaItem isOpen={isModalOpen} onClose={closeModal} media={media} />
    </div>
  )
}

export default MediaThumbnail
