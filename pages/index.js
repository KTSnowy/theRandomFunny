import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TheRandomFunny() {

  const [joke, setJoke] = useState("")

  const getMoreFunny = () => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&format=txt')
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&format=txt')
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>The Random Funny & Fun Facts</title>
        <meta name="description" content="Random jokes and fun facts" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/theFunnyLogo.svg" height={64} width={192} />
        </h1>

        <p className={styles.description}>
          {joke}
        </p>

        <div className={styles.grid}>
          <button onClick={getMoreFunny} className={styles.card}>
            <h2>New Joke &rarr;</h2>
          </button>

          <button className={styles.card}>
            <h2>Fun Fact &rarr;</h2>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.ktsnowy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Gabriel Gonçalves
        </a>
      </footer>
    </div>
  )
}
