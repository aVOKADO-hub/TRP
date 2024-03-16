function sequence(start = 0, step = 1) {
    let count = start
    return function() {
        const countConst = count
        count += step
        return countConst
    };
}

let generator = sequence(10, 3)
let generator2 = sequence(7, 1)

console.log(generator())
console.log(generator())
console.log(generator2())
console.log(generator())
console.log(generator2())
