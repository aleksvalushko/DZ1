'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

/*let a1 = prompt('Обязательные статьи расходов', ''),
    a2 = prompt('Сумма расходов на обязательные статьи', ''),
    a3 = prompt('Обязательные статьи расходов', ''),
    a4 = prompt('Сумма расходов на обязательные статьи', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;*/



function chooseExpenses(){
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
}

chooseExpenses();

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

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный доход составляет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
    if( appData.moneyPerDay < 100){
        console.log("Минимальный уровень заработка!");
    } else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
        console.log("Средний уровень заработка!");
    } else if( appData.moneyPerDay > 1000){
        console.log("Высокий уровень заработка!");
    } else{
        console.log("Error!")
    }
}

detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма бюджета?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12*percent;
        alert("Ваш доход в месяц составляет: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses(){
    for( let i = 1; i < 4; i++){
        let b = prompt("Статья необязательных расходов?", '');

        if((typeof(b) === 'string') && (typeof(b) != null) && (b != '') && b.length < 50){
            appData.optionalExpenses[i] = b;
        } else{
            i--;
        }
    }
}

chooseOptExpenses();