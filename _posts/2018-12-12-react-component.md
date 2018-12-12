---
title: React.Component
description: React的项目都是基于组件，将不同的业务和功能抽象层不同的组件，然后把组件通过某些规则组合在一起构成一个项目。
categories:
    - React
tags:
---

# Component（组件）

> Build encapsulated components that manage their own state, then compose them to make complex UIs.

React 的项目都是基于组件，将不同的业务和功能抽象层不同的组件，然后把组件通过某些规则组合在一起构成一个项目。React.Component 是所有组件的顶级父类，通过React.createElement()将Componenent转换成React.Element。

## 主要形式

### empty component

这个可以称呼为空组件，但不是空的组件。其中 null、void、boolean 三个类型的值为空组件，因此null、undefined、true、false这四个值也是React.Element，它们跟空字符串还不一样，空字符串属于文本组件。

```javascript
export type ReactEmpty = null | void | boolean
```

### text component

文本组件，主要包括 string 和 number 两种类型。所有字符串和数字都是React.Element。

```javascript
export type ReactText = string | number
```

### host component

宿主组件，如果宿主环境是浏览器，那么所有 dom 标签都是组件。这一类组件不需要创建，但是可以通过 React.createElement()实例成 React 需要的数据结构。

```javascript
// type为dom标签的名称
// props为dom元素的api
// children是子元素，在这里面传入的空组件和文本组件
React.createElement(type, props: object, children)

```

### function component

如果一个函数返回一个 React.Element 就可以称为函数组件。

```javascript
function FucntionComponent(props){
    return '123'
}
// 这里在对函数组件进行实例的时候传入的type必须是函数对象，而不是函数实例。
// 第二个参数props会被传入函数的第一个参数
// 第二个以后的参数会被合并后传递给props.children
React.createELmenent(FucntionComponent, props, ...)
```

### class component

一个类集成了 React.Component 就被称为类组件，如果不继承也可以实现类组件，必须要有一个 render()方法，然后在原型上加一个 isReactComponent={}，也会被 React 认为是一个类组件。总结一下就是只要一个类按照 React 要求的类组件要求来实现，然后有一个标识就可以。

### render()

这个函数必须要实现的，这个函数需要返回一个 React.Element。但是不能返回 undefined。调用 this.setState()和 this.forceUpdate()后调用这个方法，还有就是父级组件 render()的也会触发。

```javascript
// 非继承形式
class FakeComponent {
    render() {
        return 123
    }
}

FakeComponent.prototype.isReactComponent = {}

// 继承方式
class CustomComponent extends React.Component {}
```

### 属性

-   static defaultProps 定义默认属性值
-   static displayName 定义展示名称
-   static contextTypes 定义上下文类型
-   static PropTypes 定义属性类型
-   props 来自组件外传入的数据
-   context 来自上下文传递的数据
-   refs 记录子组件的实例引用
-   state 自身的状态数据，这个属性最好是用 this.setState()更新，一般不要直接修改，某些情况可以例外。

这个例外其实在三个 render 前的生命周期里可以直接复制，分别是 componentWilMount，componentWillReceiveProps，componentWillUpdate 这三个，因为它们调用完成之后马上进行 render，这是直接赋值和 setState()的效果是一致。在 componentWilMount，componentWillReceiveProps 这两个方法里面使用 setState()会连续两次 render()，componentWillUpdate 这个里面一定不能使用 setState()。当然官方是不建议直接赋值的，这也算一种不安全做法，但是方便，具体情况看个人爱好。

### 行为

-   setState() 更新组件状态
-   forceUpdate() 强制更新组件

### 生命周期

生命周期主要 react-reconciler 和 react-dom 来调用，当组件处于不同的状态，就会调用不同的生命周期函数。

旧版生命周期

-   constructor() 实例化
-   ~~componentWilMount()~~ 挂载前
-   componentDidMount() 挂载后
-   ~~componentWillReceiveProps()~~ 父级组件调用 render
-   shouldComponentUpdate() 更新周期内调用 render 前，返回 false 则结束更新周期
-   ~~componentWillUpdate()~~ 更新前
-   componentDidUpdate() 更新后
-   componentWillUnmount() 卸载前

新版新增生命周期

-   static getDerivedStateFromProps() 在第一次初始化和更新周期 render 前，返回状态则更新。
-   getSnapshotBeforeUpdate() 更新周期 render 后，会把返回值传递给 componentDidUpdate 的第三个参数
-   static getDerivedStateFromError() render 前捕获到异常，如果返回一个状态就继续更新。
-   componentDidCatch() 在 commit 阶段，因此有副作用，commit 是调度器调度 worker 进行工作的阶段。

## 源码赏析

### 构造器

```javascript
// 在实现类的构造函数内接受不到updater这个参数
function Component(props, context, updater) {
    this.props = props
    this.context = context
    this.refs = emptyObject
    // 由react-reconciler提供，我还没找到可以自己替代的方法
    this.updater = updater || ReactNoopUpdateQueue
}
```

### 原型

```javascript
// class component的标识
Component.prototype.isReactComponent = {}

// 两个更新方法
Component.prototype.setState = function(partialState, callback) {
    this.updater.enqueueSetState(this, partialState, callback, 'setState')
}

Component.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
}
```

# PureComponent（纯组件）

纯组件在 shouldComponentUpdate 这个生命周期函数里提供了一个浅对比

```javascript
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

// 结构和Component是一模一样的
function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context;    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
Object.assign(pureComponentPrototype, Component.prototype);

// 就是多了一个纯组件的标识
pureComponentPrototype.isPureReactComponent = true;

// 这就是那个浅对比函数
function shallowEqual(objA: mixed, objB: mixed): boolean {
    if (is(objA, objB)) {
        return true;
    }

    if ( typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null ) {
        return false;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    for (let i = 0; i < keysA.length; i++) {
        if ( !hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]]) ) {
            return false;
        }
    }
    return true;
}


// ReactFilberClassComponent.js
// 坚持是否需要更新
function checkShouldComponentUpdate(workInProgress, ctor, ... ) {
    // ingores...

    // 纯组件的特殊处理
    if (ctor.prototype && ctor.prototype.isPureReactComponent) {
        return (!shallowEqual(oldProps, newProps) ||!shallowEqual(oldState, newState));
    }
    return true;
}

```
