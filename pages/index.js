import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gladstar Gifted and Talented School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://blog.gladstar.sch.ng">Gladstar Gifted and Talented School!</a>
        </h1>

        <p className={styles.description}>
          Facilitating Functional Education For The Next Innovators entrepreneurs and leaders{' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="https://play.google.com/store/apps/dev?id=5244432553974148442" className={styles.card}>
            <h3>About Our Educational Apps;</h3>
            <p>Find in-depth information about Our Educational Apps</p>
          </a>

          <a href="https://imdvvfcbtrfewysxgrnr.supabase.co" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Subscribe and Learn via our interactive courses with quizzes!</p>
          </a>

          <a
            href="https://blog.gladstar.sch.ng/p/our-privacy-policy-statement.html?m=1"
            className={styles.card}
          >
            <h3>Our Privacy Policy &rarr;</h3>
            <p></p>
          </a>

          <a
            href="https://blog.gladstar.sch.ng/p/data-deletion-policy.html"
            className={styles.card}
          >
            <h3>Data Deletion Policy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
