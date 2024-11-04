import { customAlphabet } from 'nanoid'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
const alphabet_code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'

export const createUniid = () => {
  return customAlphabet(alphabet, 12)()
}

export const createCode = () => {
  return customAlphabet(alphabet_code, 12)()
}