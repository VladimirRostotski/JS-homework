// Домашнее задание.№1 

let d = "Hi"
console.log(d,typeof d);
// 1
let str = "Привет",
    sum = 123,
    num = 15.8,
    flag = true,
    txt = "true";
    console.log('Тип данных значение "' + str + '":' ,typeof str);
    console.log('Тип данных значение "'+num+'":', typeof num);
    console.log('Тип данных значения "'+flag+'":', typeof flag);
    console.log('Тип данных значения "' +txt + '":', typeof txt);

    //2

    let a1 = 5 % 3,
        a2 = 3 % 5,
        a3 = 5 + '3',
        a4 = '5' - 3,
        a5 = 75 + 'кг',
        a6 = 785 * 653,
        a7 = 100 / 25
        a8 = 0 * 0,
        a9 = 0 / 2
        a10 = 89 / 0,
        a11 = 98 + 2,
        a12 = 5 - 98,
        a13 = (8 + 56 * 4) / 5,
        a14 = (9-12)*7 / (5+2),
        a15 = + "123",
        a16 =  1 || 0,
        a17 = false || true,
        a18 = true > 0;

        console.log(a1,typeof a1);
        console.log(a2,typeof a2);
        console.log(a3,typeof a3);
        console.log(a4,typeof a4);
        console.log(a5,typeof a5);
        console.log(a6,typeof a6);
        console.log(a7,typeof a7);
        console.log(a8,typeof a8);
        console.log(a9,typeof a9);
        console.log(a10,typeof a10);
        console.log(a11,typeof a11);
        console.log(a12,typeof a12);
        console.log(a13,typeof a13);
        console.log(a14,typeof a14);
        console.log(a15,typeof a15);
        console.log(a16,typeof a16);
        console.log(a17,typeof a17);
        console.log(a18,typeof a18);

    //3
    
    let width = 10,
        height = 23;
    let SPryam = width * height;
    console.log(SPryam,typeof SPryam)


/*4  Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром 
основания равным значению переменной a7 из задания 2, результат поместите в 
переменную VCilindra.*/

let HCilindra = 10,
    RCilindra = a7 / 2;
console.log(RCilindra);
let VCilindra = 3.14 * (RCilindra * RCilindra) * HCilindra;
console.log(VCilindra);

/*5  Найдите площадь круга (SKruga) с радиусом 5см (r). */
let RCircle = 5;
let SKruga = 3.14 * (RCircle * RCircle);
console.log(SKruga);

/*6  Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см 
(h). 
*/
let a = 5,
    b = 7,
    HTrap =10;
let STrap = (a + b) / 2 * HTrap;
console.log(STrap);

/*7  Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%), 
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно 
содержаться в переменной Pereplata. */

{
    let sum = 20000000,
        p = 0.1,
        years = 5;
    let Pereplata = (sum * p) * years;
    console.log(Pereplata);

}

/*8  Решите уравнения (найдите неизвестный x), где a = 8, b = 3: 
a+2(x-b)=16; 
b(x+15)=a+6x; 
x+2x+ax+bx=23780. */

{
    let a = 8,
        b = 3;
    let x = (16 - a + 2 * b) / 2;
    console.log(x);
}

/*b(x+15)=a + 6x
  bx+15b=a + 6x 
  bx = a + 6x - 15b
  bx - 6x = a - 15b
  x(b - 6) = a -15b
  x = a-15b/b - 6
*/

{
    let a = 8,
        b = 3;
    let x = a-15*b / b - 6;
    console.log(x);
}

/*
    x+2x+ax+bx=23780.
    3x+ ax + bx =23780
    x(3 + a +b) =23780
    x = 23780/3 + a + b
    */

{
    let a = 8,
        b = 3;
    let x = 23780 / 3 + a + b;
    console.log(x, typeof x);
}


//9  Выведите в консоль стихотворение (соблюдайте все переносы и абзацы): 

let string = `Бывало, спит у ног собака, 
костер занявшийся гудит, 
и женщина из полумрака 
глазами зыбкими глядит.


Потом под пихтою приляжет 
на куртку рыжую мою 
и мне, задумчивая, скажет:


"А ну-ка, спой!.."- и я пою. `;

console.log(string,typeof string);

/*10  Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по 
смыслу предложения (1 абзац, переменная text): 
*/
let str1 = "индо земля зашаталась под ногами-и вырос,",
    str2 = "и заревел он голосом диким…",
    str3 = "блеснула молния и ударил гром,",
    str4 = "а так какое-то чудище, страшное и мохнатое,",
    str5 = "как будто из-под земли, перед купцом:",
    str6 = "Он подошёл и сорвал аленький цветочек.",
    str7 = "зверь не зверь, человек не человек,",
    str8 = "В ту же минуту, безо всяких туч,";
    console.log(`${str6} ${str8} ${str3} ${str1} ${str5} ${str7} ${str4} ${str2}`,
      typeof `${str6} ${str8} ${str3} ${str1} ${str5} ${str7} ${str4} ${str2}`
    );



/* Домашнее задание.№2 
«Условный оператор if…else. Вложенные условия. Оператор 
выбора switch.» */

/* 1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.»*/

