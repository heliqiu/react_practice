export function regexp(){
  let regexp=new RegExp('xyz','i');//第一参数必须为字符串
  let regexp1=new RegExp(/xyz/i);
  console.log(regexp.test('xyz123'),regexp1.test('xyz123'));
  let regexp2=new RegExp(/xyz/ig,'i');//允许第二个参数 覆盖第一个修饰符
  console.log(regexp2.flags);
}
export function regexp1(){
  let s="bbb_bb_b";
  let a1=/b+/g;
  let a2=/b+/y;
  console.log('one',a1.exec(s),a2.exec(s));
  console.log('one',a1.exec(s),a2.exec(s));
  console.log(a1.sticky,a2.sticky);
}