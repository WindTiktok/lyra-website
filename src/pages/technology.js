import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/container.module.css'

export default function Technology() {
  return (
    <div>
      <Head>
        <title>技术创新 - 未来从这里开始</title>
        <meta name="description" content="探索尖端科技，引领创新未来" />
      </Head>

      <Navbar />

      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1>自主技术创新</h1>
          <p>我们致力于利用人工智能和集体智慧推动技术发展。让我们重新定义人工智能时代的创新方式。</p>
          
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <h2>45,000+</h2>
              <p>开发者</p>
            </div>
            <div className={styles.statItem}>
              <h2>$25m+</h2>
              <p>研发投入</p>
            </div>
            <div className={styles.statItem}>
              <h2>2k+</h2>
              <p>开源项目</p>
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <h2>我们的优势</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>智能研发</h3>
              <p>AI系统助力技术研发，提高创新效率</p>
            </div>
            <div className={styles.featureCard}>
              <h3>协作创新</h3>
              <p>开发者社区共同创造，激发无穷可能</p>
            </div>
            <div className={styles.featureCard}>
              <h3>数据驱动</h3>
              <p>基于海量数据的智能决策系统</p>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <h2>常见问题</h2>
          <div className={styles.faqItem}>
            <h3>我们的研发方向是什么？</h3>
            <p>我们专注于人工智能、区块链、Web3.0等前沿技术领域。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>如何参与我们的项目？</h3>
            <p>欢迎加入我们的开发者社区，贡献代码，分享创意。</p>
          </div>
        </section>
      </main>
    </div>
  )
} 