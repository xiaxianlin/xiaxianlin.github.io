---
title: React.Element
description: Element是React中一种可渲染的数据，其主要作用就是拿去给ReactDOM.render()使用。
categories:
    - React
tags:
---

# React.Element

Element 是 React 中一种可渲染的数据，其主要作用就是拿去给 ReactDOM.render()使用。在这里需要谈论下 Component 和 Element 的关系，在我看来 Component 像是一个模具，也有点像类，而 Element 就更新实体或者类实例后的对象，Component 的实例并不是 Element。

## 数据结构

```javascript
// ReactElementType.js

export type Source = {
    fileName: string,
    lineNumber: number
}

export type ReactElement = {
    $$typeof: any,
    type: any,
    key: any,
    ref: any,
    props: any,
    _owner: any, // ReactInstance or ReactFiber
    // __DEV__
    _store: {
        validated: boolean
    },
    _self: React$Element<any>,
    _shadowChildren: any,
    _source: Source
}
```

从源码来上看，Element 的结构非常简单，就是一个普通的 object 类型，连构造函数都不算。

### @@typeof

当 Element 是一个普通对象的时候，需要这个字段来区分该对象是不是一个合法的 Elemenent。一般我们使用 React.createElement()这个接口来创建，其实也可以自己写一个对象，只要满足格式也是可以的。如果 React 发现当@@typeof 为 REACT_ELEMENT_TYPE，就默认必然有后面的字段。

```javascript
export const REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7
```

### type

type 主要接受的是一个组件，关于组件可以去看一下《React.Component》。主要可以传入 class、function 和 string 三种类型的值。

-   class 和 function 代表着 React 标准的 Component 形式。如果传入非法类型，渲染时会被忽略。
-   string 类型对应原生 DOM 标签的名称，比如 a、div、p 等等这样的标签。

### key

key 就是一个唯一标识，可以自定义，这个非常重要，能影响到渲染的性能。当一个 Element 的 key 发生变化时，需要销毁原有的 Element，再去生成一个全新的。这个字段也带来很多坑。

### ref

ref 可以接受 React.Ref 类型的值，最后可以获取 type 实例。但是 function component 是不能传入的，因为它没有真的实例。

-   如果 type 是 class component，那么拿到的是 class 的实例。
-   如果 type 是原生 DOM 节点，那么拿到的是 DOM Element 的实例。

如果 ref 是 forward_ref 这个拿到的实例就不确定了，需要看具体给谁了，但是还是依然在上面两类里面。

### props

一个普通的 object 对象，type 实例后所需要的参数，但是这里面 children 这个字段比较特殊，这是一个内置字段，代表着当前元素的子元素。

-   当 type 为 function component 时，props 会传入给函数的第一个参数。
-   当 type 为 class component 时，在 class 实例化后，可以在对象内部使用 this.props 获得。
-   当 type 为原生 DOM 节点时，可以的传入 DOM API，自定义的属性也可以，但是会有警告。

### \_owner

内部字段，用来记录谁创建了这个元素。要么是一个组件的实例，要么就是 Fiber。

### 其他字段

\_store、\_self、\_shadowChildren 和\_source 都是在开发模式中使用的，不做具体谈论。

## 相关 api

```javascript
const ReactElement = function(type, key, ref, self, source, owner, props) {
    const element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: ref,
        props: props,
        _owner: owner
    }
    return element
}
```

很简单的一个工厂方法，相应字段在上面已经介绍过，后面的 createElement()和 cloneElement()都会用到这个工厂方法。

### React.createElement()

这个方法的第二个参数如果传入 children 这个字段的话会被忽略。

```javascript
export function createElement(type, config, children) {
    let propName
    const props = {}
    let key = null
    let ref = null
    let self = null
    let source = null
    if (config != null) {
        if (hasValidRef(config)) {
            ref = config.ref
        }
        if (hasValidKey(config)) {
            key = '' + config.key
        }

        self = config.__self === undefined ? null : config.__self
        source = config.__source === undefined ? null : config.__source
        // Remaining properties are added to a new props object
        for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName]
            }
        }
    }

    // 把第二参数的所有参数处理成children，然后放在props里面，会覆盖config.chilren
    const childrenLength = arguments.length - 2
    if (childrenLength === 1) {
        props.children = children
    } else if (childrenLength > 1) {
        const childArray = Array(childrenLength)
        for (let i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2]
        }
        props.children = childArray
    }

    // 将我们设置的props的默认值赋值给对应的prop
    if (type && type.defaultProps) {
        const defaultProps = type.defaultProps
        for (propName in defaultProps) {
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName]
            }
        }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)
}
```

### React.cloneElement()

clone 就是进行一堆复制，然后创建一个新的。clone 的同时也可以重新配置 props。

```javascript
export function cloneElement(element, config, children) {
    let propName
    const props = Object.assign({}, element.props)
    let key = element.key
    let ref = element.ref
    // 下面这个属性是被保护的。
    const self = element._self
    const source = element._source
    // clone的时候改变了ref，owner会被重写
    let owner = element._owner

    // 省略掉了处理config和children的代码，跟createElement()里面的是一模一样的。

    return ReactElement(element.type, key, ref, self, source, owner, props)
}
```

### React.createFactory()

```javascript
export function createFactory(type) {
    const factory = createElement.bind(null, type)
    factory.type = type
    return factory
}
```

这个就很简单了，就是创建一个快速创建同类 Element 的方法。

### react.isValidElement()

```javascript
export function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
}
```

简单判断一下是不是合法的 Element 对象。

## 一些特殊情况

Element 并不是只有 object 类型，实际上还有空和文本两类，这两类分别对应 empty component 和 text component。

```javascript
// 这样都不会报错，而且都还能渲染
// 这两种会返回实例为‘123’
ReactDOM.render(123, ...)
ReactDOM.render('123', ...)
// 这四种会返回实例为null，渲染也全是空
ReactDOM.render(true, ...)
ReactDOM.render(false, ...)
ReactDOM.render(undefined, ...)
ReactDOM.render(null, ...)
```
