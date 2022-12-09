import React, { Fragment } from "react";
import { Oval } from "react-loader-spinner";

const LandingPage = ({ onConnect, loading }) => {
  return (
    <div>
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-3-icon.png"
              className="w-16 mx-auto"
              alt=""
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Connect To Web3 Payment
            </h1>
            <span className="text-sm xl:text-xl font-bold text-center text-gray-500 mt-2">
              Connect to metamask account to continue your checkout process
            </span>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <button
                  onClick={() => onConnect()}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  {loading && (
                    <Oval
                      height={20}
                      width={20}
                      color="#fff"
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#fff"
                      strokeWidth={3}
                      strokeWidthSecondary={3}
                    />
                  )}
                  {!loading && (
                    <Fragment>
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="#FFF"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z" />
                      </svg>
                      <span className="ml-3">Connect</span>
                    </Fragment>
                  )}
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  This portfolio is developed for Qolaq Project Test Case
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
