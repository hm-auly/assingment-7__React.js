import React from 'react'
import {Button} from "@heroui/react";

function Hiro() {
  return (
     <>
        <section className='bg-[url(/Banner.png)] bg-no-repeat bg-cover md:px-24 px-5 py-24 '>
            <div>
                <div className='text-center md:text-start'>
                    <h5 className='text-primary'>AI SDRs &#40; aiDRs &#41;</h5>
                    <h1 className='text-4xl md:text-5xl lg:text-5xl font-semibold py-8'>More <i className='font-medium'>leads</i>,<br /> less <i className='font-medium'>people</i>.</h1>
                    <p className='text-secondar pb-7 max-w-sm'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                    <Button color="primary" radius="full" className='text-gray-900 w-full md:w-52 hover:scale-x-105 hover:shadow-md hover:shadow-primary transition-all'>Sign Up for the Beta<i class="fa-solid fa-arrow-up-right-from-square"></i></Button>
                </div>
            </div>
        </section>
     </>
  )
}

export default Hiro;