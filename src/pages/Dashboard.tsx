import React from 'react'
import Goals from '../components/Goals'
import TransactionHistory from '../components/TransactionHistory'
import OutComeStatics from '../components/OutComeStatics'
import NewTransaction from '../components/NewTransaction'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <div className='md:ml-64 p-4'>
      <div className="text-Suprema font-semibold md:text-[43px] text-[36px] text-[#404040]">Weekly sumup</div>
      <div className='text-Suprema font-normal md:text-[16px] text-[14px] text-[#AEAEAE]'>Get summary of your weekly online transactions here.</div>
    {/* <Goals/> */}
    {/* <TransactionHistory/> */}
    {/* <OutComeStatics/> */}
    {/* <NewTransaction/> */}  
    <Cards/>
    </div>
  )
}

export default Dashboard