---
layout: post
title: 正则优化
categories: 正则
---

### 常见优化措施

- 加速某些操作
- 避免冗余操作

### 应用之前优化

- 编译缓存
  - 集成式处理中的编译缓存
  - 程序式处理中的编译缓存
  - 面向对象式处理中的编译缓存
- 预查必须字符/子字符串优化
- 长度判断优化

### 通过传动转置优化

- 字符串起始/行锚点优化
- 隐式锚点优化
- 字符串结束/行锚点优化
- 开头字符/字符组/子串识别优化
- 内嵌文字字符串检查优化
- 长度识别传动优化

### 优化正则表达式本身

- 文字字符串连接优化
- 化简量词优化
- 消除无必要括号
- 消除不需要的字符组
- 忽略优先量词之后的字符优化
- “过度”回溯检测
- 避免指数级（超线性 super-linear）匹配
- 使用占有优先量词削减状态
- 量词等价转换
- 需求识别

### 提高表达式速度的诀窍

- 编写适于优化的正则表达式
- 模拟优化
- 主导引擎的匹配

### 常识性优化

- 避免重新编译
- 使用非捕获型括号
- 不要滥用括号
- 不要滥用字符组
- 使用起始锚点

### 其他优化

- 将文字文本独立出来
  - 从量词中“提取”必须元素
  - “提取”多选结构开头的必须元素
- 将锚点独立出来
  - 在表达式前面独立出\*\*^**和**\\G\*\*
  - 在表达式末尾独立出\*\*$\*\*
- 忽略优先/匹配优先
  - 目标字符串很长，**冒号**比较接近字符串开头，使用忽略优先量词
  - 目标字符串很长，**分号**比较接近字符串末尾，使用匹配优先量词
  - 数据随机时，使用匹配优先的量词
- 拆分正则表达式
- 模拟开头字符识别
- 使用固化分组和占有优先量词
- 主导引擎的匹配
  - 将最可能匹配的多选分支放在前头
  - 将结尾部分分散到多选结构内
- 消除循环：「opening normal\*(special normal)\* closing」
  - special 部分和 normal 部分匹配的开头不能重合
  - normal 部分必须匹配至少一个字符
  - special 部分必须是固化的
  - 寻找通用套路
