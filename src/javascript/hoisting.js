// 함수

// foo();

// var foo;

// // foo 는 익명 함수를 담은 '변수'이다.
// foo = function () {
//   console.log(2);
// }

// // 여기서 foo 는 함수 선언문으로 선언되어진 '함수'이다.
// function foo() {
//   console.log(1);
// }

foo();

var a = true;

if (a) {
  function foo() {
    console.log('a');
  } 
} else {
  function foo() {
    console.log('b');
  }
}
