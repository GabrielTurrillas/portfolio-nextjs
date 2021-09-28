import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  colors,
  externalPadding,
} from '../../styles';
import {
  PrimaryButton,
  SecondaryButton
} from '..';

const ButtonArea = ({
  pagePrimaryButtonData,
  codeSecondaryButtonData,
  english,
  textStart = true,
}) => {
  return (
    <>
      <GlobalStyles />
      <Container textStart={textStart}>
        <Col1 textStart={textStart}>
          <PrimaryButtonA {...pagePrimaryButtonData} english={english} />
          <SecondaryButton {...codeSecondaryButtonData} english={english} />
        </Col1>
        <Col2>

        </Col2>
      </Container>
    </>
  )
}

export default ButtonArea;

const Container = styled.div`
  grid-area: ButtonArea;
  display:grid;
  width:100%;
  height:100%;
  grid-template-areas:'Col1' 
                      'Col2';
  grid-template-rows:2fr 1.5fr;
  grid-template-columns: 1fr;
  background:${colors.background};
  padding:0 ${externalPadding.mobileS};
  @media ${device.mobileL}{
    padding:0 ${externalPadding.mobileL};
  }
  @media ${device.tablet}{
    grid-template-areas:${({ textStart }) => textStart ? `'Col1 Col2'` : `'Col2 Col1'`};
    grid-template-rows:1fr;
    grid-template-columns: 50% 50%;
  }
  @media ${device.laptopL}{
    padding:0 ${externalPadding.laptopL};
    padding-top:1rem;
  }
  @media ${device.desktop}{
    padding:0 ${externalPadding.desktop};
  }
`

const PrimaryButtonA = styled(PrimaryButton)`
  margin-right:1rem;
`

const Col1 = styled.div`
  display:flex;
  grid-area:Col1;
  justify-content:center;
  width:100%;
  @media ${device.tablet} {
    width:100%;
    justify-content:${({ textStart }) => textStart ? 'start' : 'center'};
  }
`

const Col2 = styled.div`
  grid-area:Col2;
  @media ${device.tablet} {
    
  }
`