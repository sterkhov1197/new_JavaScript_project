/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1
const MAX = 99

const myNumbers = [23, 72, 81, 17, 23, 83]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min+1) ) + min;
  }

function newArray(array){
   let updatedArray=[...array]
   let randNum=getRndInteger(MIN, MAX)
   for(const el of updatedArray){
    if(el!=randNum){
        updatedArray.push(randNum)
        break
    }
   }
   return updatedArray
} 

let randNum=newArray(myNumbers)
console.log("Old array: "+myNumbers)
console.log("New array: "+randNum)