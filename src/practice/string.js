export function string() {
  console.log('a','\u0061');
  console.log('a','\u{2077B}')//)0XFFFF
  let s='𠝻';
  console.log(s.length);
  let string='\u{2077B}abcde'
  for(let code of string){//遍历字符串 包含了两个字符的
    console.log('code',code);
  }
//常用方法
let str="hello world!";
console.log('include',str.includes('hl'));  //include  判断是否包含某个字符
console.log('startWith',str.startsWith('ello'));//stratWith 是否以什么为起始；
console.log('endWith',str.endsWith('!'));//endWith 是否以什么为结束
console.log('repeat',str.repeat(3));//repeat 重复次数 复制
//模版字符串
let name='list';
let info='hello world';
let model=`i am ${name}, ${info}`;
console.log('model',model);
//补白
console.log('1'.padStart(2,'0'));//第一个参数长度  长度不够用第二个参数补充 在开头补充
console.log('1'.padEnd(2,0));//在结尾补充
//标签模版
//1.怎么用 2.在哪里用  处理多语言转换
let user={
  name:'list',
  info:'hello world'
}
abc`i am ${user.name},${user.info}`
function abc (s1,vi,qi){
console.log('han',s1,vi,qi);
return s1+vi+qi;
}
//
console.log(String.raw`Hi\n${1+2}`);//转义
console.log(`Hi\n${1+2}`);
}