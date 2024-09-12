import React from 'react'
import MediaThumbnail from './MediaThumbnail'

const MediaWrapper = ({type, mediaData}) => {
  return (
    <div className='px-4 mt-9'>
      <p className='w-full text-left pl-8 text-3xl md:text-4xl mb-4 font-semibold font-serif'>{type}</p>
      {mediaData.length === 0 ? (
        <div className='w-full text-center py-10'>
          <p className='text-lg'>No {type} Available.</p>
        </div>
      ) : (
        <div className='w-full overflow-x-auto'>
          <div className='flex flex-row space-x-3'>
            {mediaData.slice(0, 30).map((media, index) => (
              <MediaThumbnail key={index} media={media} />
            ))}
          </div>
        </div >
      )}
    </div>
  )
}

export default MediaWrapper
