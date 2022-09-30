# canvas-api

canvas 相关API练习操场 [掘金学习链接](https://juejin.cn/post/7119495608938790942)

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

#### 透明度

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

#### 渐变

> 渐变分为两种，分别是线性渐变和径向渐变，在绘图中我们可以用线性或者径向的渐变来填充或描边

##### 线性渐变

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

##### 径向渐变

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

#### 图案样式

createPattern(image, repetition)
> 使用指定的图像 (CanvasImageSource) 创建模式的方法。它通过 repetition 参数在指定的方向上重复元图像。此方法返回一个CanvasPattern对象。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const img = new Image()
img.src = '图片路径'
img.onload = function () {
  // 图片加载完以后
  // 创建图案
  const pattern = ctx!.createPattern(img, 'repeat')
  ctx!.fillStyle = pattern as CanvasPattern
  ctx!.fillRect(0, 0, 500, 500)
}
```

### 绘制文本

> canvas 中提供了两种方法来渲染文本，一种是描边一种是填充

#### 描边文字

strokeText(text, x, y, [, maxWidth])
> 在给定的 (x, y) 位置绘制文本的方法。如果提供了表示最大值的第四个参数，文本将会缩放适应宽度.

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.strokeText('hello world', 100, 200, 400)
```

#### 填充文字

fillText(text, x, y, [, maxWidth])
> 在 (x, y) 位置填充文本的方法。如果选项的第四个参数提供了最大宽度，文本会进行缩放以适应最大宽度。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.strokeText('hello world', 100, 200, 400)
```

#### 文本样式

font
> font 属性可以用来作为 font-style, font-variant, font-weight, font-size, line-height 和 font-family 属性的简写，或将元素的字体设置为系统字体。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.font='50px sans-serif'
ctx.strokeText('hello world', 100, 200, 400)
```

textAlign
> 文本的对齐方式的属性。注意，该对齐是基于 fillText 方法的 x 的值。所以如果 textAlign="center"，那么该文本将画在 x-50%*width。默认 start

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.font = '50px sans-serif'
ctx.textAlign = 'left'
ctx.fillText('hello world', 100, 200, 400)
```

direction
> 描述当前文本方向的属性。ltr（文本方向从左向右） | rtl（文本方向从右向左） | 默认值：inherit（根据情况继承 <canvas> 元素或者 Document）

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.font = '50px sans-serif'
ctx.direction = 'rtl'
ctx.fillText('hello world', 500, 200, 400)
```

textBaseline
> 描述绘制文本时，当前文本基线的属性。top | hanging | middle | alphabetic | ideographic | bottom

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const baselines =
   ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom']
ctx.font = '36px serif'
ctx.strokeStyle = 'red'

baselines.forEach((baseline, index) => {
  ctx.textBaseline = baseline as CanvasTextBaseline
  const y = 75 + index * 75
  ctx.beginPath()
  ctx.moveTo(0, y + 0.5)
  ctx.lineTo(550, y + 0.5)
  ctx.stroke()
  ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y)
})
```

measureText(string)
> 返回一个关于被测量文本 TextMetrics 对象包含的信息。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const text = ctx.measureText("foo")
text.width
```

#### 阴影

shadowOffsetX、shadowOffsetY

> shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0

shadowBlur

> shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0

shadowColor

> shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.font = '50px serif' // 设置文案大小和字体
ctx.shadowColor = '#cccccc' //  设置阴影颜色
ctx.fillStyle = '#ee7934' //  设置填充颜色
ctx.shadowOffsetX = 10 // X轴上的阴影
ctx.shadowOffsetY = 10 // Y轴上的阴影
ctx.shadowBlur = 5 // 阴影的模糊程度
ctx.fillText('Hi Canvas !', 100, 50)
ctx.fillRect(100, 100, 200, 100)
ctx.shadowOffsetX = -10
ctx.shadowOffsetY = -10
ctx.shadowBlur = 5
ctx.fillText('Hi Canvas !', 100, 300)
ctx.fillRect(100, 350, 200, 100)
```

### 绘制图片

drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number)

> 绘制图片、视频和别的Canvas对象

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const img = new Image()
img.src = image
img.onload = function () {
  // 图片加载完以后
  // 绘制图案
  // ctx.drawImage(img, 0, 0) // 绘制
  // ctx.drawImage(img, 0, 0, 100, 100) // 设置图片大小，缩放
  ctx.drawImage(img, 0, 0, 300, 300, 0, 0, 100, 100) // 裁剪
}
```

### 变形

> save() 和 restore() 方法是用来保存和恢复 canvas 状态的，方法不需要参数。可以理解为就是对canvas 状态的快照进行保存和恢复。

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.fillStyle = '#cccccc';
ctx.fillRect(10, 10, 300, 100)
ctx.save(); // 保存状态
ctx.fillStyle = '#ee7034'
ctx.fillRect(10, 150, 300, 100)
ctx.restore() // 还原到上次保存的状态
ctx.fillRect(10, 300, 300, 100)
```

translate(x, y)

> 将 canvas 按原始 x 点的水平方向、原始的 y 点垂直方向进行平移变换

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.translate(50, 50)
ctx.fillRect(0, 0, 100, 100)
```

rotate()

> 将 canvas 的角度进行旋转

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.rotate(45 * Math.PI / 180)
ctx.fillRect(70,0,100,30)
```

scale(x, y)

> 将 canvas 按原始 x 点的水平方向、原始的 y 点垂直方向进行缩放

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.scale(9, 3)
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 8, 20)
```

transform(a, b, c, d, e, f)

> 可以缩放、旋转、移动和倾斜 canvas 的方法

**参数:**

- a：水平缩放
- b：垂直倾斜
- c：水平倾斜
- d：垂直缩放
- e：水平移动
- f：垂直移动

```ts
/**
 *  
      a c e
    [ b d f ]
      0 0 1 
 *  
*/
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.transform(1, 1, 0, 1, 0, 0)
ctx.fillRect(0, 0, 100, 100)
```

setTransform(a, b, c, d, e, f)

> 会将当前变形矩阵重置为单位矩阵，然后用相同的参数调用 transform 方法

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
ctx.setTransform(1, 1, 0, 1, 0, 0)
ctx.fillRect(0, 0, 100, 100)
```

resetTransform()

> 重置当前变形为单位矩阵。效果等同于调用 setTransform(1, 0, 0, 1, 0, 0)

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')

ctx.rotate(45 * Math.PI / 180)
ctx.fillRect(70, 0, 100, 30)
ctx.resetTransform()
```
