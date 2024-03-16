const obj = {
    greet: function() {
        return this.greeting;
    }
};

function createGreetable(str) {
    const result = Object.create(obj);
    result.greeting = str;
    result.greet = function(greeting) {
        return `${greeting}, ${this.greeting}!`;
    };
    return result;
}

const g = createGreetable('Oleg');
console.log(g.greet('Hello')); 