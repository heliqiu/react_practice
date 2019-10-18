export function iterator(){
  let arr=['hello','world'];
  let ite=arr[Symbol.iterator]();
  console.log('next1',ite.next());
  console.log('next2',ite.next());
  console.log('next3',ite.next());

}
export function iterator1(){
  let obj={
    start:[4,5,6],
    end:[1,2,3],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let length=arr.length;
      console.log(arr,index,length)
      return {next(){
        if(index<length){
             return {values:arr[index++], done:false}
        }
        else
        {    return { values:arr[index++],done:true}}
      }
      }
    }
  }
  for(let key of obj){
    console.log('key',key);
  }
}