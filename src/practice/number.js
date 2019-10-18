export function number(){
  console.log(0B1111111)//二进制
  console.log(0o123)//八进制 B/b都可
  //
  console.log('15',Number.isFinite(15));//判断是否是有效的
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite(1/0));
  console.log('NaN',Number.isNaN(NaN));//判断是否是NaN
  console.log('0',Number.isNaN(0));
  //isInteger 是否是整数 参数为数不然容易报错
 console.log('25',Number.isInteger(25));
 console.log('25.0',Number.isInteger(25.0));
 console.log('25.1',Number.isInteger(25.1));
 console.log('25',Number.isInteger('25'));
 //数的上限和下限 2的53次方 -2的53次方
 console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
 //Number.isSafeInteger 数是否在安全范围内的
 console.log('10',Number.isSafeInteger(10));
 //取消小数的整数部分 
 console.log('trunc-4.1',Math.trunc(4.1));
 console.log('trunc-4.9',Math.trunc(4.9));
 console.log('floor-4.1',Math.floor(4.1));
 console.log('floor-4.9',Math.floor(4.9));
 console.log('ceil-4.1',Math.ceil(4.1));
 console.log('ceil-4.9',Math.ceil(4.9));
 console.log('round-4.1',Math.round(4.1));
 console.log('round-4.9',Math.round(4.9));
 console.log('parseInt-4.1',parseInt(4.1));
 console.log('parseInt-4.9',parseInt(4.9));
 //判断 整数 负数 0 NaN
 console.log('5',Math.sign(5));
 console.log('-5',Math.sign(-5));
 console.log('0',Math.sign(0));
 console.log('string',Math.sign('50'));
 console.log('string1',Math.sign("oof"))
//立方根 Math.cbrt()
 console.log('-1',Math.cbrt(-1));
 console.log('8',Math.cbrt(8));

}