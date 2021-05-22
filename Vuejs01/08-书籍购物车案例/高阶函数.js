// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// filter/map/reduce

// 1、filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的num加入到新的数组中
// false:当返回false时，函数内部会过滤到这次的n
const nums = [10, 20, 30, 40, 25, 111, 58];

/* let newNums = nums.filter(function(num){
	return num < 50;
}) */

let newNums = nums.filter(n => n < 50)

// 2、map函数的使用
let new2Nums = nums.map(n => n*2);

// 3、reduce函数的使用
// reduce作用对数组中所有的内容进行汇总
let new3Nums = new2Nums.reduce((pre, curr) => pre + curr, 0)

console.log(newNums);
console.log(new2Nums);
console.log(new3Nums)

let new4Nums = nums.filter(n => n > 50).map(n => n*2).reduce((pre,curr) => pre + curr, 0);
console.log(new4Nums)

/* // 1、需求：取出所有小于50的数字
let newNums = [];
for (let num of nums) {
	if(num < 50) {
		newNums.push(num);
	}
}

// 2、将所有小于50的数字进行转化：全部*2
let new2Nums = []
for (let num of new2Nums) {
	new2Nums.push(num * 2);
}

// 3、需求：将所有new2Nums数字相加，得到最终的结果
let total = 0;
for (let num of new2Nums) {
	total += num;
} */
