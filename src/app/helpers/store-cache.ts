export const loadState = () => {
  const serializedData = localStorage.getItem('state')
  if (!serializedData)return null
  return JSON.parse(serializedData)
}

export const saveState = (state) => {
  localStorage.setItem('state', JSON.stringify(state))
}
