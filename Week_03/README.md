# 学习笔记

## 四则运算

1. 语法分析有两种LL算法，LR算法

2. 四则运算包括number（数字），operator（运算符），whitespace（格式化字符），lineterminator。

3. EOF表示语法终结

## 正则表达式

1. 用正则表达式的exec方法来匹配字符

## LL词法分析

1.使用一个last index通过前进长度的比较来判断是否又不认识的字符

2.使用yield返回新的序列

3.for of 循环打印token

## LL语法分析

1.multiplicativeexpression三个逻辑分支第一个处理字符开头是number的情况第二个处理multiplicativeexpression + *第三个处理multiplicativeexpression + / 其他情况直接return出去

2.处理完毕字符串加上EOF逻辑分支

## 总结

1. 没听太懂，
