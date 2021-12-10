import 'bootstrap-icons/font/bootstrap-icons.css'

import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getToken } from '../lib/userAuth'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(
    () => {
      if (router.pathname !== '/login' && !getToken()) {
        router.push('/login')
      }
    },
    [ router ]
  )

  return <Component {...pageProps} />
}

export default MyApp
