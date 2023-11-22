import React from "react";

const ThirdScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="text-[#575A64] text-2xl font-extrabold text-center mb-2">
        Wat laatste vragen..
      </h3>
      <p className=" font-semibold text-[#808189] text-lg text-center mb-8">
        Dit is{" "}
        <span className="text-sky-500 font-medium">de laatste stap!</span>
      </p>
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex">
          <div className="flex-1">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
                Toepassing{" "}
                <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
                𝒊
                </span>
              </span>
              <select
                name="toepassing"
                className="text-[17px] shadow-md w-full border-[0.5px] outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
              >
                <option value="selecteer" className="text-[15px]">Selecteer toepassing</option>
                <option value="dummy1" className="text-[15px]">Dummy 1</option>
                <option value="dummy2" className="text-[15px]">Dummy 2</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Vloerverwarming{" "}
              <span className="h-4 w-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">
              𝒊
              </span>
            </span>
            <select
              name="vloerverwarming"
              className="shadow-md text-[17px] w-full border-[0.5px] text-gray-600 outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-4 py-3 rounded-[6px]"
            >
              <option value="geen">Geen vloerwarming</option>
              <option value="dummy1" className="text-[15px]">Dummy 1</option>
              <option value="dummy2" className="text-[15px]">Dummy 2</option>
            </select>
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-2">
              Extra informatie{" "}
            </span>

            <textarea name="story" rows={5} cols={33} className="resize-none shadow-md w-full border-[0.5px] text-gray-600 outline-none focus:border-sky-500 focus:ring-sky-500 border-gray-300 ring-gray-300 px-3 py-2 rounded-[6px]">
            </textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
