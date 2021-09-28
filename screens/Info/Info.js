import styled from 'styled-components';
import {
  GlobalStyles,
  device,
  externalPadding,
  colors,
} from '../../styles';
import {
  TextArea,
  ImgArea,
} from '../../components';

const Info = ({
  textAreaData,
  imgAreaData,
  textStart,
  src,
  english
}) => {
  return (
    <>
      <GlobalStyles />
      <Container textStart={textStart}>
        <TextArea {...textAreaData} textStart={textStart} english={english} />
        <ImgArea {...imgAreaData} src={src} textStart={textStart} />
      </Container>
    </>
  )
}

export default Info

const Container = styled.div`
  display: grid;
  grid-template-areas:'TextArea'
                      'ImgArea';
  height: 100%;
  background: ${colors.background};
  color: white;
  padding:0 ${externalPadding.mobileS};
  text-align:center;
  @media ${device.mobileM} {
    padding: ${externalPadding.mobileM};
    row-gap:3rem;
  }
  @media ${device.mobileL} {
    padding:2rem ${externalPadding.mobileL};
    row-gap:2rem;
  }
  @media ${device.tablet} {
    padding-top:3rem;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:${({ textStart }) => (textStart ? `'TextArea ImgArea'` : `'ImgArea TextArea'`)};
  }
  @media ${device.laptopL}{
    padding:0 ${externalPadding.laptopL};
    padding-top:9rem;
  }
  @media ${device.desktop}{
    padding:4rem ${externalPadding.desktop};
    padding-top:5rem;
  }
`
