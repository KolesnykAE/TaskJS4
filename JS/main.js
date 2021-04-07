// 1) створити функцію яка приймає масив та виводить його

    // let array = ["monkey", 38, true, "friend", 9];
    //
    // function reflectArray(arr) {
    //     console.log(arr);
    // }
    // reflectArray(array)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
//     Для виведення використати попередню функцію.

    // function createRandom(length, min, max) {
    //     let arrRandom = [];
    //     for (let i = 0; i < length; i++) {
    //         arrRandom.push(Math.floor(Math.random() * (max - min+1)) + min);
    //     }
    //     return arrRandom
    // }
    //
    // let newArray = createRandom(5,1, 30);
    // reflectArray(newArray);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    // function createMin(a, b, c) {
    //     let min = 0;
    //     if (a < b && a < c) min = a;
    //     if (b < a && b < c) min = b;
    //     if (c < a && c < b) min = c;
    //     console.log(min);
    //     return min
    // }
    //
    // createMin(5, 1, 18)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

    // function createMax(x, y, z) {
    //     let max = 0;
    //     if (x >= y && x >= z) max = x;
    //     if (y >= x && y >= z) max = y;
    //     if (z >= y && z >= x) max = z;
    //
    //     console.log(max);
    //     return max
    // }
    //
    // createMax(57, 111, 8)

// 5) створити функцію яка повертає найбільше число з масиву

    // function createMaxArray(price) {
    //     let max = price[0];
    //     for (let i = 0; i < price.length; i++) {
    //        if (price[i] >= max) {
    //            max = price[i];
    //        }
    //     }
    //     console.log(max);
    //     return max
    // }
    //
    // createMaxArray([3, 44, 53, 8, 17, 1, 78, 83, 33, 10])

// 6) створити функцію яка повертає найменьше число з масиву

    // function createMinArray(numbers) {
    //     let min = numbers[0];
    //     for (let i = 0; i < numbers.length; i++) {
    //         if (numbers[i] < min) {
    //             min = numbers[i];
    //         }
    //     }
    //     console.log(min);
    //     return min
    // }
    //
    // createMinArray([37, 21, 58, 3, 25])

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

    // function sumArray(num) {
    //     let sum = 0;
    //     for (const numElement of num) {
    //         sum += numElement;
    //     }
    //     console.log(sum);
    //     return sum
    // }
    //
    // sumArray([37, 21, 58, 3, 25])

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

   //  function createMidChek(price) {
   //      let sum = 0;
   //      for (let i = 0; i < price.length; i++) {
   //         sum += price[i];
   //      }
   //      let midChek = sum / price.length;
   //      console.log(midChek)
   //      return midChek
   //  }
   //
   // createMidChek([37, 21, 58, 3, 25])

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

    // let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
    //
    //
    // function returnArrKeys(array) {
    //     let arrKeys = [];
    //     for (let i = 0; i < array.length; i++) {
    //        arrKeys.push(Object.keys(array[i]))
    //
    //     }
    //     return arrKeys.flat()
    // }
    //
    // console.log(returnArrKeys(array))

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

    // function returnValueArr(valueArr) {
    //     let value = [];
    //     for (let i = 0; i < valueArr.length; i++) {
    //         for (const valueKey in valueArr[i]) {
    //             value.push(valueArr[i][valueKey])
    //         }
    //     }
    //     return value
    // }
    //
    // let valueArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
    // console.log(returnValueArr(valueArr))

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

    // function sumElements(array1, array2) {
    //     let result = [];
    //     for (let i = 0; i < array1.length; i++) {
    //        result.push(array1[i] + array2[i]);
    //     }
    //     return result
    // }
    //
    // console.log(sumElements([1,2,3,4],[2,3,4,5]))

// =========

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);

    // function returnMin() {
    //     let min = arguments[0];
    //     let max = arguments[0];
    //     for (const element of arguments) {
    //         if(element <= min) min = element;
    //         if(element >= max) max = element;
    //     }
    //     console.log(max);
    //     return min;
    // }
    //
    // let minOfArr = returnMin(5, 401, 93, 52, 7);
    // console.log(minOfArr);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.



// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

    // function changeElement(arr,i) {
    //     let item = arr[i];
    //     arr[i] = arr[i+1];
    //     arr[i+1] = item;
    //
    //     return arr;
    // }
    //
    // let change = changeElement([1, 2, 3, 4, 5],3);
    // console.log(change)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

    // function changeZeroEnd(array) {
    //     let zero = [];
    //     let number = [];
    //     for (const item of array) {
    //         if (item === 0) {
    //             zero.push(0);
    //         } else {
    //             number.push(item)
    //         }
    //     }
    //     return number.concat(zero);
    // }
    //
    // let array1 = changeZeroEnd([1,0,6,0,3]);
    // console.log(array1)
    // console.log(changeZeroEnd([0, 1, 2, 3, 4]));
    // console.log(changeZeroEnd([0,0,1,0]));

// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

    // let n1 = '    Harry       Potter      '
    // let n2 = '    Ron       Whisley      '
    // let n3 = '    Hermione       Granger      '
    //
    // let correct = name
    // function correctName(name) {
    //     name = name.trim();
    //     let temp1 = name.indexOf(' ');
    //     let temp2 = name.lastIndexOf(' ');
    //     let slice = name.slice(temp1, temp2);
    //     name = name.replace(slice, '');
    //     return name;
    // }
    //
    // console.log(correctName(n1));
    // console.log(correctName(n2));
    // console.log(correctName(n3));

// ******************* НАЗАД В МИНУЛЕ *********************** //

// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

    // function createText() {
    //     let text = document.createElement('div');
    //     text.innerHTML = "Hello owu";
    //     document.body.appendChild(text);
    // }
    //
    // createText();

// Створити функцію яка :
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

    // function createArguments(tag, text) {
    //     let arg = document.createElement(tag);
    //     arg.innerText = text;
    //     document.body.appendChild(arg)
    // }
    // createArguments('div', 'Hello owu')


