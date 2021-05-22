// 將民國轉換成西元
// Input: 108/3/02
// Output: Date
//
// Assume: time set to 00:00:00

export default function (date) {
  var tmp = date.split('/').map(n => parseInt(n));

  // 民國轉西元 
  tmp[0] = tmp[0] + 1911;

  return new Date(tmp.join('-'))
}
