import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Technology() {
  return (
    <div className="py-20 min-h-screen text-black">
      <Head>
        <title>LYRA AI - The Operating System for AI Agents</title>
        <meta name="description" content="LYRA AI - The Operating System for AI Agents" />
      </Head>

      <Navbar variant="technology" />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Autonomous Investing by Al Agents</h1>
          <p className="text-base md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto px-4">
            We are committed to driving technological development using artificial intelligence and collective intelligence. Let's redefine innovation in the AI era.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
            <div className="p-4 md:p-8 flex items-center">
              <p className="text-sm md:text-base text-gray-500 font-bold text-left">In the basement of the MIT library, LYRA discovered the professor's unpublished paper titled "Predicting BTC Volatility Using the Breastline Function"—a formula that later became the core of $LYRA's Alpha engine.</p>
            </div>
            <div className="top-8 relative">
              <img src="/lyra.png" className="from-gray-50 mask-image-gradient-to-b" alt="LYRA" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="mb-20 p-1 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-12">Multimodal Data Engine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4">
            <div className="bg-slate-50 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-black/5 min-h-[240px] md:min-h-[320px]">
              <img className="w-1/5 md:w-1/6 mb-4" src="/data.png" alt="Data" />
              <h3 className="text-lg md:text-xl font-bold mb-2">On-chain Data</h3>
              <p className="text-gray-500">Monitoring of Large Transaction Flows on the Solana Blockchain (10,000+ USDC) </p>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-black/5 min-h-[240px] md:min-h-[320px]">
              <img className="w-1/5 md:w-1/6 mb-4" src="/sentiment.png" alt="Sentiment" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Sentiment Data</h3>
              <p className="text-gray-500">Twitter/X Crypto Topic Sentiment Index (Based on BERT-Large Model)</p>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-black/5 min-h-[240px] md:min-h-[320px]">
              <img className="w-1/5 md:w-1/6 mb-4" src="/macro.png" alt="Macro" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Macro Signals</h3>
              <p className="text-gray-500">CME Bitcoin Futures Premium Rate + Nasdaq Volatility Index (VIX)</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">AI Decision-Making Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl min-h-[200px] md:min-h-[220px] hover:bg-black/5 transition-all hover:shadow-lg border border-gray-100">
              <p className="text-gray-500 text-lg leading-relaxed">Three-layer LSTM Network to Capture Temporal Features</p>
            </div>
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl min-h-[200px] md:min-h-[220px] hover:bg-black/5 transition-all hover:shadow-lg border border-gray-100">
              <p className="text-gray-500 text-lg leading-relaxed">Reinforcement Learning Framework (PPO Algorithm) for Dynamic Optimization of Trading Strategies</p>
            </div>
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl min-h-[200px] md:min-h-[220px] hover:bg-black/5 transition-all hover:shadow-lg border border-gray-100">
              <p className="text-gray-500 text-lg leading-relaxed">Output Layer Integrated with Monte Carlo Dropout for Uncertainty Quantification</p>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-10 bg-slate-50 rounded-3xl my-10 backdrop-blur-sm shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8">On-chain Execution Layer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4">
            <div className="p-4 md:p-5 bg-white rounded-xl md:rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Smart Contracts</h3>
              <ul className="list-disc list-inside text-gray-500">
                <li>Gas-free Transaction Routing Built on Solana Sealevel Runtime</li>
                <li>Integration with Jupiter DEX Aggregator for Optimal Slippage Control</li>
              </ul>
            </div>
            <div className="p-4 md:p-5 bg-white rounded-xl md:rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Risk Control</h3>
              <ul className="list-disc list-inside text-gray-500">
                <li>Dynamic Stop-loss Module (ATR Volatility-based Adaptive Threshold)</li>
                <li>Blacklisted Address Filtering (Real-time Synchronization with Chainalysis Sanction List)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-4 md:p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 
                className="text-xl font-semibold mb-3 flex items-center cursor-pointer" 
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling;
                  content.classList.toggle('hidden');
                  const svg = e.currentTarget.querySelector('svg');
                  svg.classList.toggle('rotate-180');
                }}
              >
                <span className="mr-3">我们的研发方向是什么？</span>
                <svg className="w-5 h-5 ml-auto transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </h3>
              <div className="faq-content hidden text-gray-600 leading-relaxed">
                <p>我们专注于人工智能、区块链和Web3.0等前沿技术。我们的AI代理基于Eliza框架，可以在多平台交互，具备区块链交互能力。</p>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <h3 
                className="text-xl font-semibold mb-3 flex items-center cursor-pointer" 
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling;
                  content.classList.toggle('hidden');
                  const svg = e.currentTarget.querySelector('svg');
                  svg.classList.toggle('rotate-180');
                }}
              >
                <span className="mr-3">如何参与我们的项目？</span>
                <svg className="w-5 h-5 ml-auto transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </h3>
              <div className="faq-content hidden text-gray-600 leading-relaxed">
                <p>加入我们的开发者社区，贡献代码并分享想法。通过我们的DAO平台，您可以参与决策，影响项目发展方向。</p>
                <div className="mt-4 flex gap-3">
                  <a href="/join" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    立即加入
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}