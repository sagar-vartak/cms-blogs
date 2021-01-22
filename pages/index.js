import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Blogs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="/blogs">Bloggers.js!</a>
          </h1>

          <p className={styles.description}>Get started by Just One Click</p>

          <div className={styles.grid}>
            <a href="/blogs" className={styles.card}>
              <h3>BLOGS &rarr;</h3>
              <p>A Website for BLOGS</p>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
