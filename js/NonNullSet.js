//@import functions.js
//@import Set.js
function NonNullSet() {
    Set.apply(this, arguments);
}

NonNullSet.prototype = inherite(Set.prototype);
NonNullSet.prototype.construstor = NonNullSet;
NonNullSet.prototype.add = function() {
    for (var i = arguments.length - 1; i >= 0; i--) {
        if (arguments[i] == null)
            throw new Error("Can't add null or undefined to a NonNullSet");
        return Set.prototype.add.apply(this, arguments);
    };
};
