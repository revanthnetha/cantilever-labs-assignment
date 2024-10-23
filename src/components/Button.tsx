import React from 'react'
import { ButtonInput } from '../types/types'

const Button = ({icon,name}:ButtonInput) => {
  return (
    <div>
         <button className="w-[160px] h-[36px] bg-[#FFC145] rounded-[14px] flex gap-1  justify-center items-center">
          <text className="font-sans font-semibold text-[12px]  ">
            {name}
          </text>
          <img src={icon} alt="to-icon" />
        </button>
    </div>
  )
}

export default Button