//  let firstName = prompt('как твоё имя?'),
//      age = prompt('Ваш возраст?'),
//      city = prompt('Ваш город?'),
//      phone = prompt('Ваш телефон?'),
//      email = prompt('Ваша эектронная почта?'),
//      company = prompt('В какой компании,вы работали?');
//     console.log(`${firstName}, ${age} , ${city}, ${phone}, ${email}, ${company}`);

/* 2. Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.». 
*/

//  age = prompt("Ваш возраст?");
// if(age == 32) {
//     console.log('Владимир,1992 года рождения.');
// }

// else if(age > 32){
//     console.log('НЕ НАЙДЕН!');
// }

// else if(age < 32){
//     console.log('Не ясно')
// }

/* 3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме 
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 
*/

let s = '400320';
if  (Number(s[0]) + Number(s[1]) + Number(s[2]) == Number(s[3])+ Number(s[4])+ Number(s[5])) {
    console.log('да');}
else {console.log('нет');}


/* 4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. 
 */
{
    let a = 3;
    if(a > 0) {console.log('Верно');}
    else {console.log('Неверно');}
}

/* 5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
квадрат. 
*/
{
    let a = 10,
        b = 2;
        console.log(a+b,a-b,a*b,a/b);
    let sum = a + b;
    if(sum > 1){console.log(sum * sum);}
}

/*6. Если переменная a больше 2 и меньше 11, или переменная b больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
'Неверно'. */
{
    let a = 14,
       b = 6;
       console.log(a + b, a - b, a * b, a / b);
    if(a > 2 && a < 11, b >= 6 && b < 14){
        console.log('Верно');
    }
    else{console.log('Неверно');}
}

/*7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). 
 */

// let n = prompt('Введите числот от 0 до 59');
//     if(n >= 0 && n <= 15){
//         console.log('Первая четверть');
//     }
//     else if(n >= 16 && n <= 30){
//         console.log('Вторая четверть');
//     }
//     else if(n >= 31 && n <= 45){
//         console.log('Третья четверть');
//     }
//     else if(n >= 46 && n <= 59){
//         console.log('Четвёртая четверть');
//     }
//     else {
//         console.log('Не знаю какя четверть)))');
//     }

/*8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). 
 */
// {
// let day = prompt('Введите число от 1 до 31');
//     if(day >= 1 && day <= 10){
//         console.log('Первая декада');
//     }
//     else if(day >= 11 && day <= 21){
//         console.log('Вторая декада')
//     }
//     else if(day >= 22 && day <= 31){
//         console.log('Третья декада')
//     }
//     else {
//         console.log('Нет версии, какая декада')
//     }
// }

/*9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно. 
 */
// {
// let days = prompt('Введите количество дней');
// let daysInYear = 365,
//     dayInMonth = 31,
//     daysInWeek =7,
//     hoursInDay = 24,
//     minutesInHour = 60,
//     secondsInMinute = 60;

// let years = days / daysInYear,
//     months = days / dayInMonth,
//     weeks = days / daysInWeek,
//     hours = days * hoursInDay,
//     minutes = hours * minutesInHour,
//     seconds = minutes * secondsInMinute;

//     if(years >= 1){
//         console.log('years',years)
//      }else{
//         console.log('Меньше года')
//      }

//      if(months >= 1){
//         console.log('months',months)
//      }else{
//         console.log('Меньше месяца')
//      }

//          if (weeks >= 1) {
//            console.log('weeks',weeks);
//          } else {
//            console.log("Меньше недели");
//          }

//          console.log(`hours`,hours);
//          console.log(`minutes`,minutes);
//          console.log(`seconds`,seconds);
// }


/* 10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */


// Запрашиваем у пользователя номер дня в году
    let dayOfYear = prompt("Введите день в году (от 1 до 365):");
//Определяем месяц
    if (dayOfYear <= 31) {
      month = 1;
      nameOftheMonth = 'Январь';
    } else if (dayOfYear <= 59) {
      month = 2;
      nameOftheMonth = 'Февраль';
    } else if (dayOfYear <= 90) {
      month = 3;
      nameOftheMonth = 'Март';
    } else if (dayOfYear <= 120) {
      month = 4;
      nameOftheMonth = 'Апрель';
    } else if (dayOfYear <= 151) {
      month = 5;
      nameOftheMonth = 'Май';
    } else if (dayOfYear <= 181) {
      month = 6;
      nameOftheMonth = 'Июнь';
    } else if (dayOfYear <= 212) {
      month = 7;
      nameOftheMonth = 'Июль';
    } else if (dayOfYear <= 143) {
      month = 8;
      nameOftheMonth = 'Август';
    } else if (dayOfYear <= 273) {
      month = 9;
      nameOftheMonth = 'Сентябрь';
    } else if (dayOfYear <= 304) {
      month = 10;
      nameOftheMonth = 'Октябрь';
    } else if (dayOfYear <= 334) {
      month = 11;
    } else if (dayOfYear <= 365) {
      month = 12;
      nameOftheMonth = 'Декабрь';
    }else {
        console.log('Некорректный день в году')
    }
    switch (month) {
      case 12:
      case 1:
      case 2:
        season = `Зима`;
        break;
      case 3:
      case 4:
      case 5:
        season = `Весна`;
        break;
      case 6:
      case 7:
      case 8:
        season = `Лето`;
        break;
    case 9:
    case 10:
    case 11:
        season=`Осень`
        break;
    }
    console.log(`Mесяц ${month} ${nameOftheMonth} . Пора года ${season}`);
