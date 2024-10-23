import React from 'react'
import Goals from '../components/Goals'
import TransactionHistory from '../components/TransactionHistory'
import OutComeStatics from '../components/OutComeStatics'
import NewTransaction from '../components/NewTransaction'

const Dashboard = () => {
  return (
    <div className='md:ml-64'>Dashboard
    {/* <Goals/> */}
    {/* <TransactionHistory/> */}
    {/* <OutComeStatics/> */}
    <NewTransaction/>
    </div>
  )
}

export default Dashboard