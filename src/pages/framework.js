import Navbar from '../components/Navbar';
import { PageContainer } from '../components/Container';
import styles from '../styles/framework.module.css'

export default function FrameworkPage() {
  return (
    <div className={styles.frameworkPage}>
      <Navbar />
      
      <PageContainer>
        <section className="hero-section py-20 text-center">
          <h1 className="text-5xl font-bold py-10">The AI Agent 操作系统</h1>
          <div className="stats">
            <div>
              <span>11.4k+</span>
              <p>Stars</p>
            </div>
            <div>
              <span>3.2k+</span>
              <p>Forks</p>
            </div>
            <div>
              <span>378</span>
              <p>贡献者</p>
            </div>
          </div>
        </section>

        <section className="official-section rounded-3xl bg-white/10 my-10">
          <h2>官方资源</h2>
          <div className="grid">
            <div className="card">
              <h3>Github</h3>
              <p>贡献代码到elizaOS。完全开源。</p>
            </div>
            <div className="card">
              <h3>贡献者</h3>
              <p>查看所有贡献者资料，按排名查看。</p>
            </div>
            <div className="card">
              <h3>排行榜</h3>
              <p>通过开发贡献来获得奖励。</p>
            </div>
          </div>
        </section>

        <section className="community-section rounded-3xl bg-white/10 my-10">
          <h2>社区资源</h2>
          <div className="grid">
            <div className="card">
              <h3>了解elizaOS</h3>
              <p>基于我们的文档和最新内容，向Eliza提问。</p>
            </div>
            <div className="card">
              <h3>Mee.fun</h3>
              <p>构建、托管和发布自治代理。</p>
            </div>
            <div className="card">
              <h3>角色生成器</h3>
              <p>生成具有可自定义个性的Eliza AI角色JSON。</p>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  )
} 