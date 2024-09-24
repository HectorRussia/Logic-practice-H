// 55 ms
function plusOne(digits: number[]): number[]  {
    for(let i = 0; i < digits.length; i++) {
        if(digits.length >= 2 && digits[i] <= 9) { 

            if(digits[digits.length - 1] >= 9 && digits[i] <= 9) {

                for (let i = digits.length - 1; i >= 0; i--) {
                    if (digits[i] < 9) {
                        digits[i] += 1;
                        return digits;
                    }
                    digits[i] = 0;
                }
                digits.unshift(1);
                return digits;
            }
            
            else {
                let newlast : number = digits[digits.length - 1] + 1;
                digits.pop();
                digits.push(newlast);
                return digits;
            } 
        }
        else {
            let b : number = digits[digits.length - 1] + 1; // 10
            const answer2 = b.toString().split('').map(Number)
            return answer2;
        } 
    }
    return digits; 
};

// P boss 54 ms
function plusOneBoss(digits: number[]): number[] {
    for (let index = digits.length - 1; index >= 0; index--) {
      const element = digits[index] + 1;
      if (element < 10 && index != 0) {
        digits[index] = element;
        break;
      } else {
        if (index == 0) {
          if (element < 10) {
            digits[index] = element;
          } else {
            digits.shift();
            digits = [1, 0, ...digits];
          }
        } else {
          digits[index] = 0;
        }
      }
    }
    return digits;
}

const caseA = [1,2,3]; // [1,2,4]
const caseB = [4,3,2,1] // [4,3,2,2]
const caseC = [9]; // [1,0];
const caseD = [1,0];//[1,1]
const caseF = [9,9]; // [1,0,0]
const caseG = [9,9,9];// [1,0,0,0] 
const caseH = [8,9,9,9] //  [9,0,0,0] 
const caseDog = [9,8,9] ; // need [9,9,0]  not need [1,0,0,0]
console.log("CaseA ", plusOne(caseA));
console.log("CaseB ", plusOne(caseB));
console.log("CaseC ", plusOne(caseC));
console.log("CaseD ", plusOne(caseD));
console.log("CaseF ", plusOne(caseF));
console.log("CaseG ", plusOne(caseG)); 
console.log("CaseH ", plusOne(caseH)); 
console.log("CaseDog ", plusOne(caseDog)); 
const test = '222';
console.log("Test ", test.split('')); // [2,2,2]