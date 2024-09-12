import MediaWrapper from '../components/MediaWrapper'

const Home = ({ movies, tvShows, searchInput }) => {
  return (
    <div className='w-full flex flex-col pt-4 pb-16 mt-[94px]'>
      {searchInput && (
        <div className='w-full text-left text-xl font-semibold pl-12 mt-4'>Keywords: {searchInput}</div>
      )}
      <MediaWrapper type={'Movies'} mediaData={movies} />
      <MediaWrapper type={'TV Shows'} mediaData={tvShows} />
    </div>
  )
}

export default Home
