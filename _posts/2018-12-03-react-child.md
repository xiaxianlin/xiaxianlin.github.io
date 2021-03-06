---
title: React.Children
description: Children是React用来处理props.children的一个对象，一个提供了五个接口，分别是map, forEach, count, toArray, Only。
categories:
    - React
---

> Children 是 React 用来处理 props.children 的一个对象，一个提供了五个接口，分别是 map, forEach, count, toArray, Only。

### 处理 children 不同类型的值

> 在自定义组件中可以对 children 再加工，所以不管传递什么都能拿到，主要在 native 元素里面的对不同的值有不同的处理结果。

1) true, false, undefined, null 以及空字符串

```jsx
<div>{true}</div> 		// output: <div></div>
<div>{false}</div> 		// output: <div></div>
<div>{null}</div> 		// output: <div></div>
<div>{undefined}</div> 	// output: <div></div>
<div>{''}</div> 			// output: <div></div>
```

2) 数值或字符串类型

```jsx
<div>{'abc'}</div> // output: <div>abc</div>
<div>{123}</div> // output: <div>123</div>
<div>{0123}</div> // error: 不是一个合法数字，如果数字0开头，必须是0x,0b,0o开头，且数字符合当前进制的数字
```

3) 函数类型

```jsx
// 函数在react里面是无法直接使用，但是可以在我们自定义的组件里使用。
class Header extends React.Component {
    render() {
        return <header className="App-header">{this.props.children(this.props.title)}</header>
    }
}

<Header title="header">{ text => <p>{text}</p> }</Header>

//output
<header className="App-header">
	<p>header</p>
</header>
```

4) 对象类型

```jsx
// react只接受react.element对象和迭代器对象这两类，其他类型需要自定义组件去处理。
// 模拟一个元素对象
const elememt = {
    $$typeof: Symbol.for('react.element'),
    type: 'a',
    ref: null,
    props: {
        href: 'http://www.baidu.com',
        children: '百度'
    }
}
<div>{element}</div>
// output:
<div>
	<a href="http://www.baidu.com">百度</a>
</div>

// 迭代器对象
function createChildrenIterator(data) {
    return {
        [Symbol.iterator]: () => {
            let index = -1
            return {
                next: () => {
                    index++
                    return {
                        value: <button key={index}>{data[index]}</button>,
                        done: index === data.length
                    }
                }
            }
        }
    }
}
const iterator = createChildrenIterator(['create', 'remove'])

<div>{iterator}</div>
// output:
<div>
	<button>create</button>
	<button>remove</button>
</div>
```

5) 数组类型，遍历整个数组，然后按照以上 4 条规则处理。

### 部分源码赏析

在 ReactChildren 整个源码里面有一个核心对象 traverseContext，这个对象相对于建立了在遍历 children 时整个的上下文环境。

```javascript
// 这是traverseContext的数据结构
{
    result: mapResult, // 数组，记录遍历过后的处理结果
    keyPrefix: keyPrefix,
    func: mapFunction, // 遍历时用到的处理函数，默认是child => child, 在map和forEach的时候手动传入，最后计算结果交给result。
    context: mapContext, // 父级上下文对象，主要在当func返回一个数组时，进行子级遍历使用
    count: 0, // 计数器
}
```

然后在来看 map 方法是怎么实现的。

```javascript
// React.Children.map()
// children就是组件的props.children
// func是在遍历的时候我们处理的函数，默认函数中的this对象指向第三个参数context。
// context是上下文环境，这个跟traverseContext不一样的，这个参数基本传入的是组件的this。
function mapChildren(children, func, context) {
    // 这里最有趣的就是除了null和undefined外其他的类型都可以被遍历。
    if (children == null) {
        return children
    }
    // 用来存储遍历后的处理结果
    const result = []
    mapIntoWithKeyPrefixInternal(children, result, null, func, context)
    return result
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    let escapedPrefix = ''
    if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/'
    }
    // 创建整个遍历过程中的上下文对象
    // 实际上这里有上下文对象池，每次都从队列的尾部拿一个处理，如果没有则创建新的，池里最多有10个。
    const traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context)
    // traverseAllChildren会返回遍历数量。
    // mapSingleChildIntoContext是一个函数，这个函数用来处理traverseContext。
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext)
    // 清除traverseContext的数据，并返回池里。
    releaseTraverseContext(traverseContext)
}
```

