function data1(){
  console.log("123");
}
let text1={ 
  name:"xiaoming",
  action:data1,
  class:{a:1,d:1,w:3}
 }
 let text2={ 
  name:"ezuoju",
  action:data1,
  class:{c:1,b:1}
 }
export function simpleClone(){
 let copy1={...text1,...text2};
 console.log("text1",text1);
 console.log("copy1",copy1);
}
export function assignClone(){
  let copy2=Object.assign({},text1,text2);
  console.log("text1",text1);
 console.log("copy2",copy2);
 console.log(text1===copy2);
}
export function deepClone(){
  // let obj={};
  // for(var key of text1){
  //   obj[key]=text1[key]
  // }
  // console.log(obj);
  function foo(){
  console.log(a);
  }
  function bar(){
   // var a=3;
    foo();
  }
  var a=2;
  bar();
}
