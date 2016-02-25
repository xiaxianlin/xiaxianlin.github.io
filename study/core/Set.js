function Set() {
    this.values = [];
    this.n = 0;
    if (arguments.length == 1 && isArrayLike(arguments[0]))
        this.add.apply(this, arguments[0]);
    else if (arguments.length > 0)
        this.add.apply(this, arguments);
}

Set.prototype.add = function() {
    for (var i = 0; i < arguments.length; i++) {
        var val = arguments[i];
        var str = Set._v2s(val);
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    };
};

Set.prototype.remove = function() {
    for (var i = 0; i < arguments.length; i++) {
        var val = arguments[i];
        var str = Set._v2s(val);
        if (this.values.hasOwnProperty(str)) {
            delete this.values[str];
            this.n--;
        }
    };
};

Set.prototype.contains = function(value) {
    return this.values.hasOwnProperty(Set._v2s(value));
};

Set.prototype.size = function() {
    return this.n;
};

Set.prototype.foreach = function(f, context) {
    for (var s in this.values)
        if (this.values.hasOwnProperty(s))
            f.call(context, this.values[s]);
};

Set.prototype.equals = function(that) {
    if (this === that) return true;

    if (!(that instanceof Set)) return false;

    if (this.size() != that.size()) return false;

    try {
        this.foreach(function(v) {
            if (!that.contains(v)) throw false;
        });
        return true;
    } catch (x) {
        if (x === false)
            return false
        throw x;
    }
};

Set._v2s = function(val) {
    switch (val) {
        case undefined:
            return 'u';
        case null:
            return 'n';
        case true:
            return 't';
        case false:
            return 'f';
        default:
            switch (typeof val) {
                case 'number':
                    return '#' + val;
                case 'string':
                    return '"' + val;
                default:
                    return '@' + objectId(val);
            }
    }

    function objectId(o) {
        var prop = "|**objectId**|";
        if (!o.hasOwnProperty(prop))
            o[prop] = Set._v2s.next++;
        return o[prop];
    }
}

Set._v2s.next = 100;


extend(Set.prototype, {
    toString: function() {
        var s = '{',
            i = 0;
        this.foreach(function(v) {
            s += ((i++ > 0) ? ", " : "") + v;
        });
        return s + '}';
    },
    toLocalString: function() {
        var s = '{',
            i = 0;
        this.foreach(function(v) {
            if (i++ > 0)
                s += ', ';
            if (v === null)
                s += v;
            else
                s += v.toLocalString();
        });
        return s + '}';
    },
    toArray: function() {
        var a = [];
        this.foreach(function(v) {
            a.push(v);
        });
        return a;
    }
});

function filteredSetSubclass(superclass, filter) {
    var construtor = function() {
        superclass.apply(this, arguments);
    }

    var proto = construtor.prototype = inherite(superclass.prototype);
    proto.construtor = construtor;
    proto.add =  function(){
        for (var i = 0; i < arguments.length; i++) {
            var v = arguments[i];
            if(!filter(v))
                throw("value " + v + " rejected by filter");
        };
        superclass.prototype.add.apply(this, arguments);
    };
    return construtor;
}
