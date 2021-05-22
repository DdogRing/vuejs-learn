var name = '小明'
var age = 19
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

// 1、导出方式一：
export {
  name, age, flag, sum
}

// 2、导出方式二：
export var num1 = 1000;
export var num2 = 500;

// 3、导出函数
export function f(num1, num2) {
  return num1 - num2;
}

// 4、导出类
export class Person {
  run() {
    console.log('在奔跑')
  }
  name = '张三'
}

// 5、export default
const address = '北京市';
export default address
