export function yibu(){
  // for(var i=0;i<5;i++){
  //   console.log('----',i);
  //     (function (i){
  //     setTimeout(function(){
  //       console.log('i',i)
  //     },1000);
  //   })(i);
  // }
  let arr=[1,2,3,4];
  arr.forEach(function(item){ 
    console.log('item',item)
    return item*2});
  console.log('arr',arr);
}