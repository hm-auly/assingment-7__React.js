import React from 'react'

function Partners() {
    const our = [
        {Image: "/Images/our3.svg"},
        {Image: "/Images/our4.svg"},
        {Image: "/Images/our1.svg"},
        {Image: "/Images/our2.svg"},
        {Image2: "/Images/our5.svg"}

    ]
  return (
    <>
        <section className='md:px-24 bg-[#07292F] py-5 '>
        <h4 className='text-2xl text-primary text-center py-5'>our trusted partners</h4>
             <div className='grid grid-cols-2 md:grid-cols-3  justify-items-center lg:grid-cols-5 gap-5 md:px-28'>
                {our.map((ourInfo, i) => (
                    <div key={i} className='flex items-center '>
                        <img  src={ourInfo.Image} alt="" />
                        <img className='hidden md:block' src={ourInfo.Image2} alt="" />
                    </div>
                ))}
            </div>
            <div className='flex justify-center md:hidden'>
                <img className='' src="/Images/our5.svg" alt="" />
            </div>
        </section>
    </>
  )
}

export default Partners;