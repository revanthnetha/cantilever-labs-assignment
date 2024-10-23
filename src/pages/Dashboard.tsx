import React from 'react'
import Goals from '../components/Goals'
import TransactionHistory from '../components/TransactionHistory'
import OutComeStatics from '../components/OutComeStatics'
import NewTransaction from '../components/NewTransaction'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <div className='md:ml-64'>Dashboard
    {/* <Goals/> */}
    {/* <TransactionHistory/> */}
    {/* <OutComeStatics/> */}
    {/* <NewTransaction/> */}  
    <Cards/>
    </div>
  )
}

export default Dashboard