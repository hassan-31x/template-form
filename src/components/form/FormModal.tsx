"use client";

import React from "react";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import FirstScreen from "@/components/form/FirstScreen";
import SecondScreen from "@/components/form/SecondScreen";
import ThirdScreen from "@/components/form/ThirdScreen";
import FourthScreen from "@/components/form/FourthScreen";

import { ArrowLeft, X } from "lucide-react";

type FormProps = {
  open: boolean;
};

const FormModal = ({ open }: FormProps) => {
  if (!open) return null;

  const { step, goToStep, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <FirstScreen />,
      <SecondScreen />,
      <ThirdScreen />,
      <FourthScreen />,
    ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  return (
    <div className="w-[90%] md:w-[70%] max-w-[500px] h-[90vh] lg:h-[80vh] max-h-[700px] rounded-xl shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between h-full w-full relative py-10 px-8 lg:px-10 overflow-y-auto overflow-x-hidden"
      >
        {!isFirstStep && !isLastStep && (
          <button
            type="button"
            className="absolute -top-[14px] -left-3 h-[4.25rem] w-[4.25rem] rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
            onClick={back}
          >
            <ArrowLeft size={37} strokeWidth={2.6} color="#A8A7A9" />
          </button>
        )}
          <button
            type="button"
            className="absolute top-0 right-0 h-10 w-10 rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
            onClick={back}
          >
            <X size={30} strokeWidth={2.6} color="#7E7D80" onClick={() => goToStep(0)} />
          </button>
        {step}
        {!isLastStep && <div className="w-full flex gap-5">
          <button className="bg-blue-500 text-white w-full py-5 text-lg">
            Offerte aanvragen
          </button>
        </div>}
      </form>
    </div>
  );
};

export default FormModal;
