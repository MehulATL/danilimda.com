import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>danilimda.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="welcome to my danilimda.com!" />
        <p className="description">
          Dani Limda, Ahmedabad, Gujarat, India.
        </p>
      </main>

      <Footer />
    </div>
  )
}
