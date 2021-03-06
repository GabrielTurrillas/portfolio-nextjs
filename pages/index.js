import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles';
import {
  Hero,
  Works,
  Info,
  Technologies,
  BigTitle,
  Footer,
  derivAppWorksData,
  authSiteWorksData,
  thisSiteWorksData,
  pokeAppWorksData,
  mtgAppWorksData,
  frontEndInfoData,
  backEndInfoData,
  deployInfoData,
} from '../screens';
import {
  Navbar,
  Sidebar
} from '../components';
import { defaultData } from '../pages_data/home_data/data';


export default function Home() {
  const [english, setEnglish] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const toggleSwitch = () => {
    setEnglish(!english)
  }
  const {
    hero,
    technologies,
    infoTitle,
    technologiesTitle,
    worksTitle,
  } = defaultData

  return (
    <>
      <Head>
        <title>Gabriel Turrillas - Desarrollador Web</title>
        <meta name='description' content='Portafolios de Gabriel Turrillas. Desarrollador web. Portfolio of Gabriel Turrillas Web Developer' />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} english={english} toggleSwitch={toggleSwitch} />
      <Navbar setEnglish={setEnglish} toggle={toggle} english={english} toggleSwitch={toggleSwitch} />
      <Hero {...hero} english={english} />
      <Wrapper id='works'>
        <BigTitle {...worksTitle} english={english} />
        <Works {...mtgAppWorksData} src='/MTGAppSite.png' english={english} />
        <Works {...pokeAppWorksData} src='/PokemonSite.png' english={english} />
        <Works {...thisSiteWorksData} src='/ThisVerySite.png' english={english} />
        <Works {...authSiteWorksData} src='/AuthSite.png' english={english} />
        <Works {...derivAppWorksData} src='/DerivApp.png' english={english} />
      </Wrapper>
      <Wrapper id='habilities'>
        <BigTitle {...infoTitle} english={english} />
        <Info {...frontEndInfoData} src='/Frontend.svg' english={english} />
        <Info {...backEndInfoData} src='/Backend.svg' english={english} />
        <Info {...deployInfoData} src='/Deploy.svg' english={english} />
      </Wrapper>
      <Wrapper id='technologies'>
        <BigTitle {...technologiesTitle} english={english} />
        <Technologies {...technologies} src='/FrontendList.svg' english={english} />
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  background:${colors.background};
`