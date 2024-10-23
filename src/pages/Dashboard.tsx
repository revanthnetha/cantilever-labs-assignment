import React from 'react'
import Goals from '../components/Goals'
import TransactionHistory from '../components/TransactionHistory'

const Dashboard = () => {
  return (
    <div className='md:ml-64'>Dashboard
    {/* <Goals/> */}
    <TransactionHistory/>
    </div>
  )
}

export default Dashboard