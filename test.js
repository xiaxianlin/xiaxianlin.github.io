var obj = { a: 1 };

function a(obj) {
    obj = { b: 2 };
}


console.log(obj);

a(obj);

console.log(obj);