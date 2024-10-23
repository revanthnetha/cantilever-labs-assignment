import React from 'react'
import GoalsCard from './GoalsCard'
import { GoalsCardData } from '../data/data'
import { plus } from '../assets'

const Goals = () => {
  return (
    <div>
        <div className='font-Suprema flex gap-1 font-semibold text-[20px] text-[#404040] items-center mb-4'>
            Goals
            <img src={plus} alt='plus-icon' className='w-[24px] h-[24px]'/>
        </div>
        <div className='flex gap-2 '>
        {GoalsCardData.map((item,index)=>(
            <GoalsCard key={index} value={item.value} name={item.name} date={item.date} img={item.img}/>
        ))}
        </div>
    </div>
  )
}

export default Goals