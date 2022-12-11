/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */
const sum = function() {
    /* возвращает сумму аргументов */
       const args = Array.from(arguments)
       return args.reduce((acc, val) => acc + val)
       }
const mul = function() {
        /* возвращает произведение аргументов */
       const args = Array.from(arguments)
       return args.reduce((acc, val) => acc * val)
       }
const avg = function() {
        /* возвращает среднее арифметическое аргументов */
       const args = Array.from(arguments)
       return sum(...args) / args.length
       }

module.exports = {
    sum,
    mul,
    avg
}