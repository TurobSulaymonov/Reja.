/* 
Shunday function tuzingki unga integerlardan iborat array pass bolsin va
 function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini. */


function kattaSonnitopish(arr) {
  if (arr.length === 0) {
      return -1; 
  }

  let maxIndex = 0;
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
          maxValue = arr[i];
          maxIndex = i;
      }
  }

  return maxIndex;
}


const result = kattaSonnitopish([5, 29, 12, 22, 8]);
console.log(result);




/* 
Shunday findDoublers function tuzing, unga faqat bitta string 
argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

*/

/* 
 */