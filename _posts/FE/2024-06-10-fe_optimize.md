---
layout: post
title: 前端优化
categories: FE
---

### 网络请求

- 减少HTTP请求
- 使用HTTP/2协议
- 减少cookie传输
- 开启gzip

### 静态资源

- 使用CDN存储
- 字体图标代替图片图标
- 资源缓存
- 文件压缩

### 首屏加载

- 服务端渲染
- 白屏loading

### 交互体验

- 图片优化
  - 延迟加载
  - 降低图片大小
  - 用CSS效果替代图片
  - 使用webp格式图片
- 按需加载
- 预加载：preload & prefetch
- 减少重绘重排
- 骨架屏
- 可视区域渲染

### 脚本性能

- 脚本放在页面底部
- 减少DOM操作
- 使用位操作
- 动画使用requestAnimationFrame
- 合理使用事件委托
- 使用web worker

### 样式性能

- 样式表放在head中
- 不使用CSS表达式
- 降低选择器的复杂性
- 优先使用flex布局
- 使用transform和animate来实现过渡和动画

### 减少reflow和repaint

- 不要通过父级来改变子元素样式，最好直接改变子元素样式，改变子元素样式尽可能不要影响父元素和兄弟元素的大小和尺寸
- 尽量通过class来设计元素样式，切忌用style 多次操作单个属性
- 实现元素的动画，对于经常要进行回流的组件，要抽离出来，它的position属性应当设为fixed或absolute
- 权衡速度的平滑。比如实现一个动画，以1个像素为单位移动这样最平滑，但reflow就会过于频繁，CPU很快就会被完全占用。如果以3个像素为单位移动就会好很多。
- 不要用tables布局的另一个原因就是tables中某个元素一旦触发reflow就会导致table里所有的其它元素reflow。在适合用table的场合，可以设置table-layout为auto或fixed，
- 这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围。
- css里不要有表达式expression
- 减少不必要的 DOM 层级（DOM depth）
- 避免不必要的复杂的 CSS 选择器，尤其是后代选择器（descendant selectors），因为为了匹配选择器将耗费更多的 CPU。
- 尽量不要过多的频繁的去增加，修改，删除元素，因为这可能会频繁的导致页面reflow，可以先把该dom节点抽离到内存中进行复杂的操作然后再display到页面上。
- 请求如下值offsetTop, offsetLeft, offsetWidth, offsetHeight，scrollTop/Left/Width/Height，clientTop/Left/Width/Height，浏览器会发生reflow，建议将他们合并到一起操作，可以减少回流的次数。

### webpack优化策略

- 使用最新版本
- 文件压缩
- 代码拆分
- 分离两套环境
- 模块热更新
- 独立CSS文件
- 减少查找过程
  - 合理配置resolve.extensoins
  - 优化resolve.modules
  - 设置resolve.alias
- 缩小构建目标
  - excludes
  - includes
- 利用多线程
  - HappyPack
  - thread-loader
- 预先编译资源模块（DllPlugin）
- 缓存Cache相关
  - babel-loader开启缓存
  - terser-webpack-plugin开启缓存
  - 使用cache-loader或者hard-source-webpack-plugin
- 合理使用sourceMap
- 使用ES6 Module语法，保证Tree-Shaking起作用
- 合理使用Ployfill
- 预加载资源webpackPrefetch
- 使用CSS Sprite合并图片
- 合理配置chunk的哈希值
