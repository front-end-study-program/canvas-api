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
