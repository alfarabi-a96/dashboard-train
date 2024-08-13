import React from 'react'
import Layout from '@/components/layout'
import Chart from '@/components/chart/chart'
import {
  DashboardContainer,
  SectionContainer,
  TextContainer,
  TextWrapper
} from './styled'

const Dashboard: React.FC = () => {

  return (
    <Layout>
      <h1>Dashboard</h1>
      <>
        <DashboardContainer>
          <SectionContainer marginBottom='20px'>
            <TextContainer>
              <TextWrapper flex={1}>
                <text style={{ fontWeight: 'bold' }}>Division Name</text>
              </TextWrapper>
              <TextWrapper flex={7}>
                <text>A division</text>
              </TextWrapper>
            </TextContainer>
            <TextContainer>
              <TextWrapper flex={1}>
                <text style={{ fontWeight: 'bold' }}>Project Name</text>
              </TextWrapper>
              <TextWrapper flex={7}>
                <text>Sample project</text>
              </TextWrapper>
            </TextContainer>
          </SectionContainer>
          <SectionContainer>
            <TextContainer>
              <TextWrapper flex={1}>
                <text style={{ fontWeight: 'bold' }}>Project Start</text>
              </TextWrapper>
              <TextWrapper flex={7}>
                <text>xx-xx-xxxx</text>
              </TextWrapper>
            </TextContainer>
            <TextContainer>
              <TextWrapper flex={1}>
                <text style={{ fontWeight: 'bold' }}>Project End</text>
              </TextWrapper>
              <TextWrapper flex={7}>
                <text>xx-xx-xxxx</text>
              </TextWrapper>
            </TextContainer>
          </SectionContainer>
          <SectionContainer marginTop='70px' gap='50px' display='flex' flexDirection='column'>
            <div>
              <text style={{ fontWeight: 'bold' }}>Project Chart</text>
            </div>
            <div>
              <Chart />
            </div>
          </SectionContainer>
        </DashboardContainer>
      </>
    </Layout >
  )
}

export default Dashboard
