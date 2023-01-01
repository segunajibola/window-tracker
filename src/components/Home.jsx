import React from "react";
import Collapsible from "./Collapsible";
import WindowWidth from "./WindowWidth";

const Home = (props) => {
  const [showWidthSize, setShowWidthSize] = React.useState(false);

  function showWidth() {
    setShowWidthSize((prev) => !prev);
  }

  function collapsible(e) {
    let content = e.target.nextElementSibling;

    content.style.maxHeight = content.style.maxHeight
      ? null
      : `${content.scrollHeight}px`;
  }

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 py-6 flex flex-col justify-evenly text-center">
      <div>
        <h1 className="text-2xl">Window Width</h1>
        <p className="text-xl">Check width of your device</p>
      </div>

      <div className="mx-auto">
        <button
          className="rounded-lg p-2.5 active:inset-1 active:scale-110 transition delay-100 bg-gray-500 text-white"
          onClick={showWidth}
        >
          {showWidthSize ? "Hide width" : "Check width of this device"}
        </button>

        <div className="text-lg mt-6">
          {showWidthSize ? <WindowWidth /> : "click button to show width"}
        </div>
      </div>

      <div className="p-4">
        <button
          className="collapsible bg-[#777] cursor-pointer p-[18px] w-full border-none text-left outline-none text-[15px]"
          onClick={collapsible}
        >
          Open Section 1
        </button>
        <div
          className="px-[18px] max-h-0 overflow-hidden bg-gray-500"
          style={{ transition: "max-height 0.2s ease-out" }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <button
          className="collapsible bg-[#777] cursor-pointer p-[18px] w-full border-none text-left outline-none text-[15px]"
          onClick={collapsible}
        >
          Open Section 2
        </button>
        <div
          className="px-[18px] max-h-0 overflow-hidden bg-[#f1f1f1]"
          style={{ transition: "max-height 0.2s ease-out" }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="group" open>
          <summary
            className="collapsible bg-[#777] cursor-pointer p-[18px] w-full border-none text-left outline-none text-[15px] group-open:rounded-b-none group-open:z-[1]"
            //   onClick={collapsible}
          >
            <h3 class="flex flex-1 p-4 font-semibold">
              How To Build Collapsible Component With Tailwindcss?
            </h3>
            <div class="flex w-10 items-center justify-center">
              <div
                class="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "
              ></div>
            </div>
          </summary>
          <div
            className="px-[18px] max-h-0 overflow-hidden bg-[#f1f1f1]"
            style={{ transition: "max-height 0.2s ease-out" }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>


      <Collapsible className="relativfe"/>

      <div className="my-4">
        <p>
          Made with &hearts; by
          <a href="https://segunajibola.com"> Segun Ajibola</a>
        </p>
      </div>
    </div>

  );
};

export default Home;
