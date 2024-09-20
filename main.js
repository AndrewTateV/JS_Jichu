import './style.scss'
import _ from 'lodash'
// import add , {btnClickFuction,btnClickFuction2} from'./src/components/btn'
import   btn from'./src/components/btn'
import {btnClickFuction as btn1,btnClickFuction2 as btn2} from'./src/components/btn'
console.log('fku')
console.clear()


const  a =[]
a.push(5,11,'fku')
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)


const user={
name:'kl',
income :99

}
user.dk=66
console.log(user)



const c =new Map()
c.set('name','joshua')
c.set('age',11)
console.log(c)
console.log(c.get('name'))

const b= new Set()
b.add('joshua')
b.add('joshua')
console.log(b)
b.add({name:'joshua'})
b.add({name:'joshua'})
console.log(b)






console.clear()
function  add(a,b){
                    // console.log(a+b)
                    return (a+b)
}
const ck =add(1,2)
console.log(ck)

// arrow function
const add2= (a,b)=>{
 return a+b
}

const ck2 = add2(1,5)
console.log(ck2)


// 箭头fuction
// const btnClickFuction2 = () =>{
//                     console.log('fku')
// }

// document.querySelector('span').addEventListener('click',btn2
// )
const mub = btn (1,1000)
console.log(mub)
// 普通fuction
// function btnClickFuction(){
//                     console.log('ok')
// }

console.clear()


function aManWalk(name,age,income){

console.log(name , 'walk')
console.log('age',age)
console.log('income',income)
}


aManWalk('joshua',17,100000000000000)





function score (a=0,b=0,c=20){
console.log(a,b,c)
}
score()
score(10,10,10)
score(undefined,0,)








console.clear()
function score2 ({a=0,b=0,c=0}){
                    console.log(a,b,c)
}

const info = {
     b:40            
}
score2(info)


console.clear()
function score3 (info){
const info2 ={a:0,b:0,c:0,...info}
console.log(info2.a,info2.b,info2.c)

}
score3(info)


console.clear()
function score4 (a,b,...c){
                    console.log(a,b,...c)
}

score4(1,2,1,32,42)


console.clear()
let status= true

const Test = document.querySelector('#test')


function lightOn(){
                    console.log('light on')
                   Test.classList ='light'
}

function lightOff(){
                    console.log('light off')
                    Test.classList='dark'
}


function LightSwitch (){
                   
if (status ){
lightOn()
status = false
}else {
lightOff()

status =true

}

}

document.querySelector('span').addEventListener('click',LightSwitch)



for ( let i =0 ;i<100; i++){
                    console.log(i)
}

console.clear()



for ( let i =1 ;i<10; i++){
              let row = ''      
     for (let j =1 ; j<10; j++)  {
row += `${i}*${j}=${i*j}\t`

     }     
     console.log(row)      
}



console.clear()

// console.log(1 === true);
// console.log(0 === false);


function lightOnOff(onOff = 'on') {
    if (onOff === 'on') {
        return true;
    } else {
        return false;
    }
}

let status1 = 'on';

if (lightOnOff(status1)) {
    console.log('light on');
} else {
    console.log('light off');
}


// switch (key) {
//      case value:
          
//           break;

//      default:
//           break;
// }
console.clear()

let i = -1
while(i<10){
     console.log(i)
     i++
}



console.clear()
const array = ['Raymond', 'Vincent', 'John', 'Jack', 'Tom', 'Mary', 'Jane', 'Jenny', 'Candy', 'Cindy'];

// // 使用 for 循环
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// if (i===3){
//      break
// }

// }

for (let item of array) {
     console.log("item: ", item);
     if (item === 'Tom') {
         break;  // 找到 'Tom' 时退出循环
     }
 }
 
 // 使用 for...in 循环遍历数组索引，查找 'Tom'
 for (let i in array) {
     console.log("array[i]: ", array[i]);
     if (array[i] === 'Tom') {
         break;  // 找到 'Tom' 时退出循环
     }}

// console.clear()
// // 使用 forEach 方法
// // array.forEach(function(item) {
// //     console.log(item);
// // });

// array.forEach((item,index)=>{
//      console.log(item,index)
     
// })


// // // 使用 Some 方法
// array.some((item,index)=>{
//      console.log(index,item)
//      if (item ==='Tom'){
//           return true
//      }
// })
// // console.clear()
// // // 使用 Every 方法
// array.every((item)=>{
// console.log(item)
// if (item ==='Tom'){
//      return false
// }
// return true
// })



console.clear()
// 示例 1：变量赋值和作用域
let i1 = 0;
let j1 = i;
console.log(i1, j1);  // 输出: 0 0
j1 = 1;
console.log(i1, j1);  // 输出: 0 1

// 示例 2：对象的引用赋值
const mkj = {
    name: 'Raymond',
    age: 18,
};

let mkj2 = mkj;
console.log(mkj, mkj2);  // 输出: {name: 'Raymond', age: 18} {name: 'Raymond', age: 18}

mkj2.age = 20;
console.log(mkj, mkj2);  // 输出: {name: 'Raymond', age: 20} {name: 'Raymond', age: 20}

const mkj3 = {...mkj}
console.log(mkj3,mkj)
mkj3.name='joshua'
console.log(mkj3,mkj)





console.clear()
const mkj4 = {
     name: "Alex",
     income: 1000,
     profile: {
         height: 180,
         weight: 80,
     }
 }
 
 const mkj5 = { ...mkj4 }
 console.log(mkj4, mkj5);
 
 mkj5.income = 2000;
 console.log(mkj4, mkj5);

 mkj5.profile.height = 190;
 console.log(mkj4, mkj5);

 const mkj6 =_.cloneDeep(mkj4)
 console.log(mkj6,mkj4)
 mkj6.profile.weight=75
 console.log(mkj6,mkj4)


console.clear()
// 面对object怎么把值拉出来
const hkd ={
     name : 'joshua',
     age:17,
     income: 1000,
     profile: {
         height: 180,
         weight: 80,
     }
}

console.log(Object.keys(hkd))
console.log(Object.values(hkd))
console.log(Object.entries(hkd))

Object.entries(hkd).forEach((item)=> {
     console.log(item)
})



const userKeyList = ['name', 'age', 'income', ['height', 'weight', ['A', 'B']]];
const userValueList = ['Raymond', 18, 1000, [180, 80]];

// 遍历 userKeyList 并打印每个 item
userKeyList.forEach(item => {
    console.log(item);
});

// 使用 flat 方法扁平化数组并打印结果
console.log(userKeyList.flat(1 / 0));  // 无限深度扁平化

// 扁平化数组并遍历每个元素
userKeyList.flat(1 / 0).forEach(item => {
    console.log(item);
});





console.clear()
const numberlist = [34,99,1,-30,5,1000]
numberlist.sort((a,b)=>a-b)
// 不是纯净函数
console.log(numberlist)
numberlist.sort((a,b)=>b-a)
console.log(numberlist)