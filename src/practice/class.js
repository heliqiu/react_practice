export function class1(){
  class Parent{
   constructor(name='yuyu'){
   this.name=name;
   };
   //getter setter
   get gettername(){
     return 'm-'+this.name;
   };
   set settername(age){
     this.name=age;
   }
  }
  let parent=new Parent('heliqiu');
  console.log('getter',parent.gettername);//get 作为属性
   parent.settername="helo";//利用的set
   console.log('set',parent.gettername);//get 作为属性
  console.log('构造函数和实例',parent);
  class Child extends Parent{
     constructor(name='child'){
       super(name);//修改父级的属性
       this.type="12"
     }
  }
  console.log('继承',new Child('123'));

  //静态方法
  class Parent1{
    constructor(name='zhangsan'){
      this.name=name;
    }
    static tell(){//静态方法通过类去调用而不是类的实例
      console.log('tell');
    }
  }
  Parent1.type='静态属性';//定义静态属性
  console.log('静态属性',Parent1.type);
  Parent1.tell();
}