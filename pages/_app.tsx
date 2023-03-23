import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'

export default function App({ Component, pageProps }: AppProps) {
  return<>
<Head>
        <title>NewsApp</title>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <script src="https://kit.fontawesome.com/497af858a8.js" crossOrigin="anonymous"></script> 
        
        
      </Head>
<Navbar/>
<div className='cointainer'><SearchBar/></div>
<Component {...pageProps} />
</>
}
