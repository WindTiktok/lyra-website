import Head from 'next/head';
import Navbar from '../components/Navbar';
import { PageContainer } from '../components/Container';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black text-white">
      <Head>
        <title>LYRA AI - The Operating System for AI Agents</title>
        <meta name="description" content="LYRA AI - The Operating System for AI Agents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <PageContainer>
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-10">The AI Agent Operating System</h1>
          <div className="flex justify-center gap-8 mb-20">
            <div className="bg-white/10 px-8 py-4 rounded-lg">
              <span className="text-3xl block mb-2">11.4k+</span>
              <p>Stars</p>
            </div>
            <div className="bg-white/10 px-8 py-4 rounded-lg">
              <span className="text-3xl block mb-2">3.2k+</span>
              <p>Forks</p>
            </div>
            <div className="bg-white/10 px-8 py-4 rounded-lg">
              <span className="text-3xl block mb-2">378</span>
              <p>Contributors</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 rounded-3xl p-8 my-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">Official Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Github</h3>
              <p className="text-gray-300">Contribute code to elizaOS. Fully open source.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Contributors</h3>
              <p className="text-gray-300">View all contributor profiles and rankings.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
              <p className="text-gray-300">Earn rewards through development contributions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 rounded-3xl p-8 my-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Learn about elizaOS</h3>
              <p className="text-gray-300">Ask Eliza based on our documentation and latest content.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Mee.fun</h3>
              <p className="text-gray-300">Build, host, and publish autonomous agents.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Character Generator</h3>
              <p className="text-gray-300">Generate Eliza AI character JSON with customizable personalities.</p>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  )
} 