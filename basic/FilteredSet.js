//@import functions.js
//@import Set.js
var FilteredSet = Set.extend(function FilteredSet(set, filter) {
    this.set = set;
    this.filter = filter;
}, {
    add: function() {
        if (this.filter) {
            for (var i = 0; i < arguments.length; i++) {
                var v = arguments[i];
                if (!this.filter(v)) {
                    throw new Error("FilteredSet: value " + v + " rejected by filter");
                }
            };
        }
        this.set.add.apply(this.set, arguments);
        return this;
    },
    remove: function() {
        this.set.remove.apply(this.set, arguments);
        return this;
    },
    contains: function(v) {
        return this.set.contains(v);
    },
    size: function() {
        return this.set.size();
    },
    foreach: function(f, c) {
        this.set.foreach(f, c);
    }
});
