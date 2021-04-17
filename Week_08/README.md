# 浏览器工作原理
## 浏览器总论

1.工作原理
首先发送一个HTTP请求
    URL->HTTP>HTML
    HTML->parse>DOM
    DOM -> css   computing>DOM with css
    DOM with css->layout>DOM with position
    DOM with position->render>Bitmap
    > 整个的过程就是从 URL 转换为 Bitmap 的过程，先发送请求到服务器，然后服务器返回 HTML，浏览器解析 HTML，然后构建 DOM 树，计算 CSS 属性，然后进行排版，最后渲染成位图，然后经过操作系统或硬件的 API 完成视图的显示。
 2.ISO-OSI网络模型
 
| 应用 | HTTP |
|:--------:|:--------:|
| 表示| HTTP |
| 会话| HTTP |
| 传输| TCP |
| 网络| INTERNET |
| 数据链路| 4G/5G/WIFI|
| 物理层| 4G/5G/WIFI |

- TCP
:  流（tcp传输数据的形式）
:  端口（依靠端口来分发各个应用）
: require('net')【依赖的库】
- IP
:  包（ip传输数据的形式）
:  IP地址（唯一的标识）
：libnet/libpcap【依赖的库】
- HTTP
：Request(客户端发起一个Request)
：Response(服务端返回一个Response)
## HTTP请求
#### 服务端环境准备
###### 来源网络
```javascript
// 简单模拟服务端
const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.log(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(' Hello World\n');
    });
}).listen(8088);

console.log("server started");
```
####   第一步 HTTP请求总结
1. 设计一个HTTP请求的类
2. content type 是一个必要的字段，要有默认值
3. HTTP请求的body是一个k-v的格式
4. 不同的content type 会影响body的格式
5. 最后有一个content-length
 #### 第二步 send函数总结
 
 1. 在Request的构造器中手机必要的信息
 2. 设计一个send函数，把请求真实的发送到服务器
 3. send函数应该是异步的，所以返回一个Pormise
#### 第三步 发送请求
1. 设计支持已有的connection或者新建自己的connection
2. 收到数据传给parser
3. 根据parser的状态resolve Pormise

#### 第四步 ResponseParser
1. Response必须分段构造，并且用一个ResponseParser来装配
2. ResponseParser分段处理ResponseText，我们用状态机来分析文本结构

#### 第五步 BodyParser解析body
1. Response的body可能是根据Content-Type有不同的结构因此采用子Parser的结构来处理问题
2. 以TrunkedBodyParser为例，我们同样用状态机来处理Body的格式

## 有限状态机
 1. 每一个状态都是一个机器
 - 在每一个机器里我们可以做计算、储存、输出......
 - 所有的机器接受的输入都是一致的
 - 状态机每一个机器本身没有状态，如果使用函数来表示的话，应该是一个纯函数。
3. 每一个机器知道下一个状态
 - 每个机器都有确定的下一个状态（moore）
 - 每个机器根据输入决定下一个状态（mealy）
 
 