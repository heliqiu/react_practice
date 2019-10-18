
export function let_const(){
//let a=1;
// for(var i=0;i<3;i++){
//   console.log(i);
// }
//1.不可重复声明定义
//2.const声明常量时必须有值
//3.const声明对象可进行修改，因为存储的地址是不变的
console.log();
const pi=3.1415926;
//pi=2;
console.log(pi);
const obj={a:1}
console.log(obj);
obj.b=2;
console.log('b',obj);
}