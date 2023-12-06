import React, { ChangeEvent } from "react";
import ErrorTooltip from "./ErrorTooltip";

interface ThirdScreenProps {
  inputs: {
    toepassing: string;
    vloerverwarming: string;
    story: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  errors: Inputs
}

const ThirdScreen = ({ inputs, handleInputChange, errors }: ThirdScreenProps) => {
  const options = [
    "Selecteer toepassing",
    "Bakkerij",
    "Bedrijfsruimte",
    "Dans en discotheek",
    "ESD vloer",
    "Fabriek",
    "Garage",
    "Horeca",
    "Hotel",
    "Industrieel",
    "Kantoor",
    "Kapsalon",
    "Museum",
    "Magazijn",
    "Openbaargebouw",
    "Parkeergarage",
    "Professionele keuken",
    "Productie",
    "Renovatie gietvloer",
    "School",
    "Slagerij",
    "Supermarkt",
    "Sportcentrum",
    "Showroom",
    "Tandarts",
    "Werkplaats",
    "Woning",
    "Winkel",
    "Ziekenhuis",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" mb-10">
        <h3 className="text-black text-2xl font-extrabold text-center mb-[5px]">
          Wat laatste vragen..
        </h3>
        <p className="font-medium text-lg text-center">
          Dit is
          <span className="text-[#0090ff] font-medium"> de latste stap!</span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex">
          <div className="flex-1">
            <label className="flex w-full flex-col gap-1">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
                Toepassing{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <ErrorTooltip label={errors?.toepassing} open={errors?.toepassing !== ''}>
              <select
                name="toepassing"
                value={inputs.toepassing}
                onChange={handleInputChange}
                className="w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
              >
                {options.map((option, index) => (
                  <option
                    key={index}
                    value={option.toLowerCase().replace(/\s/g, "-")}
                  >
                    {option}
                  </option>
                ))}
              </select>
              </ErrorTooltip>
            </label>
          </div>
        </div>
        <div className="mb-1">
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
              Vloerverwarming{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <ErrorTooltip label={errors?.vloerverwarming} open={errors?.vloerverwarming !== ''}>

            <select
              name="vloerverwarming"
              value={inputs.vloerverwarming}
              onChange={handleInputChange}
              className="w-full focus:border-[2px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] placeholder-[#dadbdf] px-4 py-3 rounded-[6px]"
            >
              <option value="geen">Geen vloerwarming</option>
              <option value="ja" className="text-[15px]">
                Ja
              </option>
              <option value="nee" className="text-[15px]">
                Nee
              </option>
            </select>
              </ErrorTooltip>
          </label>
        </div>
        <div>
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium">
              Extra informatie{" "}
            </span>

            <textarea
              name="story"
              value={inputs.story}
              onChange={handleInputChange}
              rows={5}
              cols={33}
              className="resize-none w-full focus:border-[2px] border-[#d7edff] border-[1px] outline outline-4 outline-[#f6f6f7] focus:border-[#98d1ff] text-[#515766] placeholder-[#dadbdf] px-5 py-3 rounded-[6px]"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
