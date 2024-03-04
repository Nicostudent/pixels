import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to store random IDs
  const [randomIds, setRandomIds] = useState(generateRandomIds());

  // Function to generate 4 random IDs
  function generateRandomIds() {
    return Array.from({ length: 1 }, () => generateRandomNumber());
  }

  // Function to generate a random number
  function generateRandomNumber() {
    return Math.floor(Math.random() * 5000) + 1;
  }

  // Function to handle button click
  function handleButtonClick() {
    setRandomIds(generateRandomIds());
  }

  return (
    <div className="bg-black h-screen grid grid-cols-2 grid-rows-2 gap-4">
      {randomIds.map((id, index) => (
        <div key={index} className="relative">
          <p className="absolute top-0 left-0 right-0 bottom-0 ml-auto mr-auto w-fit h-fit px-2 rounded  text-white">{id}</p>
          <iframe
            className="w-full h-full"
            title={`Renderizado de URL ${index}`}
            src={`https://play.pixels.xyz/pixels/share/${id}`}
          ></iframe>
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded absolute top-0 bottom-0 left-0 right-0 m-auto h-12"
        onClick={handleButtonClick}
      >
       Click para Buscar lands
      </button>
        <a className='absolute top-0 bottom-0 left-0 right-0 ml-auto mr-auto  w-fit h-fit hover:border-2 hover:rounded m-2'
         href='https://cafecito.app/nicopixels' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' /></a>
    </div>
  );
};

export default App;
