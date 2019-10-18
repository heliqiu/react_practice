export function  obj(){
//简介表示法
let o=1;
let k=2;
let es5={
  o:o,
  k:k
}
let es6={o,k}
console.log(es5,es6);
let es5_method={
  hello:function(){
    console.log('hello');
  }
}
let es6_method={
  hello(){
    console.log('hello');
  }
}
console.log('log',es5_method.hello(),es6_method.hello());
//属性表达式
let a='b';
let es5_obj={
  a:'c',
  b:'c'
};
let es6_obj={
  [a]:'c'
}
console.log('es_obj',es5_obj,es6_obj);
//新增API
console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
console.log('数组',Object.is([],[]),[]===[]);//is()等同于===
console.log('拷贝',Object.assign({a:'a'},{b:'b'}))//浅拷贝 地址 继承属性 没有
//Object.entries
let text={q:123,w:234};
for(let [key,values] of Object.entries(text)){
  console.log(key,values);
}
//扩展运算符
let{a1,b1,...c1}={a1:123,b1:234,c1:345,d1:456,e1:567};
console.log(a1,b1,c1);

}