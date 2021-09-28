import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, device } from '../../styles';


const ImgArea = ({
  src,
  imgWidth,
  textStart = true }) => {
  return (
    <>
      <GlobalStyles />
      <Container textStart={textStart}>
        <Img imgWidth={imgWidth} src={src} />
      </Container>
    </>
  )
}

export default ImgArea

const Container = styled.div`
  grid-area: ImgArea;
  display: flex;
  justify-content:${({ textStart }) => textStart ? `end` : `start`};
  padding:2rem 0;
  @media ${device.mobileM} {
    padding:0;
  }
`

const Img = styled.img`
  width: ${({ imgWidth: { mobileS } }) => mobileS};
  align-self:end;
  height:auto;
  border-radius:10px;
  @media ${device.tablet}{
    width: ${({ imgWidth: { tablet } }) => tablet};
  }
  @media ${device.laptopL}{
    width: ${({ imgWidth: { laptopL } }) => laptopL};
  }
`
