import House from "@/assets/svg/House";
import React from "react";

const SecondScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="text-[#575A64] text-2xl font-extrabold text-center mb-2">
        Welkom Nana!
      </h3>
      <p className=" font-semibold text-[#808189] text-lg text-center mb-8">
        <span className="text-sky-500 font-medium">Vertel ons meer</span> over
        je project!
      </p>
      <div className="w-full flex flex-col gap-7">
      <div className="w-full flex justify-start gap-16">
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="secondStep"
                className="accent-sky-600"
                value="bestaand"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <House />
                Bestaand
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="secondStep"
                className="accent-sky-600"
                value="nieuwbouw"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <House />
                Nieuwbouw
              </span>
            </label>
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex-1">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
                Gewenste uitvoerdatum{" "}
                <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
                𝒊
                </span>
              </span>
              <select
                name="gewenste"
                className="shadow-md text-[17px] w-full border-[0.5px] text-gray-600 outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
              >
                <option value="manden" className="text-[15px]">0 tot 3 manden</option>
                <option value="dummy1" className="text-[15px]">Dummy 1</option>
                <option value="dummy2" className="text-[15px]">Dummy 2</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Oppervlakte m2{" "}
              <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
              𝒊
              </span>
            </span>
            <input
              type="text"
              placeholder="Oppervlakte m2"
              className="shadow-md w-full border-[0.5px] outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Type onderground{" "}
              <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
              𝒊
              </span>
            </span>
            <select
              name="type"
              className="shadow-md text-[17px] w-full border-[0.5px] text-gray-600 outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
            >
              <option value="selecteer" className="text-[15px]">Selecteer onderground</option>
              <option value="dummy1" className="text-[15px]">Dummy 1</option>
              <option value="dummy2" className="text-[15px]">Dummy 2</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
