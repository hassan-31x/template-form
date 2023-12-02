import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";


interface FirstScreenProps {
  inputs: Inputs
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<FieldValues>
}

const FirstScreen = ({inputs, handleInputChange, register} : FirstScreenProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mb-5">
        <h3 className="text-black text-2xl font-extrabold text-center">
          Betonvloer offerteop maat?
        </h3>
        <p className=" font-medium text-black text-lg text-center">
          Vraag
          <span className="text-[#0090ff] font-medium"> vrijblijend </span>
          een offerte aan
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between w-[85%] mx-auto">
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[4px] items-start">
              <input
                type="radio"
                {...register("useCase")}
                className="accent-[#0090ff] h-8 w-8 my-2 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                value="particulier"
              />
              <span className="flex flex-col gap-2 w-full items-center pt-2">
                <img src="/pic 1.png" className="w-9" />
                Particulier
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[4px] items-start">
              <input
                type="radio"
                {...register("useCase")}
                className="accent-[#0090ff] h-8 w-8 my-2 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                value="zakelijk"
              />
              <span className="flex flex-col gap-2 w-full items-center pt-2">
                <img src="/pic 2.png" className="w-9" />
                Zakelijk
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex text-xs text-gray-600 font-medium gap-[4px] items-start">
              <input
                type="radio"
                {...register("useCase")}
                className="accent-[#0090ff] h-8 w-8 my-2 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                value="industrieel"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <img src="/pic 3.png" className="w-9"  />
                Industrieel
              </span>
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:gap-4">
          <div className="flex-1">
          <label className="flex flex-col gap-0">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
                Naam{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <input
                type="text"
                {...register("naam")}
                placeholder="Uw naam"
                className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              />
            </label>
          </div>
          <div className="flex-[0.8]">
            <div className="flex items-center pt-5 h-full w-full justify-around">
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm items-end">
                  <input
                    type="radio"
                    {...register("gender")}
                    className="accent-[#0090ff] h-5 w-5 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                    value="dhr"
                  />
                  Dhr.
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm items-end">
                  <input
                    type="radio"
                    {...register("gender")}
                    className="accent-[#0090ff] h-5 w-5 drop-shadow-[0_0_4px_rgba(79,79,79,0.4)]"
                    value="mvr"
                  />
                  Mevr.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
        <label className="flex flex-col gap-0">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
              Email{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="email"
              placeholder="Uw email adres"
              className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              {...register("email")}
            />
          </label>
        </div>
        <div>
        <label className="flex flex-col gap-0">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
              Mobiel{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="text"
              placeholder="06"
              className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              {...register("mobiel")}
            />
          </label>
        </div>
        <div className="flex gap-4">
          <div>
          <label className="flex flex-col gap-0">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
                Postcode{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <input
                type="text"
                placeholder="Postcode"
                className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
                {...register("postcode")}
              />
            </label>
          </div>
          <div>
          <label className="flex flex-col gap-0">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-3">
                Hulsnummer{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <input
                type="text"
                placeholder="Hulsnummer"
                className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
                {...register("hlasnummer")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
