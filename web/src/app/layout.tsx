import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto,Bai_Jamjuree as BaiJamjuree} from 'next/font/google'

const roboto = Roboto({subsets:['latin'], variable: '--font-roboto'}) //variable cria uma variavel no css 
const baiJamjuree = BaiJamjuree({subsets:['latin'], weight: '700', variable: '--font-baiJamjuree'})// Bai_Jamjuree nao tem flex, é necessário entao passar um peso para essa fonte

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e Typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
