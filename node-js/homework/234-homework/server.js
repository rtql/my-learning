const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  /* 
    TODO: напишите обработчик запроса.
    
    1. Ответом на запрос к /?message=<text> должна быть строка <text>.
       Статус ортвета - 200 (OK)
    2. Если параметр message не задан, в ответ должна быть выведена подсказка: "Передайте строку в параметре message GET-запроса".
       Статус ответа - 400 (BAD REQUEST)

    Подсказка: используйте ctx.assert, чтобы проверить наличие параметра message
    Подсказка: используйте ctx.query для доступа к параметрам GET-запроса
  */
    ctx.assert(ctx.query.message, 400, 'Передайте строку в параметре message GET-запроса')
    ctx.body = ctx.query.message
  }
)

module.exports = { app }


