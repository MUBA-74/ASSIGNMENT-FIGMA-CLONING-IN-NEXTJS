import React from 'react';
import {Rye} from 'next/font/google';
const fontRye = Rye({ weight: '400', subsets: ['latin'] });


const Header = () => {
  return (
    <div> 

    <div className= {`${fontRye} text-[#FFFFFF] bg-[#A29875]  w-[1920px] h-[25px] m-full justify-start place-items-start `} > MANZZARI </div> 
        
    </div>
        
  )
}

export default Header;