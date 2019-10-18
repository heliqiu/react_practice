export function fun (){
 function text(a,b='world',c){//默认值后面不可加不定的 (a,b='world',c) 不行
   console.log('text',a,b,c);
 }
 text("hello");
//作用域的问题
 let x='text';
 function text1(x,y=x){
   console.log('text1',x,y); //kill kill
 }
 text1('kill');
 function text2(c,y=x){
  console.log('text1',x,y); //kill text
}
text2('kill');
//////////////
function text3(...arg){
 for(let v  of arg){
   console.log('text3',v);
 }
}
text3(1,2,3,'g');
////////
console.log('text4',...[1,2,3]);
console.log('text5','a',...[1,2,3])

let arraw= x=>x*2;
console.log(arraw(3));
//伪调用 返回的函数  作用提升性能
function w(x){
  console.log('伪调用',x);
}
function q(x){
  return w(x);
}
q(3);
}