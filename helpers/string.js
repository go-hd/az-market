export const comma = (number) => {
  return String(number).replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    '$1,',
  )
}