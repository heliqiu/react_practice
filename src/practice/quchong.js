function qu1(arr){
   let new1=[];
   new1.push(arr[0]);
   for(let i of arr){
     if(!new1.find(item=>item===i)){
       new1.push(i);
     }
   }
   return new1;
}
function qu2(arr){
  let new1=[];
  new1.push(arr[0]);
  for(let i of arr){
    if(new1.indexOf(i)<0){
      new1.push(i);
    }
  }
  return new1;
}
function sort(arr){
  let sort1=arr.sort(
    function(a,b){
      return a-b
    }
  )
  return sort1;
}
 function this1(){
   //作为构造函数的使用
   function Person (name){
      this.name=name;
   }
   let per=new Person('123');
   console.log(per);
   //作为对象的属性
   let obj={
     a:'1',
     b:'2',
     c:function(){
       console.log(this.a);
       return 1;
     }
   }
   console.log('1',obj.c());
   //作为外部函数的时候 this==> window
   //call apply bind
   var fun1=function(name,age){
       console.log('name',name,age,this)
   }.bind({a:100});
  //  fun1.call({a:100},'qwe',1);
  //  fun1.apply({a:100},['qwe',1]);
   fun1("qwe",12)
  
 }
 function bi(){
   var a=100;
   return function(){
     console.log('a',a);
   }
 }
export function quchong(){
  //let arr=[1,2,3,4,5,6,7,1,2,3,0,4,9,25,23];
  // let set=new Set(arr);
  // let newarr=Array.from(set);
 // console.log('new',arr,set,newarr);
//  let qu1arr=sort(arr);
//  console.log('qu1',arr,qu1arr)
//this1();
////////////
var f1=bi();
function f2(fn){
    var a=300;
    fn();
}
f2(f1);
}
