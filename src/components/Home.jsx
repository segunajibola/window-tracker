import React from "react";
import WindowWidth from "./WindowWidth";

const Home = (props) => {
  const [showWidthSize, setShowWidthSize] = React.useState(false);

  function showWidth() {
    setShowWidthSize(true);
  }

  return (
    <div>
      <h1 className="text-2xl text-center mt-16 bg-green-500 dark:bg-black dark:text-white border-4">Window Width</h1>
      <p className="text-xl text-center">Check width of any device</p>

      <button
        className="rounded-lg p-2.5 mx-auto mt-12 flex bg-gray-500 text-white"
        onClick={showWidth}
      >
        Check width of this device
      </button>

      <div className="text-lg text-center mt-6">
        {showWidthSize ? <WindowWidth /> : "click button to show width"}
      </div>
    </div>
  );
};

export default Home;