接下来是最核心的两个函数 traverseAllChildrenImpl，mapSingleChildIntoContext。

```javascript
// 首先来看看如何处理traverseContext
// bookKeeping就是traverseContext
function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    const { result, keyPrefix, func, context } = bookKeeping
    // 这里得到了我们处理的结果
    let mappedChild = func.call(context, child, bookKeeping.count++)
    // 因为允许返回数组，这时候我们可以进行很多有趣的操作。
    if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, c => c)
    } else if (mappedChild != null) {
        // 省略部分代码...
        result.push(mappedChild)
    }
}

// 然后再来看看最关键的traverseAllChildrenImpl
// traverseAllChildrenImpl这个函数是实现了traverseAllChildren这个函数，只是nameSoFar为空字符串而已
// 在map函数里callback = mapSingleChildIntoContext
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    // some code...
    // 当children为boolean,undefined,null,string,number是可以调用回调
    // 或者children为对象并且是react的element或者protal时可以调用回调
    let invokeCallback = false
    // 省略判断代码...
    // 在这里可以很明显的看出来不管children是不是数组都可以进行遍历
    if (invokeCallback) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar)
        return 1
    }
    // some code...
    if (Array.isArray(children)) {
        // 处理数组，取出来之后进行递归处理
        for (let i = 0; i < children.length; i++) {
            child = children[i]
            nextName = nextNamePrefix + getComponentKey(child, i)
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext)
        }
    } else {
        // 这里是最有趣的地方，这里表示children可以是迭代器对象。
        const iteratorFn = getIteratorFn(children)
        if (typeof iteratorFn === 'function') {
            const iterator = iteratorFn.call(children)
            let step
            let ii = 0
            while (!(step = iterator.next()).done) {
                child = step.value
                nextName = nextNamePrefix + getComponentKey(child, ii++)
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext)
            }
        } else if (type === 'object') {
            // 异常数据处理代码...
        }
    }
    return subtreeCount
}
```

#### map()的运行流程

![](/assets/images/articles/react_children.png)

#### 剩余的几个接口简单介绍

* forEach()处理方式和 map()基本一致，只是把 mapSingleChildIntoContext 换成了 forEachSingleChild，而这个函数更简单

```javascript
// 基本上回调一下后啥都不管
function forEachSingleChild(bookKeeping, child, name) {
    const { func, context } = bookKeeping
    func.call(context, child, bookKeeping.count++)
}
```

* toArray()也是跟 map()差不多，就等于 map(children, child => child)

```javascript
function toArray(children) {
    const result = []
    mapIntoWithKeyPrefixInternal(children, result, null, child => child)
    return result
}
```

* count()在 map()的基础，砍掉了回调和 traverseContext 的处理

```javascript
function countChildren(children) {
    return traverseAllChildren(children, () => null, null)
}
```

* only 是最简单，返回自身，只是做了一次合法校验而已

```javascript
function onlyChild(children) {
    invariant(isValidElement(children), 'React.Children.only expected to receive a single React element child.')
    return children
}
```

### 一个 map()的小玩法

```jsx
// 首先定义个组件
class App extends React.Component {
    render() {
        const { children } = this.props
        const content = React.Children.map(children, function(item, count) {
            return Array.isArray(item.props.children) ? item.props.children : item
        })
        return <div className="app">{content}</div>
    }
}
<App>
	<p>p1</p>
	<div>
		<p>p2</p>
		<p>p3</p>
	</div>
	<section>
		<p>p4</p>
		<p>p5</p>
	</section>
</App>
// output:
<div className="app">
	<p>p1</p>
	<p>p2</p>
	<p>p3</p>
	<p>p4</p>
	<p>p5</p>
</div>
```
