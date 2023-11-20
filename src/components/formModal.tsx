'use client'

import { useMultiStepForm } from '@/hooks/useMultiStepForm'
import React from 'react'

const FormModal = () => {
    const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultiStepForm([<>Step 1</>, <>Step 2</>, <>Step 3</>, <>Step 4</>])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        next()
    }

  return (
    <div className='w-[90%] max-w-[650px] h-[90vh] border border-black rounded-xl'>
        <form onSubmit={handleSubmit}>

        {currentStepIndex + 1} / {steps.length}<br />
            {step}
        <div className='w-full mt-auto flex items-baseline justify-between'>
            {!isFirstStep && <button type='button' onClick={back}>Back</button>}
            <button>{isLastStep ? 'Submit' : 'Next'}</button>
        </div>
        </form>
    </div>
  )
}

export default FormModal