import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Technology() {
  return (
    <div className="py-20 min-h-screen bg-gradient-to-b from-white to-white text-black">
      <Head>
        <title>LYRA AI - The Operating System for AI Agents</title>
        <meta name="description" content="LYRA AI - The Operating System for AI Agents" />
      </Head>

      <Navbar variant="technology" />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">自主技术创新</h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            我们致力于利用人工智能和集体智慧推动技术发展。让我们重新定义人工智能时代的创新方式。
          </p>
          
          <div className="flex justify-between max-w-4xl mx-auto">
            <div className="bg-black/5 p-6 rounded-xl backdrop-blur-sm w-1/3 mx-2">
              <h2 className="text-4xl font-bold mb-2">45,000+</h2>
              <p className="text-gray-500">开发者</p>
            </div>
            <div className="bg-black/5 p-6 rounded-xl backdrop-blur-sm w-1/3 mx-2">
              <h2 className="text-4xl font-bold mb-2">$25m+</h2>
              <p className="text-gray-500">研发投入</p>
            </div>
            <div className="bg-black/5 p-6 rounded-xl backdrop-blur-sm w-1/3 mx-2">
              <h2 className="text-4xl font-bold mb-2">2k+</h2>
              <p className="text-gray-500">开源项目</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">我们的优势</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-black/5 p-8 rounded-2xl hover:bg-black/20 transition-all">
              <h3 className="text-xl font-bold mb-4">智能研发</h3>
              <p className="text-gray-500">AI系统助力技术研发，提高创新效率</p>
            </div>
            <div className="bg-black/5 p-8 rounded-2xl hover:bg-black/20 transition-all">
              <h3 className="text-xl font-bold mb-4">协作创新</h3>
              <p className="text-gray-500">开发者社区共同创造，激发无穷可能</p>
            </div>
            <div className="bg-black/5 p-8 rounded-2xl hover:bg-black/20 transition-all">
              <h3 className="text-xl font-bold mb-4">数据驱动</h3>
              <p className="text-gray-500">基于海量数据的智能决策系统</p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">常见问题</h2>
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2">我们的研发方向是什么？</h3>
              <p className="text-gray-500">我们专注于人工智能、区块链、Web3.0等前沿技术领域。</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2">如何参与我们的项目？</h3>
              <p className="text-gray-500">欢迎加入我们的开发者社区，贡献代码，分享创意。</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 