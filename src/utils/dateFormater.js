// Format date string with leading zeros
// Input: 108/3/2
// Output: 108/03/02

export default function (date) {
  var tmp = date.split('/');

  tmp[1] = tmp[1].padStart(2, '0');
  tmp[2] = tmp[2].padStart(2, '0');

  return tmp.join('/')
}
