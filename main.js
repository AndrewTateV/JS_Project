import './style.css'

import { isNumber,mysort } from './src/util'

{
  console.clear()
  for(let i =1 ;i<10;i++){
    
    let str =''
    for(let j =1; j<=i;j++){
     
      str += `${i}*${j}=${i*j}\t `
    }
    console.log(str)
  }
}
// 字符串和数字相加，一定变成字符串

console.log(1+2+Number('3'))
console.log(1+2+ +'3')
console.log(1+2+Number('3a'))
console.log(NaN+'string')
// NaN 不等于任何
console.log(NaN===NaN)

// Infinity
console.log(1/0) 

let c=1
let d ='2'
console.log(c-d)
// 字符串和数字相减 则一定会变成数字类型
// 减法会把字符串强制转化1为数字类型
 console.log(1-'2a'+'string')
 console.log(Number('1'))
 console.log(String(1))


 console.clear()


{

let a = 'Raymond';
let b = "My name is Raymond";
let c = `My name is ${a}`;

console.log(a);
console.log(b);
console.log(c);

let d = 'He said: \'I am fine\'';
console.log(d);






}

{
  console.clear()
  for(let i =1 ;i<10;i++){
    
    let str =''
    for(let j =1; j<=i;j++){
     
      str += `${i}*${j}=${i*j}\t `
    }
    console.log(str)
  }
}




// const tbody = document.querySelector('tbody');  // 获取表格的 <tbody> 元素

// for (let i = 1; i <= 9; i++) {  // 外层循环，用于生成每一行
//     const tr = document.createElement('tr');  // 创建一个新的 <tr> 行元素

//     for (let j = 1; j <= i; j++) {  // 内层循环，用于生成每一列
//         const td = document.createElement('td');  // 创建一个新的 <td> 单元格元素
//         td.textContent = `${i} * ${j} = ${i * j}`;  // 设置单元格内容为乘法表达式
//         tr.append(td);  // 将 <td> 单元格添加到 <tr> 行中
//     }

//     tbody.append(tr);  // 将 <tr> 行添加到 <tbody> 中
//   }



  console.clear();

const inputDom = document.querySelector('input');  // 获取 input 元素
const buttonDom = document.querySelector('span');  // 获取按钮（span 元素）
let numberList = [];  // 用于存储数字的数组

buttonDom.addEventListener('click', function () {
    const value = +inputDom.value;  // 将输入的值转换为数字
    inputDom.value = '';  // 清空输入框的值

    if (!isNumber(value)) {  // 检查输入的值是否为数字
        console.log('不是数字');
        return;  // 如果不是数字，则返回
    }

    numberList.push(value);  // 将数字添加到 numberList 数组中
  // 输出数组的内容
    numberList = mysort(numberList)
    console.log(numberList)
    const tbody = document.querySelector('tbody')
tbody.innerHTML = ''
numberList.forEach((element, index) => {
    console.log(index + 1, element);
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = index + 1
    const td = document.createElement('td')
    td.textContent = element
    tr.append(th, td)
    tbody.append(tr)
})

// // 去非数字
// numberList = numberList.filter(item=>isNumber(item))

// // 去重
// numberList = [...new Set(numberList)]
// console.log(numberList)


// // 排序
// numberList.sort((a,b)=>a-b)
// console.log(numberList)

});

// // 辅助函数，判断是否为数字
// function isNumber(value) {
//     return value === +value;
// }

