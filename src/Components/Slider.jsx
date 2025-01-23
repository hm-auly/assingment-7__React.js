import React from 'react'
import { useState } from 'react';


 

function Slider2() {
    
    const slid = [
        {
            img: "/Images/Group 9.svg",
            des: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 1",
            name: "John Doe",
            bayo: "Chief Strategy Officer @ Company"
        },
        {
            img: "/Images/Group 9.svg",
            des: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 2",
            name: "John Doe",
            bayo: "Chief Strategy Officer @ Company"
        },
        {  
            img: "/Images/Group 9.svg",     
            des: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 3",
            name: "John Doe",
            bayo: "Chief Strategy Officer @ Company"
        },
    ];

    const [curentIndex, setCurentIndex] = useState(0);

    const PrevSlid = () => {
        setCurentIndex((previndex) => (previndex === 0 ? slid.length - 1: previndex - 1 ))
    }

    const NextSlid = () => {
        setCurentIndex((previndex) => (previndex === slid.length - 1 ?  0 : previndex + 1 ));
    }

    const {img, des, name, bayo} = slid[curentIndex]

  return (
     <>

     <section className='bg-[#002228] md:px-24 px-5 py-20'>
       
            <div className='flex justify-center  md:gap-20 gap-5 items-center text-center '>
            <button className='bg-[#96ACAF33] p-1 rounded-sm hover:bg-gray-700' onClick={PrevSlid}><i class="fa-solid fa-arrow-left fa-xl "></i></button>
                {/* {slid.map((sliderInfo, index) => ( */}
                    <div  className=' flex flex-col justify-center items-center'>
                        <div className='w-12 flex justify-center items-center'>
                        <img className='' src={img} alt="" />
                        </div>
                        <p className='text-secondary text-xl py-10 text-center md:max-w-2xl  '>{des}</p>
                        <h4 className='font-bold text-md'>{name}</h4>
                        <p className='text-sm text-primary'>{bayo}</p>
                    </div>
                

                    <button className='bg-[#96ACAF33] p-1 rounded-sm hover:bg-gray-700' onClick={NextSlid}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
            </div>
            
        </section>

     </>
  )
}

export default Slider2;