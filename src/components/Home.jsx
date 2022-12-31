import React from "react";
import WindowTracker from "./WindowTracker";

const Home = () => {
  const [showWidthSize, setShowWidthSize] = React.useState(false);

  function showWidth() {
    setShowWidthSize(true);
  }

  return (
    <div>
      <h1 className="text-2xl text-center mt-16">Window Tracker</h1>
      <p className="text-xl text-center">Check width of any device</p>

      <button
        className="rounded-lg p-2.5 mx-auto mt-12 flex bg-gray-500 text-white"
        onClick={showWidth}
      >
        Check width of this device
      </button>

      {showWidthSize ? <WindowTracker /> : ""}
    </div>
  );    
};

export default Home;
