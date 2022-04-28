import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="welcome to my danilimda.com!" />
        <p className="description">
          site maintained by mehul patel.
        </p>
      </main>

      <Footer />
    </div>
  )
}
