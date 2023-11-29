import React from 'react'
import './global.css'
import Header from '@/components/Header'
import Products from '@/components/Products'

const layout = ({children}) => {
  return (
    <>
    <head>
        <title>Ipar Russia</title>
      </head>
      <html lang="en" className="!scroll-smooth">
        <body>
            <Header/>
            <Products/>
        </body>
        <script src="https://cdn.tailwindcss.com"></script>
      </html>
    </>
  )
}

export default layout