# canvas-api

canvas 相关API练习操场

## API

### 渲染上下文

getContext(contextId, options)
> 获取渲染上下文

   ```ts
   const canvas = document.getElementById('canvas') as HTMLCanvasElement
   const ctx = canvas.getContext('2d')
   ```

### 绘制形状

#### 直线

beginPath()
> 开始一个新的路径

moveTo(x, y)
> 设置初始位置，参数为初始位置x和y的坐标点

lineTo(x, y)
> 绘制一条从初始位置到指定位置的直线，参数为指定位置x和y的坐标点

stroke()
> 根据当前的画线样式，绘制当前路径

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(100, 200)
ctx.stroke()
```

#### 三角形

> 将三条直线拼接起来就是一个三角形

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(200, 200)
ctx.lineTo(200, 50)
ctx.lineTo(50, 50)
ctx.stroke()
```

#### 矩形

strokeRect(x, y, width, height)

> 绘制一个矩形的边框

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.strokeRect(50, 50, 200, 100)
```

fillRect(x, y, width, height)

> 绘制一个填充的矩形

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.fillRect(50, 50, 200, 100)
```

clearRect(x, y, width, height)

> 清除指定矩形区域

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.clearRect(75, 75, 100, 70)
```

#### 圆弧和圆

arc(x, y, radius, startAngle, endAngle, anticlockwise)
> 绘制圆弧或者圆 x和Y是圆心的坐标；radius是半径；startAngle是圆弧或圆的开始位置；endAngle是圆弧或圆的结束位置；anticlockwise是绘制的方向（不写默认为false，从顺时针方向）

stroke()
> 根据当前的画线样式，绘制当前路径

beginPath()
> 开启新的绘制路径

closePath()
> 关闭绘制路径

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.arc(400, 400, 50, 0, Math.PI * 2, false)
ctx.stroke()
ctx.closePath()
```

#### 椭圆

ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
> 绘制椭圆路径 x和Y为椭圆的圆心坐标；radiusX和radiusY是x轴和y轴的半径；rotation是椭圆的旋转角度，以弧度表示；startAngle是开始绘制点；endAngle是结束绘制点；anticlockwise是绘制的方向（默认顺时针）

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.ellipse(100, 150, 50, 100, 0, 0, 2 * Math.PI)
ctx.stroke()
```

#### 二次贝塞尔曲线

quadraticCurveTo(cpx, cpy, x, y)
> 绘制二次贝塞尔曲线 cpx和cpy是控制点；x和y是结束点

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.moveTo(400, 500)
ctx.quadraticCurveTo(500, 600, 600, 500)
ctx.stroke()
ctx.closePath()
```

#### 三次贝塞尔曲线

bezierCurveTo(cp1x,cp1y, cp2x,cp2y, x, y)
> 绘制三次贝塞尔曲线 cpx1和cpy1是第一个控制点；cpx2和cpy2是第二个控制点；x和y是结束点

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.moveTo(50, 200)
ctx.bezierCurveTo(150, 50, 250, 350, 350, 200)
ctx.stroke()
```

### 绘制样式

#### 线条的样式

lineWidth
> 设置当前绘制路径的粗细，默认为 1.0

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.lineWidth = 10
ctx.moveTo(50, 20)
ctx.lineTo(250, 20)
ctx.stroke()
ctx.closePath()
```

lineCap
> 设置线段末端的属性
> butt | round | square 默认：butt

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.lineWidth = 10
ctx.lineCap = 'round'
ctx.moveTo(50, 20)
ctx.lineTo(250, 20)
ctx.stroke()
ctx.closePath()
```

lineJoin
>设置 2 个长度不为 0 的相连部分（线段，圆弧，曲线）如何连接在一起的属性
>bevel | round | miter 默认：miter

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.lineWidth = 5
ctx.lineJoin = 'round'
ctx.moveTo(50, 50)
ctx.lineTo(200, 200)
ctx.lineTo(200, 50)
ctx.closePath()
ctx.stroke()
```

miterLimit
> 设置斜接面限制比例的属性 默认为 10.0，只有当 lineJoin 为 miter 时，才有效

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.lineWidth = 5
ctx.miterLimit = 20
ctx.moveTo(50, 50)
ctx.lineTo(200, 200)
ctx.lineTo(200, 50)
ctx.closePath()
ctx.stroke()
```

setLineDash()
> 填充线时使用虚线模式。它使用一组值来指定描述模式的线和间隙的交替长度

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.setLineDash([15, 3, 3, 3])
ctx.moveTo(400, 20)
ctx.lineTo(700, 40)
ctx.stroke()
```

getLineDash()
> 返回当前虚线设置的样式，长度为非负偶数的数组。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.setLineDash([15, 3, 3, 3])
ctx.moveTo(400, 20)
ctx.lineTo(700, 40)
ctx.stroke()
ctx.getLineDash()
```

lineDashOffset
> 设置虚线样式的起始偏移量；初始值 0.0

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.setLineDash([15, 3, 3, 3])
ctx.lineDashOffset = 3
ctx.moveTo(400, 20)
ctx.lineTo(700, 40)
ctx.stroke()
ctx.getLineDash()
```

### 透明度

fillStyle
> 描述填充的颜色和样式的属性。默认值是 #000 （黑色） color | gradient | pattern

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.fillStyle = 'rgba(0, 255, 0, 0.2)'
ctx.fillRect(300, 50, 200, 100)
```

strokeStyle
> 描述描边的样式。默认值是 #000（黑色）color | gradient | pattern

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.strokeStyle = "rgba(255, 0, 0, 0.7)"
ctx.strokeRect(10, 90, 100, 300)
```

globalAlpha
> 设置图形和图片透明度的属性

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.globalAlpha = 0.5
ctx.arc(200, 200, 100, 0, Math.PI*2, true)
ctx.fill()
```

### 渐变

> 渐变分为两种，分别是线性渐变和径向渐变，在绘图中我们可以用线性或者径向的渐变来填充或描边

#### 线性渐变

createLinearGradient(x0, y0, x1, y1)
> 创建一个沿参数坐标指定的直线的渐变；该方法返回一个线性 CanvasGradient 对象。想要应用这个渐变，需要把这个返回值赋值给 fillStyle 或者 strokeStyle。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const gradient1 = ctx.createLinearGradient(10, 10, 400, 10)
gradient1.addColorStop(0, "#00ff00")
gradient1.addColorStop(1, "#ff0000")
gradient2 = ctx.createLinearGradient(10, 10, 400, 10)
gradient2.addColorStop(0.5, "#00ff00")
gradient2.addColorStop(1, "#ff0000")
ctx.beginPath()
ctx.fillStyle = gradient1
ctx.fillRect(10, 10, 400, 100)
ctx.beginPath()
ctx.fillStyle = gradient2
ctx.fillRect(10, 150, 400, 100)
```

#### 径向渐变

createRadialGradient(x0, y0, r0, x1, y1, r1)
> 根据参数确定两个圆的坐标，绘制放射性渐变的方法

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const gradient2 = ctx.createRadialGradient(100, 100, 100, 100, 100, 0)
gradient2.addColorStop(0, '#ff770f')
gradient2.addColorStop(1, '#ffffff')
ctx.beginPath()
ctx.fillStyle = gradient2
ctx.fillRect(10, 10, 200, 200)
```
