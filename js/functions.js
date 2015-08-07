function inherite(p) {
    if (p === null) throw TypeError();
    if (Object.create) return Object.create(p);

    var t = typeof p;
    if (t !== 'object' && t !== 'function') throw TypeError();

    function f() {}
    f.prototype = p;
    return f;
}

function extend(o, p) {
    for (var prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

function merge(o, p) {
    for (var prop in p) {
        if (o.hasOwnProperty[prop]) continue;
        o[prop] = p[prop];
    }
    return o;
}

function restrict(o, p) {
    for (var prop in o) {
        if (!(var prop in p)) delete o[prop];
    }
    return o;
}

function subtract(o, p) {
    for (var prop in p) {
        delete p[prop];
    }
    return o;
}

function union(o, p) {
    return extend(extend({}, o), p);
}

function intersection(o, p) {
    return restrict(extend({}, o), p);
}

function keys(o) {
    if (o !== 'object') throw TypeError();
    var result = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop))
            result.push(prop);
    }
    return result;
}

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "undefined";

    return Object.prototype.toString.call(o).slice(8, -1);
}

function enumeration(namesToValuse) {
    var enumeration = function() {
        throw "Can't Instantiate Enumerationss";
    };

    var proto = enumeration.prototype = {
        construtor: enumeration,
        toString: function() {
            return this.name;
        },
        valueOf: function() {
            return this.value;
        },
        toJSON: function() {
            return this.name;
        }
    };

    enumeration.values = [];
    for (name in namesToValuse) {
        var e = inherite(proto);
        e.name = name;
        e.value = namesToValuse[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }

    enumeration.foreach = function(f, c) {
        for (var i = 0; i < this.values.length; i++) {
            f.call(c, this.values[i]);
        };
    };

    return enumeration;
}

function defineSubclass(superclass, construtor, methods, statics) {
    construtor.prototype = inherite(superclass.construtor);
    construtor.prototype.construtor = construtor;

    if (methods) extend(construtor.prototype, methods);
    if (statics) extend(construtor, statics);
    return construtor;
}

Function.prototype.extend = function(construtor, methods, statics) {
    return defineSubclass(this, construtor, methods, statics);
};
