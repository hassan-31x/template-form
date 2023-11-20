import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prevCurrentStepIndex) => {
      if (prevCurrentStepIndex === steps?.length - 1)
        return prevCurrentStepIndex;

      return prevCurrentStepIndex + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((prevCurrentStepIndex) => {
      if (prevCurrentStepIndex <= 0) return prevCurrentStepIndex;

      return prevCurrentStepIndex - 1;
    });
  };

  const goToStep = (step: number) => {
    setCurrentStepIndex(step);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps?.length - 1,

    next,
    back,
    goToStep,
  };
};
