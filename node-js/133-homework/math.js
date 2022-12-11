/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */
module.exports = {
    sum: function(a=0, b=0, c=0, d=0) {
     /* возвращает сумму аргументов */
        return a + b + c + d
        },
    mul: function(a=1, b=1, c=1, d=1) {
         /* возвращает произведение аргументов */
        return a * b * c * d
        },
    avg: function(a=0, b=0, c=0, d=0) {
         /* возвращает среднее арифметическое аргументов */
        let quantity = 2
        if (c !== 0) {quantity = 3}
        if (d !== 0) {quantity = 4}
        return (a + b + c + d) / quantity
        },
}