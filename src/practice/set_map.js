export function set(){
let set=new Set();
set.add(5);
set.add(7);
console.log(set);
}
export function set1(){
 let arr=[1,4,87,34,2468,2,42,89];
 let set1=new Set(arr);
 console.log(set1);
}
export function set2(){
  //set集合的唯一性 
  let set2=new Set();
  set2.add(1);
  set2.add(2);
  set2.add(2);
  console.log(set2);
  //去重
  let arr=[1,2,3,1,23,5,1,'2'];
  let set2_2=new Set(arr);
  console.log("set2_2",set2_2);
  let set2_3=new Set();
  set2_3.add({a:1});
  set2_3.add({a:1});
  console.log("set2_3",set2_3);
}
export function set3(){
  //set方法
  let arr=['add','delet','has','clear'];
  let set3=new Set(arr);
  // console.log('has',set3.has('has'));
  // console.log('delet',set3.delete('add'),set3);//返回true/false
  // console.log('clear',set3.clear(),set3)
//遍历
for(let key of set3.keys()){
  console.log('key',key)
}
for(let value of set3.values()){
  console.log('value',value)
}
for(let value of set3){
  console.log('value',value)
}
for (let [key,value] of set3.entries()){
  console.log('entries',key,value)
}
//forEach
set3.forEach(function (item) {
  console.log(item);
})
}
export function weakSet(){
  let weakset=new WeakSet();//元素只能是对象；对象是弱引用（地址引用，也不检测是否被垃圾回收过）
  let arg={};
  weakset.add(arg);//不支持clear size 遍历
  console.log("weakset",weakset);
}
export function set_array(){
  let set=new Set();
  let array=[];
  //增
  var a={a:123};
  set.add({o:123});
  set.add(a);
  array.push({o:123});
console.info('set_array_add',set,array);
//查
let set_exist=set.has(a);
let array_exist=array.find(item=>item.o);
console.info('set_array_find',set_exist,array_exist);
//改
set.forEach(item=>item.o===123?item.o=2:'');
array.forEach(item=>item.o===123?item.o=2:'');
console.info('set_array_gai',set,array);
//删
set.forEach(item=>item.o?set.delete(item):'');
let index=array.findIndex(item=>item.o);
array.splice(index,1);
console.info('set_array_delete',set,array);
}
export function map(){
  let map=new Map();
  let arr=["123"];
  map.set(arr,456);
  console.log("map.get",map.get(arr));
}
export function map1(){
  let map1=new Map([['o','21'],['ed',899]]);
  console.log(map1);
  //常用属性和方法
  console.log("size",map1.size);
  console.log("delete",map1.delete("ed"),map1);
  //map1.clear();
  console.log('clear',map1);
}
export function weakmap(){
  //元素只能是对象；对象是弱引用（地址引用，也不检测是否被垃圾回收过）
  let weakmap=new WeakMap();//不支持clear size 遍历
  let a={};
  weakmap.set(a,'123');
  console.log('weakmap',weakmap);
}
export function map_array(){
  //数据结构的横向对比 增删改查
  let map=new Map();
  let array=[];
  //增
  map.set('o',123);
  array.push({o:123});
  array.push({g:123});
 // array.push(4);
  console.info('map_array',map,array);
 //查
 let map_exist=map.has("t");//返回true/false
 let array_exist=array.find(item=>item.o);//返回查找到的值
 console.info('map_array_exist',map_exist,array_exist);
 //改
 map.set('o',2);
 array.forEach(item=>item.o?item.o=2:'')
 console.info('map_array_gai',map,array);
 //删除
 //map.delete('o');
 let index=array.findIndex(item=>item.o);
 array.splice(index,1);
 console.info('map_array_delete',map,array);
}
export function map_set_object(){
  let item={o:123}
  let map=new Map();
  let set=new Set();
  let obj={};
  //增
  set.add(item);
  map.set('o',123);
  obj.o=123;
  console.log("add",map,set,obj);
  //查
  const set_exsit=set.has(item);
  const map_exsit=map.has('o');
  const obj_exsit='o' in obj;
  console.info('find',set_exsit,map_exsit,obj_exsit)
  //改
  item.o=12;//set里面存储的是引用
  map.set('o',12);
  obj.o=12;
  console.log("gai",map,set,obj);
  //删
  set.delete(item);
  map.delete('o');
  delete obj['o'];
  console.log("delete",map,set,obj);
}