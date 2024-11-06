import React from 'react';
import {Libre_Bodoni} from "next/font/google";
import Image from "next/image";
const fontLibreBodoni = Libre_Bodoni({ weight: '700', subsets: ['latin'] });
import Header from "../Components/header";


const page = () => {
  return ( 
    <div>  

<div>
  
  <Header></Header>

</div> 


<Image src="/rs-group-wrap ⏵ rs-group.jpg" alt="hero-section" width="300" height="300" className='justify-between items-center float-right  m-20'/>

<h1 className={`${fontLibreBodoni} font-bold text-[#000000] size-10 w-[496px] h-[189px] justify-around p-32 mb-2 `}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>  
<p className=' text-gray-600 w-[902px] h-[147px]  p-32 -mt-40 '> An example of intricate workmanship and detail, elegant
          necklaces and long and short chains from a part of our 
          desirable collection.</p>

<button className='bg-[#A29875] gap-10 text-white w-[288px] h-[58px] justify-center p-2 m-32 -mt-40 mb-2'>Explore Now</button>
    
    </div>
  )
}

export default page