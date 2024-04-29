import React, { useState } from 'react';

function SimpleButton() {
  // State to track if the button has been clicked
  const [clicked, setClicked] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    // Update the state to reflect that the button has been clicked
    setClicked(true);
  };

  return (
    <div className = 'button'>
      {/* Render a button with an onClick event handler */}
      <button onClick={handleClick}>Klicka här för ett personligt erbjudande!</button>
      {/* Display a message based on whether the button has been clicked */}
      {clicked && <p>Du får 10% rabbatt idag!</p>}
    </div>
  );
}

export default SimpleButton;
