import React, { SyntheticEvent, useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import Layout from '@/components/layout'

const Roadmap: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Layout>
      <h1>Roadmap</h1>
      <Box sx={{ width: '100%' }}>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="dashboard tabs">
          <Tab label="Overview" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && <div>Overview Content</div>}
          {tabIndex === 1 && <div>Analytics Content</div>}
          {tabIndex === 2 && <div>Reports Content</div>}
        </Box>
      </Box>
    </Layout>
  )
}

export default Roadmap
