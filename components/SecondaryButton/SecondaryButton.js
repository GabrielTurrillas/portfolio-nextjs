import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { GlobalStyles, colors, device } from '../../styles';

const SecondaryButton = ({
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

export default SecondaryButton;

const A = styled.a`
  padding: 0.7rem 0.9rem;
  border:2px solid ${colors.primary}; 
  width:fit-content;
  height:fit-content;
  border-radius:50px;
  color: ${colors.primary};
  font-size:0.7rem;
  font-weight: bold;
  text-decoration:none;
  transition: .1s;
  cursor: pointer;
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