import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gabriel Turrillas - Desarrollador Web</title>
        <meta name='description' content='Portafolios de Gabriel Turrillas. Desarrollador web. Portfolio of Gabriel Turrillas Web Developer' />
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
