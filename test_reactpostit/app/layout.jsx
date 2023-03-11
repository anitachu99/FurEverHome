import './globals.css';
import Nav from './auth/Nav';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather&family=Montserrat&display=swap" rel="stylesheet" />
      </head>
      <body className='mx-4 md:mx-48 xl:mx-96'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
