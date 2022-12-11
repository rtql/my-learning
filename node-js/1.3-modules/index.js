const data = require('./users.json')
const { stringify: stringifyUser } = require('./users')

data.forEach(user => {
  const formattedUserStr = stringifyUser(user)
  console.log(formattedUserStr)
})