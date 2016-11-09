function reduce(collection, iteratee, accumulator) {
    var index = -1,
        length = collection.length,
        initAccum = arguments.length < 3;
    if (initAccum && length) {
        accumulator = array[++index];
    }
    while (++index < length) {
        accumulator = iteratee(accumulator, collection[index], index, collection);
    }
    return accumulator;
}
function map(iteratee, collection) {
    var index = -1,
        length = collection.length,
        result = Array(length);
    while (++index < length) {
        result[index] = iteratee(collection[index], index, collection);
    }
    return result;
}
function sum(x, y) {
    return x + y;
}
function inc(x) {
    return x + 1;
}
var data = [1, 2, 3];
// var c = reduce(map(inc, data), sum, 0)
// console.log('c', c);
function rmap(fn) {
    return function(fn1) {
        return function(result, input) {
            return fn1(result, fn(input));
        }
    }
}
// var d = reduce(data, rmap(inc)(sum), 0);
// console.log('d', d);
function rreduce(fn, init, reducible) {
    return reducible(fn, init);
}
function reducer(collection, xf) {
    return function(reduceFn, init) {
        return reduce(collection, xf(reduceFn), init)
    }
}
// var e = rreduce(sum, 0, reducer(data, rmap(inc)));
// console.log('e', e);
