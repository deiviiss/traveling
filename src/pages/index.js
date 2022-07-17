import Head from 'next/head';
import Hero from '@components/Hero'
import Carrucel from '@common/Carrucel';
import Destacados from '@components/Destacados';
import Footer from '@components/Footer';
import Faqs from '@components/Faqs';
import TabNav from '@common/TabNav';

export default function PlatziTravel() {
  const cards = [
    {
      id: 1,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 2,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 3,
      title: 'Nueva York',
      description: 'La gran manzana',
      bg: 'new_york',
    },
    {
      id: 4,
      title: 'Chicago',
      description: 'Como en las películas',
      bg: "url('/img/chicago.jpg')",
    },
    {
      id: 5,
      title: 'Yosemite',
      description: 'Un descanso del mundo',
      bg: "url('/img/chicago.jpg')",
    },
    {
      id: 6,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 7,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
    {
      id: 8,
      title: 'Noruega',
      description: 'Paisajes Increíbles',
      bg: 'norway',
    },
  ];
  return (
    <>
      <Head>
        <title>Traveling!</title>
        <meta name="description" content="Traveling App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-auto h-auto" >

        {/* Hero*/}
        <Hero />

        <div className="w-full h-auto md:px-1">

          {/* recomendados */}
          <Carrucel cards={cards} title={'Recomendados'} />

          {/* rentas destacadas*/}
          <Destacados />

          {/* faqs*/}
          <Faqs />
        </div>

      </div >
      <Footer />

      {/* tab_nav*/}
      <TabNav />
    </>
  )
}