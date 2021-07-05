import { useState, useCallback } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { setToken } from '../lib/userAuth'

const Login = () => {
  const router = useRouter()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // const { data, error } = useSWR([
  //   `${process.env.NEXT_PUBLIC_API_URL}/login`,
  //   {
  //     email,
  //     password,
  //   }
  // ])
  // // console.log(data)
  // // console.log(error)

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
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors[0])
        } else {
          const token = data.user.token
          console.log(token)
          setToken(token)
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
      <div className="border-solid border border-black p-10 py-5 h-55 rounded">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <div>
              <input type="text" id="email" name="email" className="h-8"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password">
              Password
            </label>
            <div>
              <input type="password" id="password" name="password" className="h-8"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full p-1 bg-gray-200 rounded-lg shadow-md">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
