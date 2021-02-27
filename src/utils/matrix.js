export default function matrix(rows, columns) {
	const rtn = new Array(rows);
    
    for (let i=0; i<rows; i++) {
    	rtn[i] = new Array(columns);
    }
    
    return rtn;
}

exports.modules = [matrix];

// let rows = 3, columns = 3;
// const array = matrix(rows, columns);

// let num = 1;
// for (let i=0; i<rows; i++) {
//   for (let j=0; j<columns; j++) {
//     array[i][j] = num++;
//   }
// }

// console.log(array);


// // 두번째 방법: Array.from
// const arr1 = Array.from(Array(rows), () => new Array(columns));

// let num = 1;
// for (let i=0; i<rows; i++) {
//   for (let j=0; j<columns; j++) {
//     arr1[i][j] = num++;
//   }
// }

// console.log(arr1);