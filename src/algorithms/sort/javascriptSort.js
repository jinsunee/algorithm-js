// // javascript sort() 함수를 쓸 때, 배열의 값이 많다면 map 에 임시로 위치와 값을 저장한 후 이 배열을 정렬하여 리턴하는 것이 좋다.

// const array = [6, 2, 10, 99, 1];

// const mapped = array.map((element, index) => {
//   return {
//     index,
//     element,
//   };
// });

// function compareFunction(a, b) {
//   return a.element-b.element;
// }

// mapped.sort(compareFunction);

// const result = mapped.map(element => array[element.index]);

// console.log(result);

const users = [
	{
		name: '차은우',
		age: 25, 
	},
	{
		name: '공유',
		age: 39,
	},
	{
		name: '강하늘',
		age: 34,
	}
];

users.sort((a, b) => a.age - b.age);

console.log(users);