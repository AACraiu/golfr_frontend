import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { setUserData } from '../lib/userAuth'

const Login = () => {
  const router = useRouter()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then(res => res.json())
        .then(data => {
          if (data.errors) {
            alert(data.errors[0])
          } else {
            const userData = data.user
            setUserData(userData)
            router.push('/')
          }
        })
        .catch(e => {
          alert(e)
        })
    },
    [ email, password, router ]
  )

  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <div className="border-solid border border-black p-10 py-5 h-55 rounded shadow-md">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <div>
              <input
                type="text" id="email" name="email" className="h-8"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="font-bold">
              Password 312312
            </label>
            <div>
              <input
                type="password" id="password" name="password" className="h-8"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="password"
              />
            </div>
          </div>

          <button className="w-full p-1 bg-gray-200 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
