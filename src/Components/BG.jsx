import React from 'react'

function BG() {
    const list = [
        {
            des: "Quick to ramp"
        },
        {
            des: "Easy to optimize"
        },
        {
            des: "Quick to scale up"
        },
        {
            des: "Works with all your existing tools"
        }
    ]
  return (
    <>
        <section className='bg-[url(/Auly.png)] bg-no-repeat bg-cover  py-24 md:px-28 px-5 '>
            <div className='flex justify-center  md:items-center flex-col'>
                <div className=' py-10'>
                    <h1 className='text-4xl md:text-5xl font-bold '>Train your aiDR on your...</h1>
                    <i className='text-4xl md:text-5xl font-semibold  block py-6 text-primary'>prefered email st|</i>
                    <p className='text-secondary'>Youre in control. Train your aiDR on elements of your Marketing strategy.</p>
                </div>
               <div className='md:w-[600px] flex  md:justify-center'>
               <div className='grid grid-cols-1 md:grid-cols-2  '>
                 {list.map((Litem, i) => (
                    <div key={i} className='basis-2'>
                        <div className='flex gap-3 items-center py-1 '>
                           <i class="fa-regular fa-circle-check text-primary"></i>
                           <p className='text-primary'>{Litem.des}</p>
                        </div>
                    </div>
                ))}
               </div>
               </div>
            </div>
        </section>
    </>
  )
}

export default BG