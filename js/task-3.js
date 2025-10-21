class StringBuilder {
    #value;

    constructor(start = "") {
        this.#value = start;
    }
    
    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
    }
    
    padBoth(str) {
        this.#value = str + this.#value +str;
    }
}

const builder = new StringBuilder(".");
console.log("task-3:",);

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
