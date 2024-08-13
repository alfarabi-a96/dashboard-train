import styled from '@emotion/styled'

export const DashboardContainer = styled('div')`
  display: flex;
  height: 83vh;
  padding: 20px;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
`

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: row;
`

export const TextWrapper = styled.div<{ flex: number }>`
  display: flex;
  ${({ flex }) => `flex: ${flex}`}  
`
export const SectionContainer = styled.div<{
  display?: string,
  marginTop?: string,
  marginBottom?: string,
  gap?: string,
  flexDirection?: string
}>`
  ${({ display }) => display && `display: ${display}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ gap }) => gap && `gap: ${gap}`};
`
