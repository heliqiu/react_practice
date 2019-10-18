function textJson(){
  function Person(name){
    this.name=name;
    // this.age=undefined
    this.height=181
    // this.action=function(){console.error("butaidui")}
  }
  const lisa=new Person("li");
  const text={
    name:"a",
    data:lisa
  }
  const copy=JSON.parse(JSON.stringify(text));
  console.log("text",text);
  console.log("copy",copy);
}
export default textJson;