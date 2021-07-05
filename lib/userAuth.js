const TOKEN_KEY = `golfr-token-${process.env.NEXT_PUBLIC_BASE_URL}`

export const getToken = () => (
  localStorage.getItem(TOKEN_KEY)
)

export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
