 export const isEqToday = (date) => {
  today.getDate() == new Date(date).getDate
}

export const daysSince = (date) => {
return  Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 *24)) 
}
export const formatDateShort = (date) => {
  return new Date(date).toLocaleTimeString("en-US", {month: "short", day: "numeric", year: "numeric" })
}

export const mapDays = (startDate, callback) => {
  const start = new Date(startDate)
  const end = new Date()

  const acc = []

  for (let i = new Date(start); i<= end; i.setDate(i.getDate() + 1)) {
acc.push(callback(new Date(i)))
  }
  return acc
}
export const checkCompleted = (date) => {
  const check = new Date(date).toDateString()
  return arr.some((el) => 
  new Date(el).toDateString() == check)
}