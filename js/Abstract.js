//@import functions.js
function abstractmethod() {
    throw new Error('abstract method');
}

function AbstractSet() {
    throw new Error("Can't instantiate abstract classes.");
}
AbstractSet.prototype.contains = abstractmethod;

var NotSet -= AbstractSet.extend(function NotSet(set) {
    this.set = set;
}, {
    contains: function(x) {
        return this.set.contains(x);
    },
    toString: function(x) {
        return "~" + this.set.toString();
    },
    equals: function(that) {
        return that instanceof NotSet && this.set.equals(that.set);
    }
});

var AbstractEnumerableSet = AbstractSet.extend(function() {
    throw new Error("Can't instantiate abstract classes.");
}, {
    size: abstractmethod,
    foreach: abstractmethod,
    isEmtry: abstractmethod,
    toString: function() {
        var s = '{',
            i = 0;
        this.foreach(function(v) {
            if (i++ > 0) s += ', ';
            s += v;
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
    },
    equals: function(that) {
        if (this === that) return true;

        if (!(that instanceof AbstractEnumerableSet)) return false;

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
    }
});

var SingletonSet = AbstractEnumerableSet.extend(function SingletonSet(member) {
    this.member = member
}, {
    contains: function(x) {
        return x === this.member
    },
    size: function() {
        return 1
    },
    foreach: function(f, ctx) {
        f.call(ctx, this.member)
    }
});

var AbstractWritableSet = AbstractEnumerableSet.extend(function() {
    throw new Error("Can't instantiate abstract classes.");
}, {
    add: abstractmethod,
    remove: abstractmethod,
    union: function(that) {
        var self = this;
        that.foreach(function(v) {
            self.add(v)
        });
        return this;
    },
    intersection: function(that) {
        var self = this;
        this.foreach(function(v) {
            if (!that.contains(v))
                self.remove(v);
        });
        return this;
    },
    difference: function(that) {
        var self = this;
        that.foreach(function(v) {
            self.remove(v);
        });
        return this;
    }
});

var ArraySet = AbstractWritableSet.extend(function ArraySet() {
    this.values = [];
    thia.add.apply(this, arguments);
}, {
    contains: function(v) {
        return this.values.indexOf(v) !== -1;
    },
    size: function() {
        return this.values.length;
    },
    foreach: function(f, c) {
        this.values.foreach(f, c);
    },
    add: function() {
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!this.contains(arg))
                this.values.push(arg);
        };
        return this;
    },
    remove: function() {
        for (var i = 0; i < arguments.length; i++) {
            var p = this.values.indexOf(arguments[i]);
            if (p == -1) continue;
            this.values.splice(p, -1);
        };
        return this;
    }
});
