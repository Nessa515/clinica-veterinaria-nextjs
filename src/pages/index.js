import Head from 'next/head'
import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho'
import Table from '@/components/Table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinica Veterinária</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cabecalho />
      <Table />
    </>
  )
}
