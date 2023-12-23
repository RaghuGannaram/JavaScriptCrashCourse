if (!Function.prototype.bind) {
    Function.prototype.bind = function(context, ...args) {
        var fn = this;
        return function() {
            return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}
