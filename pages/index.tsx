import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap mandetory overflow-scroll z-0'>
      <Head>
        <title>Pauls Porfolio</title>
      </Head>
    
    <Header/>

    <section id="hero" className='snap-center'>
      <Hero />
    </section>






    </div>
  )
}

export default Home;
