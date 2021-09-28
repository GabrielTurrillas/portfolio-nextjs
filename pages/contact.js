import React from 'react';
import styled from 'styled-components';
import {
  GlobalStyles,
  colors,
  externalPadding,
  device
} from '../styles';

const ContactPage = () => {

  return (
    <>
      <GlobalStyles />
      <Container>
        <HeroBg>
          <VideoBg autoPlay loop muted src='https://portafoliosvideobackground.s3.amazonaws.com/backgroundlowerres2.mp4' type='video/mp4' />
        </HeroBg>
        <Pannel>
          <H1>Contact</H1>
          <InfoArea>
            <Label>Phone/WhatsApp</Label>
            <Info>+569 73970772</Info>
          </InfoArea>
          <InfoArea>
            <Label>Email</Label>
            <Info>gabrielturrillasdev@gmail.com</Info>
          </InfoArea>
        </Pannel>
      </Container>
    </>
  )
}

export default ContactPage;

const Container = styled.div`
  position:relative;
  height:100vh;
  padding:0 ${externalPadding.mobileS};
  display:flex;
  align-items:start;
  justify-content:center;
`

const HeroBg = styled.div`
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100%;
  height:100%;
  overflow:hidden;
  z-index:-2;
`

const VideoBg = styled.video`
  width:100%;
  height:100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colors.background};
`

const Pannel = styled.div`
  background: transparent;
  color:white;
  height:13rem;
  width:15rem;
  margin-top:3rem;
  @media ${device.mobileM}{
    margin-top:4rem;
  }
  @media ${device.tablet}{
    margin-top:6rem;
  }
`

const InfoArea = styled.div`
  margin:1rem 0;
  @media ${device.mobileM}{
    margin:2rem 0;
  }
  @media ${device.mobileL}{
    margin:2.5rem 0;
  }
`

const H1 = styled.h1`
  font-size:1.5rem;
  @media ${device.mobileM}{
    font-size:2rem;
  }
  @media ${device.mobileL}{
    font-size:2.3rem;
  }
`

const Label = styled.p`
  font-weight: bold;
  @media ${device.mobileM}{
    font-size:1.2rem;
  }
  @media ${device.mobileL}{
    font-size:1.3rem;
  }
`

const Info = styled.p`
  font-size:0.9rem;
  margin:0.2rem 0;
  @media ${device.mobileM}{
    font-size:1.1rem;
  }
`