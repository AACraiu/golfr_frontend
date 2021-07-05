const DATA_KEY = `golfr-data-${process.env.NEXT_PUBLIC_BASE_URL}`

const getUserField = field => {
  const data = localStorage.getItem(DATA_KEY)
  if (!data) {
    return undefined
  }
  const json = JSON.parse(data)
  return json[field]
}

export const getToken = () => getUserField('token')
export const getUsername = () => getUserField('name')
export const getUserId = () => getUserField('id')

export const setUserData = data => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data))
}

export const clearUserData = () => {
  localStorage.removeItem(DATA_KEY)
}
