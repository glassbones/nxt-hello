import Head from 'next/head'
import styles from './index.module.scss'

export default ({ props })=> (

  <div>

    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className={styles.testy} >Hello World</h1>

  </div>

)

