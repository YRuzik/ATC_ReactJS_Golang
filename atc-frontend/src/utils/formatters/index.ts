export const numWithZero = (num: number) => {
    return (num > -10) && (num < 10) ? `0${num}` : num.toString()
}