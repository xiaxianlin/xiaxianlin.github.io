function log() {
    console.log(...arguments);
}

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
        if (!(prop in p)) delete o[prop];
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
/**
 * 枚举
 */
function enumeration(namesToValues) {
    var enumeration = function() {
        throw "Can't Instantiate Enumerations";
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
    for (var name in namesToValues) {
        var e = inherite(proto);
        e.name = name;
        e.value = namesToValues[name];
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
/**
 * 子类
 */
function defineSubclass(superclass, construtor, methods, statics) {
    construtor.prototype = inherite(superclass.prototype);
    construtor.prototype.construtor = construtor;

    if (methods) extend(construtor.prototype, methods);
    if (statics) extend(construtor, statics);
    return construtor;
}

//继承方法
Function.prototype.extend = function(construtor, methods, statics) {
    return defineSubclass(this, construtor, methods, statics);
};
/**
 * 将o的指定名字（或所有）的属性设置为不可写的和不可配置的
 */
function freezeProps(o) {
    var props = (arguments.length == 1) ? Object.getOwnPropertyNames(o) : Array.prototype.splice.call(arguments, 1);
    props.forEach(function(n) {
        if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
        Object.defineProperty(o, n, {
            writable: false,
            configurable: false
        });
    });
    return o;
}

/**
 * 将o的指定名字（或所有）的属性设置为不可枚举的和不可配置的
 */
function hideProps(o) {
    var props = (arguments.length == 1) ? Object.getOwnPropertyNames(o) : Array.prototype.splice.call(arguments, 1);
    props.forEach(function(n) {
        if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
        Object.defineProperty(o, n, {
            enumerable: false
        });
    });
    return o;
}


function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
        uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        var r;
        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}
