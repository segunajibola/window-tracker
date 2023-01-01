import React from "react";
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
    <div className="dark:bg-gray-800 dark:text-gray-100 h-[90vh] flex flex-col justify-evenly text-center">
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
          {/* padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1; */}

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
        <button
          className="collapsible bg-[#777] cursor-pointer p-[18px] w-full border-none text-left outline-none text-[15px]"
          onClick={collapsible}
        >
          Open Section 3
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
      </div>

      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              What is Flowbite?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      {/* <div class="bg-slate-100 text-gray-600 min-h-screen">
  <div class="container mx-auto py-16 px-12">
  <details class="bg-white shadow rounded group mb-4" open>
    <summary class="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    ">
      <h3 class="flex flex-1 p-4 font-semibold">How To Build Collapsible Component With Tailwindcss?</h3>
      <div class="flex w-10 items-center justify-center">
        <div class="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "></div>
      </div>
    </summary>
    <div class="p-4">
      <p>You can <a class="text-pink-500 hover:text-pink-300 hover:underline" href="https://youtu.be/CS2bsaFRECo">watch the video</a> 🎦 on how to build collapsible component from scratch with HTML and Tailwindcss only (no javascript).</p>
    </div>
  </details>
  </div>
  </div> */}

      <div>
        <p>
          Made with &hearts; by
          <a href="https://segunajibola.com"> Segun Ajibola</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
