// this function will print fizz if the number is divisible by 3
export const isFizz = (num: number): string => {
  if (num % 3 === 0) return 'Fizz'
  return ''
}

// this function will print buzz if the number is divisible by 5
export const isBuzz = (num: number): string => {
  if (num % 5 === 0) return 'Buzz'
  return ''
}
