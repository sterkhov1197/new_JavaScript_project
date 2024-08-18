/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars= [{
    carBrand:"BMW",
    price:30000,
    isAvailiableForSale:true,
},
{
    carBrand:"Mersedes-Bend",
    price:50000,
    isAvailiableForSale:false,
},
{
    carBrand:"Audi",
    price:40000,
    isAvailiableForSale:true,
},]

cars.push({
    carBrand:"Wolksvagen",
    price:10000,
    isAvailiableForSale:true
})

console.log(cars)