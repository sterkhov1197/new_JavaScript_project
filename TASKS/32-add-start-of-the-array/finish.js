/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]

// Напишите код здесь
myArray.unshift(100,"Hello")

console.log(myArray) // [100, "Hello", true, null]

myArray[10]="abc"
console.log(myArray)
console.log(myArray.length)