const person = {
    name: 'Oleg',
    city: 'Kiev',
    born: 1986,
};
function getCountProperties(obj){
    count = 0
    for (const key in obj) {
        count++
    }
    return count
}
console.log(getCountProperties(person))