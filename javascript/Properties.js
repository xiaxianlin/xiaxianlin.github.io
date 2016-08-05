/**
 * 给Object.prototype定义properties()方法
 * 这个方法返回一个表示调用它的对象上的属性名列表对象
 * （如果不带参数调用它，就表示该对象的所有属性）
 * 返回的对象定义了4个有用的方法：toString()、descriptors()、hide()和show()
 */
~(function namespace() {
    //这个函数成为所有对象的方法
    function properties() {
        var names; //属性名组成的数组
        if (arguments.length == 0)
            names = Object.getOwnPropertyNames(this); //所有的只有属性
        else if (arguments.length == 1 && Array.isArray(arguments[0]))
            names = arguments[0]; //名字组成的数组
        else //参数列表自身就是名字
            names = Array.prototype.slice.call(arguments, 0);
        //返回一个全新的Properties对象，用以表示属性的名字
        return new Properties(this, names);
    }

    //将它设置为Object.prototype的新的不可枚举的属性
    //这是从私有函数作用域导出的唯一一个值
    Object.defineProperty(Object.prototype, "properties", {
        value: properties,
        enumrable: false,
        writable: true,
        configurable: true
    });

    //这个构造函数是由上面的properties()函数所调用的
    //Properties类表示一个对象的集合
    function Properties(o, names) {
        this.o = o; //属性所属的对象
        this.names = names; //属性的名字
    }

    //将代表这些属性的对象设置为不可以枚举
    Properties.prototype.hide = function() {
        var o = this.o,
            hidden = {
                enumrable: false
            };
        this.names.forEach(function(n) {
            if (o.hasOwnProperty(n))
                Object.defineProperty(o, n, hidden);
        });
        return this;
    };

    //将这些属性设置为只读的和不可以配置的
    Properties.prototype.freeze = function() {
        var o = this.o,
            freezen = {
                writable: false,
                configurable: false
            };
        this.names.forEach(function(n) {
            if (o.hasOwnProperty(n))
                Object.defineProperty(o, n, freezen);
        });
        return this;
    };

    //返回一个对象，这个对象是名字到属性描述的映射表
    //使用它来复制属性，连同属性特性一起复制
    //Object.defineProperties(dest, src.properties().descriptors());
    Properties.prototype.descriptors = function() {
        var o = this.o,
            desc = {};
        this.names.forEach(function(n) {
            if (!o.hasOwnProperty(n)) return;
            desc[n] = Object.getOwnPropertyDescriptor(o, n);
        });
        return desc;
    };

    //返回一个格式化良好的属性表
    //列表中包含名字、值和属性特征，使用“permanent”表示不可以枚举
    //使用“readonly”表示不可写，使用“hidden”表示不可以枚举
    //普通的可枚举、可写和可配置不包含特效列表
    Properties.prototype.toString = function() {
        var o = this.o;
        var lines = this.names.map(nameToString);
        return "{\n" + lines.join(",\n") + "\n}";

        function nameToString(n) {
            var s = "",
                desc = Object.getOwnPropertyDescriptor(o, n);
            if (!desc) return "nonexistent" + n + ": undefined";
            if (!desc.configurable) s += "permanent ";
            if ((desc.get && !desc.set) || !desc.writable) s += "readonly ";
            if (!desc.enumrable) s += "hidden ";
            if (desc.get || desc.set) s += "accessor " + n;
            else
                s += n + ":" + ((typeof desc.value === "function") ? "function" : desc.value);
            return s;
        }
    };

    //最后，将原型对象中的实例方法设置为不可枚举的
    //这里用到了刚定义的方法
    var str = Properties.prototype.properties().toString();
    log(str);
}());
