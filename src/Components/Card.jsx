import React from 'react'

function Card() {
    const items = [
        {
            img: "/Images/item1.svg",
            head: "Youre in Control",
            des: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            img: "/Images/item2.svg",
            head: "Infinitely Scalable",
            des: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            img: "/Images/item3.svg",
            head: "YIncredibly Flexible",
            des: "aTrain an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        }
    ];
  return (
    <>
        <section className='bg-[#002228] md:px-24 px-5 py-20'>
            <div className='flex md:gap-14 gap-20 justify-center items-center flex-col md:flex-row'>
                {items.map((cardInfo, i ) => (
                    <div key={i}>
                        <img src={cardInfo.img} alt="" />

                        <h3 className='max-w-md text-2xl font-semibold py-5'>{cardInfo.head}</h3>
                        <p className='max-w-lg text-secondary'>{cardInfo.des}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Card;