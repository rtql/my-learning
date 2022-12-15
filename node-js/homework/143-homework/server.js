const http = require('http')

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`)
  console.log(url.searchParams)
  
  /* 
    TODO: напишите обработчик запроса.
    
    1. Ответом на запрос к /?message=<text> должна быть строка <text>.
       Статус ортвета - 200 (OK)
    2. Если параметр message не задан, в ответ должна быть выведена подсказка: "Передайте строку в параметре message GET-запроса".
       Статус ответа - 400 (BAD REQUEST)

    Подсказка: используйте поле searchParams в объекте url для доступа к параметрам GET-запроса
  */

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  const text = url.searchParams.get('message')
  if (!text) {
    res.statusCode = 400
    res.end("Передайте строку в параметре message GET-запроса")
  }
  res.statusCode = 200
  res.end(text)
});

module.exports = { server }
