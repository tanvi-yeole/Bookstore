import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:justify-between md:gap-14 md:flex-row md:pt-32 pt-20">
        <div className="w-full">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold ">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className="text-xl">
              Get started with our free books and courses. We have a wide range of resources to help you learn and grow.
            </p>
            {/* <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:text-black" placeholder="Email" />
            </label> */}
          </div>
          <button className="btn btn-secondary mt-6">Get Started</button>
        </div>
        <div className="w-full hidden md:flex justify-center ">
          <img className="size-96" src="/img/bok.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;