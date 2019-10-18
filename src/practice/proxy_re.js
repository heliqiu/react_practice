function proxy(){
 let obj={
   time:'2017-09-09',
   name:'zhangsan',
   _r:123
 }
 let  monitor=new Proxy(obj,{
   //拦截对象属性的读取
   get(target,key){
    return target[key];
   },
   //拦截对象属性的修改
   set (target,key,values){
       if(key==='name'){
         return target[key]=values;
       }else{
         return target[key];
       }
   },
   //对 for in 的拦截
   has(target ,key){
     if(key==='name'){
        return target[key]
     }else{
        return false
     }
   },
   deleteProperty(target,key){
     if(key.indexOf('_')>-1){
       delete target[key];
       return true;
     }else{
       return target[key];
     }
   },
   ownKeys(target){
     return Object.keys(target).filter(item => item==='name')
   }
 });
 //用户访问的是monitor，monitor代理obj
 console.log('monitor',monitor.time,monitor.name,monitor._r);
 monitor.time='123';
 monitor.name='heliqu';
 console.log('monitor1',monitor.time,monitor.name,monitor._r);
 console.log('monitor2','time' in monitor,'name' in monitor,'_r' in monitor);
//  delete monitor.time;
//  console.log('monitor3',monitor);
//  delete monitor._r;
//  console.log('monitor4',monitor);
console.log('monitor5',Object.keys(monitor));
}
export default {proxy};