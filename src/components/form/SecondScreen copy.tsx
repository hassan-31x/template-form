import House from "@/assets/svg/House";
import React from "react";

const SecondScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" mb-8">
        <h3 className="text-black text-2xl font-extrabold text-center mb-2">
          Porject informatie
        </h3>
        <p className=" font-semibold text-black text-lg text-center">
          Vraag
          <span className="text-[#0090ff] font-medium">vrigblijvend</span>
          een offerte aan
        </p>
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex justify-start gap-16">
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="secondStep"
                className="accent-[#0090ff]"
                value="bestaand"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 4.png" />
                Bestaand
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="secondStep"
                className="accent-[#0090ff]"
                value="nieuwbouw"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 5.png" />
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
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <select
                name="gewenste"
                className="shadow-md text-[17px] w-full border-[0.5px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              >
                <option value="manden" className="text-[15px]">
                  0 tot 3 manden
                </option>
                <option value="dummy1" className="text-[15px]">
                  Dummy 1
                </option>
                <option value="dummy2" className="text-[15px]">
                  Dummy 2
                </option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Oppervlakte m2{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="text"
              placeholder="Oppervlakte m2"
              className="shadow-md w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Type onderground{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <select
              name="type"
              className="shadow-md text-[17px] w-full border-[0.5px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            >
              <option value="selecteer" className="text-[15px]">
                Selecteer onderground
              </option>
              <option value="dummy1" className="text-[15px]">
                Dummy 1
              </option>
              <option value="dummy2" className="text-[15px]">
                Dummy 2
              </option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
