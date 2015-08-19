function Range(from, to) {
    var tf = typeof from;
    var tt = typeof to;
    if (tf !== 'number' || tt !== 'number')
        throw Error('Argements is error');
    if (from >= to)
        throw Error('from must big than to');

    function getFrom() {
        return from;
    }

    function getTo() {
        return to;
    }

    function setFrom(f) {
        if (f <= to)
            from = f;
        else
            throw Error('from must big than to');
    }

    function setTo(t) {
        if (t >= from)
            to = t;
        else
            throw Error('from must big than to');
    }
    /*
    var props = {
        from: {
            value: from,
            enumerable: true,
            writable: false,
            configurable: false
        },
        to: {
            value: to,
            enumerable: true,
            writable: false,
            configurable: false
        }
    }
    if (this instanceof Range)
        Object.defineProperties(this, props);
    else
        return Object.create(Range.prototype, props);
    */
    Object.defineProperties(this, {
        from: {
            get: getFrom,
            set: setFrom,
            enumerable: true,
            configurable: false
        },
        to: {
            get: getTo,
            set: setTo,
            enumerable: true,
            configurable: false
        }
    })
}
/*
Object.defineProperties(Range.prototype, {
    includes: {
        value: function(x) {
            return this.from <= x && x <= this.to;
        }
    },
    foreach: {
        value: function(f) {
            for (var i = Math.ceil(this.from); i <= this.to; i++) {
                f(i);
            };
        }
    },
    toString: {
        value: function() {
            return "(" + this.from + "..." + this.to + ")";
        }
    }
});
*/
Range.prototype = hideProps({
    construtor: Range,
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for (var i = Math.ceil(this.from); i <= this.to; i++) {
            f(i);
        };
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
});
