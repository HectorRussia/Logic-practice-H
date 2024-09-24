function PrimaryNumber(prime : number): string | undefined {
    for (let i = 1; i <= prime; i++) {
        if(prime % i === 0) {
            return 'not prime'
        }
        else {
            return 'prime';
        }
    }
    return undefined
}

console.log(PrimaryNumber(2)); 
console.log(PrimaryNumber(3));
console.log(PrimaryNumber(5));
console.log(PrimaryNumber(7));
console.log(PrimaryNumber(11));
console.log(PrimaryNumber(12)); // no
console.log(PrimaryNumber(17));