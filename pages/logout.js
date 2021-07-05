import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { clearUserData } from '../lib/userAuth'

const Logout = () => {
  const router = useRouter()

  useEffect(
    () => {
      clearUserData()
      router.push('/login')
    },
    [ router ]
  )

  return null
}

export default Logout
