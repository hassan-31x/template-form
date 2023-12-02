import House from "@/assets/svg/House";

import React, { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";


interface SecondScreenProps {
  inputs: Inputs;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  register: UseFormRegister<FieldValues>
}

const SecondScreen = ({ inputs, handleInputChange, register }: SecondScreenProps) => {
  const types = [
    "--Selecteer onderground--",
    "Beton Vloer",
    "Anhydrietvloer",
    "Hout",
    "Grindvloer",
    "Tegelvloer",
    "Gietvloer",
    "Coatingvloer",
    "Cement-dekvloer",
    "Linoleum",
    "Egaline",
    "Farmacell",
    "Magnesiet",
    "Anders",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" mb-10">
        <h3 className="text-black text-2xl font-extrabold text-center">
          Porject informatie
        </h3>
        <p className="font-medium text-lg text-center">
          <span className="text-[#0090ff] font-medium">Vertel ons meer</span>{" "}
          over je project!
        </p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-start gap-16 ml-7 mb-3">
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[5px] items-start">
              <input
                type="radio"
                {...register("buildingType")}
                className="accent-[#0090ff] h-8 w-8 my-2 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                value="bestaand"
              />
              <span className="flex flex-col gap-2 w-full items-center pt-2">
                <img src="/pic 4.png" className="w-9" />
                Bestaand
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[4px] items-start">
              <input
                type="radio"
                {...register("buildingType")}
                className="accent-[#0090ff] h-8 w-8 my-2 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                value="nieuwbouw"
              />
              <span className="flex flex-col gap-2 w-full items-center pt-2">
                <img src="/pic 5.png" className="w-9" />
                Nieuwbouw
              </span>
            </label>
          </div>
        </div>
        <div className="w-full flex">
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
              Gewenste uitvoerdatum{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <select
              {...register("gewenste")}
              className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            >
              <option value="0 tot 3 manden" className="text-[15px]">
                0 tot 3 manden
              </option>
              <option value="4 tot 6 manden" className="text-[15px]">
                4 tot 6 manden
              </option>
              <option value="7 tot 9 manden" className="text-[15px]">
                7 tot 9 manden
              </option>
              <option value="9 tot 12 manden" className="text-[15px]">
                9 tot 12 manden
              </option>
              <option value="1 tot 2 jaar" className="text-[15px]">
                1 tot 2 jaar
              </option>
            </select>
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
              Oppervlakte m2{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="text"
              placeholder="Oppervlakte m2"
              {...register("oppervlakte")}
              className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
              Type onderground{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <select
              {...register("type")}
              className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            >
              {types.map((type, index) => (
                <option
                  key={index}
                  value={type.toLowerCase().replace(/\s/g, "-")}
                >
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
