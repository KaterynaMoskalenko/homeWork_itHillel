'use strict';

let value=5;
console.log('I am ' + typeof value)

const value2='5';
console.log('I am ' + typeof value2);

const bigNumber = 1234567890123456789012345678901234567890n;
console.log('I am ' + typeof bigNumber);

let val_a = true
console.log('I am ' + typeof val_a);

let val_b;
console.log('I am ' + typeof val_b);

let id = Symbol();
console.log('I am ' + typeof id);

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false
console.log('Because i am '+typeof id+' '+ 'guaranteed unique identifier!!!')

const student_Ithillel = {
	 name: "Kate", 
	isProgrammier: false
	};

console.log('I am ' + typeof student_Ithillel);

let students_Ithillel = [...'Kate', 'Igor', 'Danilo', 'Nikita' ];
console.log('I am ' + typeof students_Ithillel);


/*===============null================*/
//     const input = prompt("Indicate anything...");
// function getAnything(){
//     if (input === null || input === "") {
//         return null;
//     }
// }
// console.log(getAnything())


/*+++  HW2  +++*/



let name = prompt('Enter your name, please', 'Kate');
let profession = prompt('Enter your specialty, please', 'developers');
let school = prompt('What courses did you complete as a developer?', 'itHillel')

let template_Strings = `
Hello, my name is ${name}
I'd like to become a ${profession}
I have currently been  studying at school ${school}
`;
console.log(template_Strings);

/* +++ HW3 +++ */

// let number = 10369;
// number =`1 0 3 6 9`
// console.log(number)
// let number_2 = `1\t0\t3\t6\t9`
// console.log(number_2)
// console.log((10369).toString().split('').join(' '))
// let num_Str = '10369';
// console.log(num_Str.length)//5;
// console.log(num_Str[0]+' '+num_Str[1]+' '+num_Str[2]+" "+num_Str[3]+' '+num_Str[4]);


