import Cabecalho from '@/components/Cabecalho'
import Formulario from '@/components/Tutores/Formulario'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Tutor() {
  return (
    <>
      <Cabecalho />
      <Formulario />
    </>
  )
}
