export function pro(){
  
let ajax=function(callback){
 setTimeout(() => {
   console.log("执行");//执行
   callback&&callback.call();
 }, 100000);
}
ajax(()=>{console.log("settimeout1")});

}
export function pro1(){
    // let ajax=function(callback){
   //   console.log("执行");//执行
  //   setTimeout(function(){
  //     callback&&callback.call();
  //   }, 2000);
  //  }
  //  ajax(function(){console.log("settimeout1")});
  
  // let ajax=function(){
  //   console.log("执行");
  //   return new Promise(function(resolved , reject){
  //     setTimeout(()=>{resolved()},1000);
  //   })
  // }
  // ajax().then(
  //   function(){
  //     setTimeout(()=>{console.log("then000")},0);
  //   }
  // );
  // setTimeout(()=>{console.log("settimeout000")},0);
  // console.log("12");
  // let ajax=function(number){
  //   console.log("执行");
  //   return new Promise(function(res,reject){
  //     if(number>5){
  //       res()
  //     }else{
  //       throw new Error("出错l");//语句自定义错误
  //     }
  //   })
  // };
  // try{
  // ajax(3).then(function(){
  //   console.log(6,"6")
  // })}
  // catch(err){
  //   console.log("err",err)
  // };
  ///////////////
  let ajax=function(){
    console.log("执行");
    return new Promise(function(resolved , reject){
      setTimeout(()=>{resolved()},1000);
    })
  }
  ajax().then(
    function(){
      console.log("time1")
      return new Promise(function(resolved , reject){
        setTimeout(()=>{resolved()},2000);
      })
    }
  ).then(function(){
    console.log("time2")
  });
  ///所有图片加载完再添加到页面
  function loadImg(src){
     return new Promise((resolved,reject)=>{
       let img=document.createElement('img');
       img.src=src;
       img.onload=function(){resolved(img)};
      //  img.onerror=function(err){
      //    reject(err)
      //  }
     });
  }
  function showImg(imgs){
    imgs.forEach(img => {
      document.body.appendChild(img)
    });
  }
  // Promise.all([
  //   loadImg("http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=4&spn=0&di=188870&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1788511239%2C2795551672&os=4194152227%2C2679295953&simid=4289331877%2C846746682&adpicid=0&lpn=0&ln=1385&fr=&fmq=1571023949005_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-16%2F5a34e6d48c86a.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Botg9aaa_z%26e3Bv54AzdH3F45ktsj_1jpwts_89an88_9_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"),
  //   loadImg('http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=5&spn=0&di=104500&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1142097640%2C3583610402&os=376078170%2C2821444109&simid=4249522570%2C664285701&adpicid=0&lpn=0&ln=1385&fr=&fmq=1571023949005_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-17%2F59e56cbbd75e8.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Botg9aaa_z%26e3Bv54AzdH3Fowssrwrj6_kt2_8nmn88_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined'),
  //   loadImg('http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=6&spn=0&di=18370&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1101079303%2C1307471305&os=218429534%2C2671575176&simid=18351592%2C853187396&adpicid=0&lpn=0&ln=1385&fr=&fmq=1571023949005_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-04-02%2F5ac192d94aca9.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Botg9aaa_z%26e3Bv54AzdH3Fowssrwrj6_1jpwts_8990na_m_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined')
  // ]).then(showImg);
}