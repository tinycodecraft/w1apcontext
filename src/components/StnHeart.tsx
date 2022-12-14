import styled from '@emotion/styled'
import { useMantineTheme } from '@mantine/core'
import React from 'react'
import { HeartProps } from './Gob'

const HeartStyleElement = styled.svg<HeartProps>`
  display: block;
  margin: 3rem auto;
  fill: ${(props)=> props.color};    
`


export default function StnHeart() {
    const theme = useMantineTheme()
  return (
    <HeartStyleElement  color={theme.other.colors.primary}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="38px"
    height="35px"
    viewBox="0 0 38 35"
    version="1.1"    
    >
          <g>
            <path d="M27.6617245,0 C23.6258225,0 20.1656768,2.45818023 18.6933857,5.95832977 C17.2210947,2.45818023 13.760949,0 9.72542087,0 C4.68979662,0 0.54809007,3.82653606 0.0500982738,8.73093275 C0.0168240472,9.05769313 0,9.38968766 0,9.72542087 C0,21.5418839 14.5015809,27.1188686 18.6933857,35 C22.8851906,27.1192424 37.3867715,21.5422577 37.3867715,9.72542087 C37.3867715,9.38968766 37.3699474,9.05769313 37.3366732,8.73093275 C36.8383076,3.82653606 32.6969749,0 27.6617245,0 Z" />
          </g>        
    </HeartStyleElement>
  )
}
