import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, GlobalStyles, device } from '../../styles';

const PrimaryButton = ({
  english,
  engButtonText,
  buttonText,
  path,
  ankerTag = false
}) => {
  return (
    <>
      {ankerTag ? (
        <>
          <GlobalStyles />
          <A href={path}>{english ? engButtonText : buttonText}</A>
        </>
      ) : (
        <>
          <GlobalStyles />
          <Link href={path} passHref>
            <A>{english ? engButtonText : buttonText}</A>
          </Link>
        </>
      )
      }
    </>
  )
}

export default PrimaryButton

const A = styled.a`
  text-decoration:none;
  background:${colors.primary};
  width:fit-content;
  height:fit-content;
  padding: 0.8rem 1rem;
  border-radius:50px;
  color:black;
  font-size:0.7rem;
  font-weight:bold;
  transition: .1s;
  cursor: pointer;
  margin-right:1rem;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  @media ${device.mobileL}{
    padding: 1rem 2rem;
    font-size:1rem;
  }
`
