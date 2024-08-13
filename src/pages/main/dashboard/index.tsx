import React from 'react'
import Layout from '@/components/layout'
import Chart from '@/components/chart/chart'

const Dashboard: React.FC = () => {

  return (
    <Layout>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ backgroundColor: 'white', display: 'flex', flex: 1, height: '83vh', padding: '20px', flexDirection: 'column', borderRadius: '10px' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <text style={{ fontWeight: 'bold' }}>Division Name</text>
              <text>A division</text>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <text style={{ fontWeight: 'bold' }}>Project Name</text>
              <text>Sample project</text>
            </div>
          </div>
          <div style={{ marginTop: '30px', gap: '50px', display: 'flex', flexDirection: 'column' }}>
            <div>
              <text style={{fontWeight: 'bold'}}>Project Chart</text>
            </div>
            <div>
              <Chart />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', display: 'flex', flex: 1, height: '83vh', borderRadius: '10px' }}>
          aaaaa
        </div>
      </div>
    </Layout >
  )
}

export default Dashboard
