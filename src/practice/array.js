export function array(){
  let array=Array.of(1,2,3,4,'e','d');//of-将一组数组转为数组
  console.log('array',array);
  let empty=Array.of();
  console.log('empty',empty)//空数组

  //from 将一些伪数组、集合转为数组

let  p=document.querySelectorAll('p');
let pArr=Array.from(p);
pArr.forEach(function(item){
console.log(item.textContent);
});
//from - 映射用法
console.log(Array.from([1,2,3],function(item){return item*2}));
//fill
console.log('fill-7',[1,'qw',{a:1},null,undefined].fill(7));//将数组中的所有元素替换
console.log('fill-部分',[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].fill(7,2,5));//将数组中的所有元素替换

//遍历
for (let key of [1,2,'a','fdgdfg'].keys()){//遍历下标键值
  console.log(key)
}
for (let values of [1,2,'a','fdgdfg'].values()){
  console.log(values)
}
for (let [index,values] of [1,2,'a','fdgdfg'].entries()){
  console.log('index-value',index,values);
}
//copywithin
console.log('copywithin',[1,2,3,4,5,6].copyWithin(1,3,5));
//find 找到第一个对应的值
console.log([1,2,3,4,5,6].find(function(item){
  return item>3;
}))
//find 对应的下标
console.log([1,2,3,4,5,6].findIndex(function(item){
  return item>3;
}))
//includes 查找
console.log('number',[1,2,NaN].includes(1));
console.log('number',[1,2,NaN].includes(NaN));
}