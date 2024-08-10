import React from 'react'
import Layout from '@/components/layout'
import Chart from '@/components/chart/chart'

const Dashboard: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Layout>
      <h1>Dashboard</h1>
      <Chart/>
    </Layout>
  )
}

export default Dashboard
