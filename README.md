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
