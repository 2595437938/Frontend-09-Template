# 学习笔记

## porxy基础用法

1.proxy会使代码预期性变差，使用proxy代理某个对象，所有行为可以再去指定

2.设置对象属性会触发proxy的set属性，设置没有的属性也会触发set

## 模拟reactive实现原理

1.封装reactive一般返回一个proxy对象

2.get是读取对象内容触发的方法

3.effect可以监听reactive上的属性代替事件监听，传入一个回调函数
4.在js中没有办法获取它能够访问的所有变量，但是调用函数可以找到他实际用了哪些变量，当函数引用变量通过effect时，可以在reactive的get方法去监听

5.引用reactive对象会在get里发生注册行为，直接将调用的reactive变量push进准备好的数组。

6.将object作为key找到reactive，将准备好的数组变成一个map对象存，push了以后第一个就是对象第二个就是属性通向用map存

7.有索引就不需要遍历整个数据，查有对象有属性后在执行callback（）

## 优化reactive

1.get的属性是一个对象的时候应该在套用一个reactive，加判断return reactive

2.再次return会生成一个新的proxy，将原先的proxy存起来。

## reactive的响应式双向绑定

1.reactive可以负责从数据到dom元素的监听，也可以是任何的数据输入

2.单向绑定在effect给一个单项绑定从数据到dom元素中，给dom元素相应的事件来改变对象的属性，就是双向绑定

3.通过监听dom来的属性变化给予另一个元素的style的属性变化可以制作一个简单的调色盘

4.设置另一个dom元素的style属性的值使用${对象.属性}

## 使用Range实现DOM精确操作

1.用range找到能拖拽到的空隙，计算距离被拖拽的元素最近的节点，然后在该节点插入该元素。

## 问题

1.没怎么明白range到底是什么以及使用场景（可能是以前没接触过相关）
