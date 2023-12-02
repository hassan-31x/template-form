"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import FirstScreen from "@/components/form/FirstScreen";
import SecondScreen from "@/components/form/SecondScreen";
import ThirdScreen from "@/components/form/ThirdScreen";
import FourthScreen from "@/components/form/FourthScreen";

import { ArrowLeft, X } from "lucide-react";

// Change this to 'import { useSearchParams } from "react-router-dom" if working in react'
import { useSearchParams } from "next/navigation";
import OpenButton from "./OpenButton";
import { client } from "@/app/utils/client";
import { useForm } from "react-hook-form";
type FormProps = {};

const FormModal = ({}: FormProps) => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [cid, setCid] = useState("");

  const { register, reset, handleSubmit } = useForm()

  useEffect(() => {
    let newOpen = false;
    const widget = searchParams.get("widget");
    const cidParams = searchParams.get("cid");
    setCid(cidParams || "");
    if (widget && widget === "open") {
      newOpen = true;
    }
    setOpen(newOpen);
  }, [searchParams]);

  useEffect(() => {
    if (!open) reset()
  }, [open]);

  if (!open)
    return (
      // This button is responsible for opening form, please change it accordig to your need
      <OpenButton setOpen={setOpen} />
    );

  const { step, goToStep, isFirstStep, isLastStep, back, next, isThirdStep } = useMultiStepForm(
      [
        <FirstScreen register={register} />,
        <SecondScreen register={register} />,
        <ThirdScreen register={register} />,
        <FourthScreen />,
      ],
      currentStepIndex,
      setCurrentStepIndex
    );

  const handleFormSubmit = async (data: Inputs) => {
    try {
      // Adding the cid field to the form data
      const formData = {
        ...data,
        cid: cid, // Replace 'your_cid_here' with your actual cid
      };

      // Create a new document in the 'form' collection
      const response = await client.create({
        _type: "form", // 'form' should match the name of your Sanity schema
        ...formData, // Spread all form data into the document
      });

      console.log("Form data posted to Sanity:", response);
      // Handle success if needed
    } catch (error) {
      console.error("Error posting form data to Sanity:", error);
      // Handle error if needed
    }
  };

  const storeContacts = async (data: Inputs) => {
    const { naam, email, mobiel, postcode, gender, hlasnummer } = data; // Assuming inputs is the state containing these values

    const requestData = {
      name: naam,
      email: email,
      mobile: mobiel,
      postcode: postcode,
      gender: gender,
      homeNumber: hlasnummer,
    };

    try {
      const response = await fetch("/api/createContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to store contacts");
      }

      // Handle success response
      const data = await response.json();
      console.log("Contact stored successfully:", data);
    } catch (error) {
      console.error("Error storing contacts:");
      // Handle error
    }
  };

  const onSubmit = async (data: Inputs) => {
    console.log("🚀 ~ file: FormModal.tsx:159 ~ onSubmit ~ data:", data)
    if (isLastStep) {
      setOpen(false);
      return;
    }

    // if (isFirstStep) {
    //   await storeContacts(data);
    // }

    if (isThirdStep) {
      await handleFormSubmit(data);
    }
    next();
  };

  return (
    <div className="w-[95%] md:w-[80%] max-w-[450px] lg:h-[70vh] lg:max-h-[800px] h-[800px] lg:min-h-[680px] my-5 rounded-xl shadow-lg bg-[#fdfdff]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-between h-full w-full relative p-8 bg-[#fdfdff] rounded-xl"
      >
        {!isFirstStep && !isLastStep && (
          <button
            type="button"
            className="absolute -top-[14px] -left-3 h-[4rem] w-[4rem] rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
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
          <X
            size={30}
            strokeWidth={2.6}
            color="#7E7D80"
            onClick={() => setOpen(false)}
          />
        </button>
        {step}
        <div className="w-full flex">
          {!isLastStep && (
            <button className="bg-[#0090ff] text-white w-full py-3 md:py-4 text-lg rounded-[5px]">
              Offerte aanvragen
            </button>
          )}
          {isLastStep && (
            <button className="bg-[#65c759] text-white w-full py-3 md:py-4 text-lg rounded-[5px]">
              Aanvraag gelukt 
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormModal;
