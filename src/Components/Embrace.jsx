import React from 'react'
import {Button} from "@heroui/react";

function Embrace() {
  return (
     <>
        <section className='bg-[#002228] px-5'>
            <div className='flex justify-center py-20'>
                <div className='text-center '>
                    <h5 className='text-lg text-primary'>GET STARTED</h5>
                    <h2 className='text-4xl py-5'><i>Embrace </i><span className='font-bold'>the new era of</span> <i>outbound</i></h2>
                    <p className='text-lg max-w-xl text-secondary'>Wizia lets you train, activate, and optimize aiDRs. 
                    Take your outbound to new levels of performance and efficiency.</p>
                    <Button color="primary" radius="full" className='text-gray-900 w-full md:w-52 hover:scale-x-105 hover:shadow-md hover:bg-black hover:text-white hover:shadow-gray-500 duration-300 transition-all mt-12'>Sign Up for the Beta<i class="fa-solid fa-arrow-up-right-from-square"></i></Button>
                </div>
            </div>
        </section>
     </>
  )
}

export default Embrace;