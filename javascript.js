'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '') ,
    q1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    q2 = prompt('Во сколько обойдется?', '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        'Обязательные статьи расходов': q1,
        'Сумма расходов на обязательные статьи': q2
    },
    optionalExpensis: {},
    income: [],
    savings: false
}

alert(money / 30);

