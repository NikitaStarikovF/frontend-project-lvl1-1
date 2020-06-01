#!/usr/bin/env node

import {brain} from '../index.js';
import readlineSync from 'readline-sync';
import {getRandomInt} from '../utils.js';


const condition = 'Answer "yes" if the number is even, otherwise answer "no"';

const generate = () => {
	let number1 = getRandomInt(1, 100);
	let number2 = getRandomInt(1, 100);
	let resArr = [];
	let arr = ['+', '-', '*'];
	let znak = arr[getRandomInt(0, 2)];
	let math = 0;
	switch(znak) {
        case '+':
        math = number1 + number2;
        break;
        case '-':
        math = number1 - number2;
        break;
        case '*':
        math = number1 * number2;
    }
    let resVirazh = String(number1) + String(znak) + String(number2);
	resArr.push(resVirazh);	
	console.log('Question: '+ resVirazh);
	resArr.push(math);
	return resArr;
}


const startBrainCalc = () => {
	brain(condition, generate);
}

export default startBrainCalc;