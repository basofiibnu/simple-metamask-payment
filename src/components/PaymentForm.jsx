import React from "react";
import { Oval } from "react-loader-spinner";

const PaymentForm = ({
  onPayment,
  onLoading,
  purchaseCode,
  variant,
  setVariant,
  price,
  setPrice,
  web3,
}) => {
  const selectVariant = () => {
    switch (variant) {
      case "voyage":
        return "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1365200314.jpg?fit=2211%2C1171&strip=all";
      case "dummies":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3CI-04Pdv0t99IKQXtboJWoIIckkAjynYg&usqp=CAU";
      case "artist":
        return "https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/02/corral-emergence.jpeg?fit=1200%2C636&quality=100&ssl=1";
      default:
        break;
    }
  };

  const currentPrice = web3.utils.fromWei(price, "ether");
  return (
    <div>
      <div className="max-w-screen-xl m-5 sm:m-20 bg-white shadow rounded-lg">
        <div className="flex font-sans">
          <div className="flex-none w-48 relative hidden sm:block">
            <img
              src={selectVariant()}
              alt="nft"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                Classic Utility NFT
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                <p>Goerli ETH {currentPrice}*</p>
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                Available
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="voyage"
                    checked={variant === "voyage"}
                    onChange={() => {
                      setVariant("voyage");
                      setPrice("120000000000");
                    }}
                  />
                  <div className="w-20 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    Voyage
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="dummies"
                    checked={variant === "dummies"}
                    onChange={() => {
                      setVariant("dummies");
                      setPrice("170000000000");
                    }}
                  />
                  <div className="w-20 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    Dummies
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="artist"
                    checked={variant === "artist"}
                    onChange={() => {
                      setVariant("artist");
                      setPrice("270000000000");
                    }}
                  />
                  <div className="w-20 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    Artist
                  </div>
                </label>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-white hover:text-black hover:border hover:border-slate-200 transition-all disabled:cursor-not-allowed"
                  type="button"
                  disabled={!variant}
                  onClick={onPayment}
                >
                  {onLoading && (
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
                  {!onLoading && <span>Checkout</span>}
                </button>
                <a
                  href={selectVariant()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 transition-all hover:bg-black hover:text-white hover:border"
                    type="button"
                  >
                    View Details
                  </button>
                </a>
              </div>
            </div>
            {purchaseCode && (
              <div className="bg-gray-100 p-3 rounded-md text-sm">
                <p>Purchase Code:</p>
                <a
                  href={`https://goerli.etherscan.io/tx/${purchaseCode}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="text-blue-500">{purchaseCode}*</p>
                </a>
                <span className="text-xs">
                  *click to view transaction details on etherscan
                </span>
              </div>
            )}
            {!purchaseCode && (
              <div className="flex justify-between">
                <p className="text-sm text-slate-700">
                  Make sure your Goerli ETH balance is enough for this
                  transaction
                </p>
                <p className="text-xs text-right">*before gas fee</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
