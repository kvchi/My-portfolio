import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
export default function progressBar() {
  return (
    <div className='z-50 items-center w-max p-10 gap-10 mx-auto md:mx-5 ml-10'>
        <div className='w-96'>
        <p className="text-primary font-semibold">Html</p>
        <ProgressBar completed={85}
        bgColor='#7AB2B2'
        animateOnRender={true} />
        </div>
        <div className='w-96'>
        <p className="text-primary font-semibold">Javascript</p>
        <ProgressBar completed={80}
        bgColor='#7AB2B2'
        animateOnRender={true} />
        </div>
        <div className='w-96'>
        <p className="text-primary font-semibold">ReactJs</p>
        <ProgressBar completed={92}
        bgColor='#7AB2B2'
        animateOnRender={true} />
        </div>
    </div>
  )
}

