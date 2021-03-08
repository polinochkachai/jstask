
// var ttselsia=prompt('Enter temperature in Celsius');
// let tfar= ttselsia* 1.8 + 32;
// alert(tfar);
// alert('Press OK');
// let name = 'Василий';
// let admin = name;
// alert(admin);
// console.log(admin);

// // Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// // если a и b положительные, вывести их разность;
// // если а и b отрицательные, вывести их произведение;
// // если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// let a=38,b=89;
// if (a>0&b>0){
// 	alert(a-b);
// } else if (a<0&b<0){
// 	alert(a*b);
// } else{
// 	alert(a+b)
// } 
// let c = 0;
// switch(c){
// 	case 0:
// 		alert(c)
// 		c++
// 	case 1:
// 		alert(c)
// 		c++
// 	case 2:
// 		alert(c)
// 		c++
	
// 	case 3:
// 		alert(c)
// 		c++
	
// 	case 4:
// 		alert(c)
// 		c++
	
// 	case 5:
// 		alert(c)
// 		c++
	
// 	case 6:
// 		alert(c)
// 		c++
	
// 	case 7:
// 		alert(c)
// 		c++
	
// 	case 8:
// 		alert(c)
// 		c++
// 	case 9:
// 		alert(c)
// 		c++
// 	case 10:
// 		alert(c)
// 		c++
// 	case 11:
// 		alert(c)
// 		c++
// 	case 12:
// 		alert(c)
// 		c++
// 	case 13:
// 		alert(c)
// 		c++
// 	case 14:
// 		alert(c)
// 		c++
// 	case 15:
// 		alert(c)
// 		c++
	
// }
// // Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
// function summa(a,b){
// 	alert(a+b)
// 	return a+b
// }
// function minus(a,b){
// 	alert(a-b)
// 	return a-b
// }
// function composion(a,b){
// 	alert(a*b)
// 	return a*b
// }
// function diverse(a,b){
// 	alert(a/b)
// 	return a/b
// }
// function mathOperation(arg1, arg2, operation){
// 	switch(operation){
// 		case "+":
// 			alert(arg1+arg2)
// 			return arg1+arg2
// 		case "-":
// 			alert(arg1-arg2)
// 			return arg1-arg2
// 	}

// }
// alert(summa(1,2))
// alert(minus(3,4))
// alert(composion(5,6))
// alert(diverse(7,8))
// alert(mathOperation(1,7,"+"))

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let n=100
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)) {
      break;
    } else {
      console.log(i);
      break;}
    }
}

// вывод десятков, единиц и сотен 
let a=999
let num={
	number:Math.round(Math.random() * max),
	units:0,
	tens:0,
	hundreds:0

}
if (num.number<=9){
	num.units=num.number;

}else if (num.number<=999){
	num.units = Math.floor(num.number % 10);
    num.tens = Math.floor(num.number / 10 % 10);
    num.hundreds = Math.floor(num.number / 100 % 10);
}else{
	num.number=0;
	console.log('Число больше 999')
}
console.log(num)


// cart functions
let price=0;
cart=[{name:'Product 1',price:280,amount:1},{name:'Product 2',price:300,amount:2}]
cart.push({name:'Product 3', price:300})
function countBasketPrice(cart){
	for( let i=0;i<cart.length;i++){
		price=price+cart[i][1]*cart[i][2];

	}
	return price 
}

