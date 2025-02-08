import Navbar from '../components/Navbar';
import { PageContainer } from '../components/Container';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black text-white">
      <Navbar />
      
      <PageContainer>
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-10">The AI Agent 操作系统</h1>
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
              <p>贡献者</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 rounded-3xl p-8 my-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">官方资源</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Github</h3>
              <p className="text-gray-300">贡献代码到elizaOS。完全开源。</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">贡献者</h3>
              <p className="text-gray-300">查看所有贡献者资料，按排名查看。</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">排行榜</h3>
              <p className="text-gray-300">通过开发贡献来获得奖励。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 rounded-3xl p-8 my-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">社区资源</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">了解elizaOS</h3>
              <p className="text-gray-300">基于我们的文档和最新内容，向Eliza提问。</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">Mee.fun</h3>
              <p className="text-gray-300">构建、托管和发布自治代理。</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">角色生成器</h3>
              <p className="text-gray-300">生成具有可自定义个性的Eliza AI角色JSON。</p>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  )
} 