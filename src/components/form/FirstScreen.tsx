import React from "react";
import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import House from "@/assets/svg/House";

const FirstScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="text-[#575A64] text-2xl font-extrabold text-center">
        Welkom! Even voorstellen..
      </h3>
      <p className="text-sky-500 font-medium text-lg text-center mb-8">
        Als eerst een paar basis gegevens
      </p>
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex justify-between">
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="zeroStep"
                className="accent-sky-600"
                value="partiiculier"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <House />
                Particulier
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="zeroStep"
                className="accent-sky-600"
                value="zakelijk"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <House />
                Zakelijk
              </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex gap-1 text-xs text-gray-600 font-medium">
              <input
                type="radio"
                name="zeroStep"
                className="accent-sky-600"
                value="industrieel"
              />
              <span className="flex flex-col gap-1 w-full items-center pt-2">
                <House />
                Industrieel
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
              <input
                type="text"
                placeholder="Nana"
                className="shadow-md w-full border-[0.5px] outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
              />
            </label>
          </div>
          <div className="flex-1">
            <div className="flex items-center pt-5 h-full w-full justify-around">
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm">
                  <input
                    type="radio"
                    name="firstStep"
                    className="accent-sky-600"
                    value="dhr"
                  />
                  Dhr.
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <label className="flex gap-2 text-sm">
                  <input
                    type="radio"
                    name="firstStep"
                    className="accent-sky-600"
                    value="mvr"
                  />
                  Mvr.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Email{" "}
              <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="email"
              placeholder="Uw email adres"
              className="shadow-md w-full border-[0.5px] outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Mobiel{" "}
              <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <input
              type="text"
              placeholder="Uw mobiel nummer"
              className="shadow-md w-full border-[0.5px] outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
