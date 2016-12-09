var arr = [
    {
        name: 'a'
    }, {
        name: 'b'
    }, {
        name: 'c'
    }, {
        name: 'd'
    }
];
var res = arr.reduce(function(a, b) {
    if (a != null) {
        return a;
    } else {
        return b.name == 'a' && b || null;
    }
}, null);
console.log(res);
