export function jie(){
let a,b,c,rest;
[a,b]=[1,2];
console.log(a,b);
//默认值
[a,b,c=3]=[1,2,6];
console.log('default',a,b,c);
//变量交换
a=1;
b=2;
[a,b]=[b,a];
console.log('exchange',a,b);
//数组结构赋值
function f(){
 return [11,21]
}
[a,b]=f();
console.log('f()',a,b);
//数组解构赋值1
function f1(){
  return [11,22,33,44,55,66]
}
// [a,,,b]=f1();
[a,,,...b]=f1();
console.log('f1',a,b);
//
[a,b,...rest]=[1,2,3,4,5,6,7,8,9,10];
console.log(a,b,rest);
({a,b}={a:123,b:234});
console.log(a,b)


}
export function jie1() {
  let o={a:123,b:234};
  let{a,b}=o;
  console.log(a,b);
  //默认值
  let{p=4,q=8}={p:12};
  console.log('default',p,q);
  //类似JSON格式的解构
  const data={
    title:'name',
    text:[{
      title:'text',
      desc:'description'
    }]
  };
  let {title:outTitle,text:[{title:inTitle}]}=data;
  console.log('json',outTitle,inTitle);

}