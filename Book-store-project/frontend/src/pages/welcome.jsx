import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../image/back.jpg';
 
const Welcome = () => {
const backgroundImageUrl = `url(${backgroundImage})`; 
 
  const welcomeStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
  };

  const textBoxStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '20px', 
    
  };
 
  return (
<div style={welcomeStyle}>
<div style={textBoxStyle}> 
<h1 className='text-5xl mb-4'>Welcome to the Book Store</h1>
<p className='text-lg mb-8'>
        "Reading is a journey of the mind. Let's explore the world of books together!"
</p>
<Link to='/home'>
<button className='bg-sky-800 hover:bg-sky-600 px-4 py-2 rounded-lg text-white'>
          Explore Books
</button>
</Link>
</div>
</div>
  );
};
 
export default Welcome;

