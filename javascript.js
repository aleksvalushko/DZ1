'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpensis: {},
    income: [],
    savings: false
}

/*let a1 = prompt('Обязательные статьи расходов', ''),
    a2 = prompt('Сумма расходов на обязательные статьи', ''),
    a3 = prompt('Обязательные статьи расходов', ''),
    a4 = prompt('Сумма расходов на обязательные статьи', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;*/

for(let i = 0; i < 2; i++){
    let a = prompt('Обязательные статьи расходов', ''),
        b = prompt('Сумма расходов на обязательные статьи', '');

    if( (typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) &&
        (a != '') && (b != '') && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    } else{
        i--;
    }
}

/*
var i =0;
while( i < 2){
    let a = prompt('Обязательные статьи расходов', ''),
        b = prompt('Сумма расходов на обязательные статьи', '');

    if( (typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) &&
        (a != '') && (b != '') && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    } else{
        i--;
    }
    i++;
}
*/

/*var i =0;
do{
    let a = prompt('Обязательные статьи расходов', ''),
        b = prompt('Сумма расходов на обязательные статьи', '');

    if( (typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) &&
        (a != '') && (b != '') && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    } else{
        i--;
    }
    i++;
} while ( i < 2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный доход составляет: " + appData.moneyPerDay);

if( appData.moneyPerDay < 100){
    console.log("Минимальный уровень заработка!");
} else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
    console.log("Средний уровень заработка!");
} else if( appData.moneyPerDay > 1000){
    console.log("Высокий уровень заработка!");
} else{
    console.log("Error!")
}