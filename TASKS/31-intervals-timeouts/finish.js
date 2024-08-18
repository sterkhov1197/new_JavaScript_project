/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let num=1
/*
let interval= setInterval(()=>{
    console.log(`Message number is ${num}`)
    num++
    if(num==6){
        clearInterval(interval)
    }
},2000)*/

setTimeout(()=>{
    console.log(`Message number is ${num}`)
    num++

        setTimeout(()=>{
            console.log(`Message number is ${num}`)
            num++

            setTimeout(()=>{
                console.log(`Message number is ${num}`)
                num++

                setTimeout(()=>{
                    console.log(`Message number is ${num}`)
                    num++

                    setTimeout(()=>{
                        console.log(`Message number is ${num}`)
                        num++
                    },2000)

                },2000)

        },2000) 

    },2000)

    
})