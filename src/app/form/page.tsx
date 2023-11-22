import React from 'react'

import FormModal from '@/components/form/FormModal'

const FormPage = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <FormModal open={true} />
    </div>
  )
}

export default FormPage