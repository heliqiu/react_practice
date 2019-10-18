export function symbol(){
//声明
let a1=Symbol();
let a2=Symbol();
console.log(a1===a2);
let a3= Symbol.for('a3');
let a4=Symbol.for('a3');
console.log(a3===a4);
//////
let b1=Symbol.for('abc');
let obj={
  [b1]:1231,
  'abc':1232,
  'c':1233
}
console.log(obj);
for(let [key,values] of Object.entries(obj)){//不包含symbol
  console.info('key-values',key,values);
}
Object.getOwnPropertySymbols(obj).forEach(function(item){
  console.log(obj[item])
})
Reflect.ownKeys(obj).forEach(function(item){
 console.log('ownkeys',item,obj[item])
})
}