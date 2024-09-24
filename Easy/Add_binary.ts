function addBinary(a: string, b: string): string {
    let sum : string[] = [];
    let carry = 0;  // ใช้เก็บการทด
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        
        const bitA = i >= 0 ? parseInt(a.charAt(i)) : 0;
        const bitB = j >= 0 ? parseInt(b.charAt(j)) : 0;

        const total = bitA + bitB + carry;
        carry = Math.floor(total / 2);  // ทดไปบิตถัดไป
        sum.push((total % 2).toString());  // เก็บผลลัพธ์บิต

        i--;
        j--;
    }

    return sum.reverse().join('');
}

// 1010 + 1011 = 10101
// 11 + 1 =  100
console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('11', '1')); // 100


// 1010 + 1011 = 10101
// 11 + 1 =  100
console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('11', '1'));