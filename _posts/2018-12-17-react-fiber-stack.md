---
title: ReactFiberStack
description: React中的栈数据结构的设计，在React的多出场景中被使用到。
categories:
    - React
---

React 中的栈数据结构的设计，在 React 的多出场景中被使用到。它的结构是市面上的有点不一样，加入了游标（cursor）这个概念，其他的依然是一样的，都是用数组来模拟的。

## 接口

-   createCursor(defaultValue)
-   isEmpty()
-   pop(cursor, fiber)
-   push(cursor, value, fiber)

在这个栈数据结构里面去掉常规的 top()接口，但是用了游标，因此 pop 和 push 不会直接返回数据，而是把数据交给游标对象了。这样一来在操作栈之前必须先创建游标，这里有个很神奇的地方就是用 createCursor()创建游标的默认值是没有进栈的。

## 属性

```javascript
// 栈游标数据结构
export type StackCursor<T> = {
    current: T
}
// 存储栈数据的数组
const valueStack: Array<any> = []
// 存储fiber数据的接口，这是用来处理ReactFiber业务的特有
let fiberStack: Array<Fiber | null>
// 内部索引
let index = -1
```

## createCursor()

这个接口取代了 top 接口，top 接口返回的是最后入住的那个数据，而游标会一直保持最上层的值，这样只需要直接使用游标，就不用去操作栈了。

```javascript
function createCursor<T>(defaultValue: T): StackCursor<T> {
    return {
        current: defaultValue
    }
}
```

## isEmpty()

这个就很简单，就是判断当前索引位置。

```javascript
function isEmpty(): boolean {
    return index === -1
}
```

## pop()

接口不难理解，取出当前索引的值交给游标，然后置空当前 valueStack 位置的值，然后索引回退一位。这里有个要点就是为什么不用 delete 去移出数组这个索引，而只是去赋值为 null。个人这样的效率应该比不断 delete 和 push 数组高。而且也占不了多少内存。

```javascript
function pop<T>(cursor: StackCursor<T>, fiber: Fiber): void {
    if (index < 0) {
        return
    }
    cursor.current = valueStack[index]
    valueStack[index] = null
    index--
}
```

在上面的源码里面还有第二个问题，这个 fiber 参数干嘛用的，这个操蛋的方式需要看编译后的源码才清楚。

```javascript
function pop(cursor, fiber) {
    if (index < 0) {
        {
            warningWithoutStack$1(false, 'Unexpected pop.')
        }
        return
    }
    {
        if (fiber !== fiberStack[index]) {
            warningWithoutStack$1(false, 'Unexpected Fiber popped.')
        }
    }
    cursor.current = valueStack[index]
    valueStack[index] = null
    {
        fiberStack[index] = null
    }
    index--
}
```

这时候就发现基础属性里面的 fiberStack 用上了，这个 flowtype 的写法我是真看不懂，这种额外插入的代码是什么鬼。后面 push 的接口也有这个问题。

## push()

加入一个新值，索引向前移以为，依然需要传入游标，游标保存最新值，表示当前 top()取出来的值。传入一个 fiber，表示当前值与某个 fiber 关联，像 React.Context 这些都需要用到栈和 fiber，所以 fiber 这个是跟业务相关。fiber 这个值入栈的表达式在源码里面没有，编译后会出现。

```javascript
function push<T>(cursor: StackCursor<T>, value: T, fiber: Fiber): void {
    index++
    valueStack[index] = cursor.current
    cursor.current = value
}
```
