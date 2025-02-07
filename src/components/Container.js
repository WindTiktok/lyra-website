import styles from '../styles/container.module.css'

export function HeroContainer({ children }) {
  return (
    <div className="fixed top-[110px] left-0 w-full px-4 text-center bg-transparent text-xl z-10">
      <div className={styles.pageContainer}>
        {children}
      </div>
    </div>
  )
}

export function PageContainer({ children }) {
  return <div className={styles.pageContainer}>{children}</div>
}

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}