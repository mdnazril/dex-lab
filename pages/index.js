import Head from 'next/head'
import Movielist from '../component/section/movielist'

export default function Home() {
  return (
    <>
    <Head>
      <title>Movie @mdnazril</title>
      {/* <meta /> */}
    </Head>
    <Movielist/>
    </>
  )
}
