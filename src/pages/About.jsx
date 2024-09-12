import React from 'react'

const About = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 mt-[94px]">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our Movie and TV Show Trend discovery platform! We are passionate about bringing you the trend of the latest in entertainment.
      </p>

      <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Trending Movies: Stay updated with popular movies that everyone is talking about.</li>
        <li>Trending TV Shows: Discover the latest TV shows that are making waves across the world.</li>
        <li>Search by Keywords: Use keywords and you can find movies and TV shows based on your interests and preferences.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
      <p className="mb-4">
        Our platform uses <a href='https://www.themoviedb.org/' className='border-b border-black hover:border-none hover:cursor-pointer'>The Movie Database(TMDB)</a> to track and display trending movies and TV shows in real-time. This is one of the most reliable sources to ensure that you always have access to the most up-to-date information. You can browse the trending lists or use our search feature to find exactly what you're looking for.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="mb-4">
        Our mission is to make it easier for you to discover and enjoy trending movies and TV shows. We believe that great entertainment should be accessible to everyone, and we're here to help you find your next favorite movie or TV show.
      </p>
    </div>
  )
}

export default About
