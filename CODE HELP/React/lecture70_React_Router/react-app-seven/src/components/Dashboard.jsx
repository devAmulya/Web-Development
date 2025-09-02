import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard page
      <br />
      <Outlet />
    </div>
  )
}

export default Dashboard
