'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let q1 = prpmpt('Введите обязательную статью расходов в этом месяце', '');
let q2 = prompt('Во сколько обойдется?', '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        q1: q2,
        q1: q2
    },
    optionalExpensis: null,
    income: null,
    savings: false
}

alert(money / 30);

console.log(money);