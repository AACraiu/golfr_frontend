import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUsername } from '../lib/userAuth'
import { getUserId } from '../lib/userAuth'

const Layout = ({ children, home }) => {
  const [ username, setUsername ] = useState('')
  useEffect(() => setUsername(getUsername()), [])
  const [ id, setUserId ] = useState('')
  useEffect(() => setUserId(getUserId()), [])

  return (
    <>
      <header className="flex flex-row w-full px-10 py-2 shadow">
        <span className="h-8 items-center space-x-6">
          <span className="text-2xl">Golfr 🏌️</span>
          <span className="text-xl">
            {home ? (
                <span className="text-xl">Home</span>
              ) : (
                <Link href="/">
                  <a>Home</a>
                </Link>
              )}
          </span>
        </span>
        <span className="h-8 items-center text-xl ml-auto">
          <Link href={`/golfers/${id}`}>
            <a>{username}</a>
          </Link>
          <span className="text-sm">
            {' ('}
            <Link href={'/logout'}>
              <a className="underline text-blue-700">logout</a>
            </Link>
            {')'}
          </span>
        </span>
      </header>
      <div className="px-10 py-2">
        {children}
      </div>
    </>
  )
}

export default Layout
