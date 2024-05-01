import React from 'react';

function PassData() {
  return (
    <div>
      <Garage />
    </div>
  );
}

function Car(props) {
  // Display the brand of the car passed as a prop
  return <h3>This car is from {props.Car.brand}</h3>;
}

function Garage() {
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Yamaha" /> {/* Corrected brand name */}
    </div>
  );
}

export default PassData;
