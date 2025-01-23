import React from 'react'

function Footer() {
  return (
    <>
      <section className='bg-[#07292F] md:px-24 px-5 py-8'>
        <div className='flex justify-between items-center gap-8 flex-col md:flex-row'>
            <div>
                <img src="/Images/Logo2.svg" alt="" />
            </div>
            <div>
                <h1 className='text-secondary text-xl text-center md:text-start'>Copyright © 2025 Wizia. All rights reserved.</h1>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer