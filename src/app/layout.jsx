import React from 'react'
import './global.css'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const layout = ({children}) => {
  return (
    <>
    <head>
        <title>МАГАЗИН ИПАР В РОССИИ</title>
      </head>
      <html lang="en" className="!scroll-smooth">
        <body>
            <Header/>
            <Hero/>
            <Products/>
            <Footer/>
        </body>
        <script src="https://cdn.tailwindcss.com"></script>
      </html>
    </>
  )
}

export default layout