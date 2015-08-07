//@import functions.js
//@import Set.js
function SingletonSet(member) {
    this.member = member;
}

SingletonSet.prototype = inherite(Set.prototype);

extend(SingletonSet.prototype, {
    construtor: SingletonSet,
    add: function() {
        throw "read-only set";
    },
    remove: function() {
        throw "read-only set";
    },
    size: function() {
        return 1
    },
    foreach: function(f, context) {
        f.call(context, this.member);
    },
    contains: function(x) {
        return x === this.member;
    }
});

SingletonSet.prototype.equals = function(that) {
    return that instanceof Set && this.size() == 1 && that.contains(this.member);
};