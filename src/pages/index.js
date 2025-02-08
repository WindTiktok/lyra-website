import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import { HeroContainer } from '../components/Container';

const Home = () => {  return (
    <div className="relative min-h-screen">
      <div className="background-overlay">
        <div className="background-image"></div>
      </div>
      <Head>
        <title>LYRA AI - The Operating System for AI Agents</title>
        <meta name="description" content="LYRA AI - The Operating System for AI Agents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar variant="home" />
      <div className="relative z-10">
        <HeroContainer>
          <p className="text-white text-7xl font-bold">LYRA AI</p>
        </HeroContainer>
        <HeroSlider />
      </div>
    </div>
  );
};

export default Home;
