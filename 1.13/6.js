function pluck (array, key) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if(key in array[i]){
            const obj = array[i]
            const value = obj[key]
            newArray.push(value)
        }
    }
    return  newArray
}
let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40}
];
console.log (pluck(characters,"name"));
