/* console.log('Hello World') index.html */

//*********************LECTURE: Variatble and Data Type******************************************** 

/* -----------------Note about Js Data Type---------------------------
	Number: Floating point number, for decimals and integers.
	String: Sequence of characters, used for text. 
	Boolean: Logical data type that can only be true or false.
	Undefined: Data type of variable which does not have a value yet. 
	Null: Also means 'non-existent'.
*/


/*
var name = 'John';
console.log(name);

var lastName = 'Vang';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge= true;
console.log(fullAge);
*/ 

//********************LECTURE: Variable Mutation and Type Coercion******************************* 
/*
var name = 'John';
var age = 28;
console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'software engineer';
isMarried = false;

console.log(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");

age = 'thirty six';
job= 'driver';

console.log(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");

var lastName = prompt('waht is the last name?');
console.log(lastName);


alert(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried + ".");
*/

//****************************LECTURE: Operators************************************************
/*
var now = 2018
var birthYear = now - 29;

birthYear = now - 29 * 2;
// 2018 - 58
//1960
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26
//assignment move "right-to-left"

ageJohn++;     //this is the short hand of: ageJohn = ageJohn + 1;
ageMark *= 2; //"                        ": ageMark = ageMark * 2; 

console.log(ageJohn);
console.log(ageMark);
*/

//*************************LECTURE: If/Else Statments*******************************************
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
	console.log(name + ' is married!');
} else {
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried){
	console.log('YES!');
} else{
	console.log('No!');
}

// == vs ===

//type conversion ==
// == will convert number 23 into a str
if(23 == '23'){
	console.log('Some to print....!')
}

//=== is a comparision operator 
*/

//**********************LECTURE: Boolean logic and switch statements*********************************

//     -----------------NOTE: Basic Boolean Logic:Not, And, Or-------------
/*			AND: (&&) => true if ALL are true
			OR: (||) => true if ONE is true
			NOT: (!) => inverts true to false, or false to true

		Example:
		var age = 16;

			AND: age >= 20 && age <30; => FALSE (Not both true)
			OR:  age >= 20 || age <30; => TRUE (one is true)
			NOT: ex 1 show the answer without the "NOT" logic, ex 2 show what happens when you apply
			the "NOT" logic. 
			ex 1:	 age < 30; => true
			ex 2:   !(age < 30); => false 
*/			
/*
var age = 25;

if(age < 20){
	console.log('John is a teenager.');
} else if(age > 20 && age < 30){
	console.log('John is a young man.');
} else{
	console.log('John is a man.');
}

// Switch Statment

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
	case 'teacher':
	console.log('John teaches kids.');
	break;

	case 'driver':
	console.log('John drives a cab in Minnisota');
	break;

	case 'cop':
	console.log('John helps fight crime.');
	break;

	default:
	console.log('John does something else.');
}
*/
//********************************Coding Challenge 1**************************************
/*
var johnHeight = 200;
var johnAge = 20;

var friendHeight = 250;
var friendAge = 30;

var benHeight = 300;
var benAge = 16;

var johnScore = johnHeight + 5 * johnAge;
var friendScore = friendHeight + 5 * friendAge;
var benScore = benHeight + 5 * benAge;

if(johnScore > friendScore && johnScore > benScore){
	console.log('John is the winner' + " " + johnScore)
} else if (johnScore < friendScore && friendScore > benScore){
	console.log('John friend is the winner' + " " + friendScore);
} else if(benScore > johnScore && benScore > friendScore){
	console.log('Ben is the winner' + " " + benScore);
}else{
	console.log('it a draw!');
}
//Good job you solve this without looking at the solution. 6.5.18
*/
//****************************LECTURE: Functions********************************************
function calculateAge(yearOfBirth){
	var age = 2018 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1989);
console.log(ageJohn); //solution: 29

//FUNCTION CALLING ANOTHER FUNCTION, NO RETURN, AND IF STATEMENT

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if(retirement >= 0){
		console.log(name + ' retires in ' + retirement + ' years.');
	} else{
		console.log(name + ' is already retired.');
	}
	
}

yearsUntilRetirement('John', 1989);//solution: John retires in 36 years.
yearsUntilRetirement('Mary', 1948);//Solution: Mary is already retired.


