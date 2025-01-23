import React from 'react'

function Rest() {
    const count = [
        {
            persen: "32%",
            des: "Improvement in Open Rates"
        },
        {
            persen: "75%",
            des: "Improvement in Ramp Time"
        },
        {
            persen: "35%",
            des: "Improvement in Meetings Booked"
        },
    ]
  return (
     <>
        <section className='md:bg-[url(/RestBanner.png)] bg-[url(/Auly.png)] bg-no-repeat bg-cover md:px-24 py-20 px-5 '>
            <div>
                <div className='max-w-xl'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Allocate effort where your reps make an inpact.</h1>
                    <p className='text-3xl md:text-4xl text-primary py-5'><i>Let us handle the rest.</i></p>
                    <p className='text-secondary text-xl'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
                </div>

                <div className='flex gap-10 mt-24 flex-col md:flex-row'>
                    {count.map((counter, i) => (
                        <div key={i.id} className=''>
                            <p className='text-3xl font-bold text-primary '>{counter.persen}</p>
                            <p className='text-secondary md:max-w-[250px] text-2xl'>{counter.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     </>
  )
}

export default Rest