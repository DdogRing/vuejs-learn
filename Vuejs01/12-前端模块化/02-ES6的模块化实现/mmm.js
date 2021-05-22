// 1、导入的{}中定义的变量
import {name, age,flag} from "./aaa.js";

if (flag) {
  console.log('小明是天才')
}


// 2、直接导入export定义的变量
import {num1, num2} from "./aaa.js";

console.log(num1)
console.log(num2)

// 3、导入 export的function

import {f} from "./aaa.js";

console.log(f(1000, 100))

// 4、导入 export的class
import {Person} from "./aaa.js";
let person = new Person();
person.run();
console.log(person.name);


// 5、 导入export default
import addr from "./aaa.js"
console.log(addr)

// 6、 统一全部导入
import * as aaa from "./aaa.js"

console.log("aaa.num1  " + aaa.num1);
let p;
console.log("name:" +  (p = new aaa.Person).name);
