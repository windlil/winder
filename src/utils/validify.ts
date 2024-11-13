export const validJSON = (json: string | undefined) => {
  if (!json) return false
  try {
    JSON.parse(json)
    return true
  } catch(e) {
    return false
  }
}