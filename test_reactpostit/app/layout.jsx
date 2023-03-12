import './globals.css';
import Nav from './auth/Nav';
import { Monsieur_La_Doulaise, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["400","700"],
  variable: "--font-montserrat",
})

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${montserrat.variable} bg-gray-200`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
