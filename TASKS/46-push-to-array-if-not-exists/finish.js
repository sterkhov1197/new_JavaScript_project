/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

const myNumbers = [123, 50, 27]

function pushIfUnique(inputArray,newElement){
    let result= inputArray.every((element)=>{
        return element !== newElement
    })

    if(result){
        myNumbers.push(newElement)
    }else{
        console.log(`${newElement} already in array`)
    }
}

function pushIfUnique(inputArray,newElement){

}

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]
