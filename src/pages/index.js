import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

const Home = () => {  return (
    <div className="bg-black">
      <Head>
        <title>LYRA AI</title>
        <meta name="description" content="elizaOS - The Operating System for AI Agents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSlider />
    </div>
  );
};

export default Home;
