// import Draw from './Draw'
import image from './image/logo.png'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
// canvas.width = document.body.offsetWidth
// canvas.height = document.body.offsetHeight
const ctx = canvas.getContext('2d')

// const draw = new Draw(ctx!)

// // 画直线
// draw.straightLine({
//   sx: 10,
//   sy: 200,
//   ex: 100,
//   ey: 200,
//   lineWidth: 20,
//   lineCap: 'round'
// })

// // 画三角形
// draw.triangle({
//   Ax: 50,
//   Ay: 50,
//   Bx: 200,
//   By: 200,
//   Cx: 200,
//   Cy: 50,
//   lineWidth: 10,
//   // lineJoin: 'miter',
//   miterLimit: 3
// })

// draw.triangle({
//   Ax: 350,
//   Ay: 250,
//   Bx: 400,
//   By: 300,
//   Cx: 400,
//   Cy: 250,
//   lineWidth: 5,
//   lineJoin: 'bevel'
// })

// // 画矩形
// draw.rectangle({
//   x: 300,
//   y: 50,
//   width: 200,
//   height: 100
// }, true, 'rgba(0, 255, 0, 0.2)')

// // 清除指定矩形区域
// draw.clearRect({
//   x: 325,
//   y: 75,
//   width: 100,
//   height: 70
// })

// // 画圆弧与圆
// draw.arc({
//   x: 400,
//   y: 400,
//   radius: 50,
//   startAngle: 0,
//   endAngle: Math.PI * 2,
//   counterclockwise: false
// }, false, '#000', 'rgba(255, 0, 0, 0.7)', 0.3)

// // 画填充圆和填充圆弧
// draw.arc({
//   x: 600,
//   y: 600,
//   radius: 50,
//   startAngle: 0,
//   endAngle: Math.PI * 2,
//   counterclockwise: false
// }, true)

// // 画椭圆
// draw.ellipse({
//   x: 250,
//   y: 350,
//   radiusX: 50,
//   radiusY: 100,
//   rotation: 0,
//   startAngle: 0,
//   endAngle: Math.PI * 2,
//   lineWidth: 10
// })

// // 画二次贝塞尔曲线
// draw.quadraticCurveTo({
//   sx: 400,
//   sy: 500,
//   cpx: 450,
//   cpy: 650,
//   ex: 500,
//   ey: 500,
//   lineWidth: 20
// })

// // 画三次贝塞尔曲线
// draw.bezierCurveTo({
//   sx: 50,
//   sy: 200,
//   cpx1: 150,
//   cpy1: 50,
//   cpx2: 250,
//   cpy2: 350,
//   ex: 350,
//   ey: 200
// })

// // 画虚线
// draw.dashedLine({
//   sx: 400,
//   sy: 20,
//   ex: 700,
//   ey: 40,
//   segments: [15, 5, 5, 5],
//   lineDashOffset: 0.5
// })

// draw.dashedLine({
//   sx: 700,
//   sy: 20,
//   ex: 800,
//   ey: 40,
//   segments: [5, 10, 20, 40],
//   lineDashOffset: 3
// })

// console.log('getLineDash', ctx?.getLineDash())

// draw.straightLine({
//   sx: 500,
//   sy: 550,
//   ex: 700,
//   ey: 710
// })

// // 线性渐变
// const gradient1 = ctx!.createLinearGradient(10, 10, 400, 10)
// gradient1.addColorStop(0, '#00ff00')
// gradient1.addColorStop(1, '#ff0000')
// ctx!.beginPath()
// ctx!.fillStyle = gradient1
// ctx!.fillRect(10, 10, 400, 100)

// // 径向渐变
// const gradient2 = ctx!.createRadialGradient(100, 100, 100, 100, 100, 0)
// gradient2.addColorStop(0, '#ff770f')
// gradient2.addColorStop(1, '#ffffff')

// ctx!.beginPath()
// ctx!.fillStyle = gradient2
// ctx!.fillRect(10, 10, 200, 200)

// 绘制图片
// const img = new Image()
// img.src = image
// img.onload = function () {
//   // 图片加载完以后
//   // 创建图案
//   const pattern = ctx!.createPattern(img, 'repeat-x')
//   ctx!.fillStyle = pattern as CanvasPattern
//   ctx!.fillRect(0, 0, 500, 500)
// }

// 绘制描边文字
// ctx!.font = '50px serif'
// ctx!.strokeText('hello world', 100, 200, 400)

// ctx!.font = '50px sans-serif' // 设置文案大小和字体
// // ctx!.textAlign = 'left'
// ctx!.direction = 'rtl'
// ctx!.fillText('hello world', 500, 200, 400)

// const baselines =
//    ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom']
// ctx!.font = '36px serif'
// ctx!.strokeStyle = 'red'

// baselines.forEach((baseline, index) => {
//   ctx!.textBaseline = baseline as CanvasTextBaseline
//   const y = 75 + index * 75
//   ctx!.beginPath()
//   ctx!.moveTo(0, y + 0.5)
//   ctx!.lineTo(550, y + 0.5)
//   ctx!.stroke()
//   ctx!.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y)
// })

// const text = ctx!.measureText('foo')

// console.log(text.width)

// ctx!.font = '50px serif' // 设置文案大小和字体
// ctx!.shadowColor = '#cccccc' //  设置阴影颜色
// ctx!.fillStyle = '#ee7934' //  设置填充颜色
// ctx!.shadowOffsetX = 10 // X轴上的阴影
// ctx!.shadowOffsetY = 10 // Y轴上的阴影
// ctx!.shadowBlur = 5 // 阴影的模糊程度
// ctx!.fillText('Hi Canvas !', 100, 50)
// ctx!.fillRect(100, 100, 200, 100)
// ctx!.shadowOffsetX = -10
// ctx!.shadowOffsetY = -10
// ctx!.shadowBlur = 5
// ctx!.fillText('Hi Canvas !', 100, 300)
// ctx!.fillRect(100, 350, 200, 100)

// const img = new Image()
// img.src = image
// img.onload = function () {
//   // 图片加载完以后
//   // 创建图案
//   // ctx!.drawImage(img, 0, 0) // 绘制
//   // ctx!.drawImage(img, 0, 0, 100, 100) // 缩放
//   ctx!.drawImage(img, 0, 0, 300, 300, 0, 0, 100, 100) // 裁剪
// }

// 保存和恢复
// ctx!.fillStyle = '#cccccc'
// ctx!.fillRect(10, 10, 300, 100)
// ctx!.save() // 保存状态
// ctx!.fillStyle = '#ee7034'
// ctx!.fillRect(10, 150, 300, 100)
// ctx!.restore() // 还原到上次保存的状态
// ctx!.fillRect(10, 300, 300, 100)

// 平移
// ctx!.translate(50, 50)
// ctx!.fillRect(0, 0, 100, 100)

// 旋转
// ctx!.rotate(45 * Math.PI / 180)
// ctx!.fillRect(70, 0, 100, 30)

// 缩放
// ctx!.scale(9, 3)
// ctx!.fillStyle = 'red'
// ctx!.fillRect(10, 10, 8, 20)

// 缩放，旋转，移动，倾斜
// ctx!.transform(2, 1, 0, 1, 2, 5)
// ctx!.fillRect(0, 0, 100, 100)

// ctx!.rotate(45 * Math.PI / 180)
// ctx!.fillRect(70, 0, 100, 30)

// ctx!.resetTransform()

// ctx!.globalCompositeOperation = 'source-over'
// ctx!.globalCompositeOperation = 'source-in'
// ctx!.globalCompositeOperation = 'source-out'
// ctx!.globalCompositeOperation = 'source-atop'
// ctx!.globalCompositeOperation = 'destination-over'

// ctx!.fillStyle = 'blue'
// ctx!.fillRect(10, 10, 100, 100)

// ctx!.fillStyle = 'red'
// ctx!.fillRect(50, 50, 100, 100)

// 裁剪
// const img = new Image()
// img.src = image
// img.onload = () => {
//   // 创建圆形裁剪路径
//   ctx?.arc(250, 250, 200, 0, Math.PI * 2, false)
//   ctx?.clip()
//   // 创建完之后绘制
//   ctx?.drawImage(img, 0, 0, 500, 500)
// }

// 动画
// const sun = new Image()
// const moon = new Image()
// const earth = new Image()

// function init () {
//   sun.src = image
//   moon.src = image
//   earth.src = image
//   window.requestAnimationFrame(draw)
// }

// function draw () {
//   ctx!.globalCompositeOperation = 'destination-over'
//   // 清空画布
//   ctx!.clearRect(0, 0, document.body.offsetWidth, document.body.offsetHeight)
//   ctx!.fillStyle = 'rgba(0, 0, 0, 0.4)'
//   ctx!.strokeStyle = 'rgba(0, 153, 255, 0.4)'
//   ctx!.save()
//   ctx!.translate(document.body.offsetWidth / 2, document.body.offsetHeight / 2)
//   // 画地球
//   const time = new Date()
//   const earthDeg =
//   ((2 * Math.PI) / 60) *
//   time.getSeconds() +
//   ((2 * Math.PI) / 60000) *
//   time.getMilliseconds()
//   ctx!.rotate(earthDeg)
//   ctx!.translate(200, 0)
//   ctx!.drawImage(earth, -20, -20, 40, 40)
//   // 画一个月亮
//   ctx!.save() // 第二次保存画布状态
//   const moonDeg =
//   ((2 * Math.PI) / 6) *
//   time.getSeconds() +
//   ((2 * Math.PI) / 6000) *
//   time.getMilliseconds()
//   ctx!.rotate(moonDeg)
//   ctx!.translate(0, 40)
//   ctx!.drawImage(moon, -7.5, -7.5, 15, 15)
//   // 恢复状态
//   ctx!.restore()
//   ctx!.restore()
//   // 画一个地球运行的轨迹
//   ctx!.beginPath()
//   ctx!.arc(250, 250, 200, 0, Math.PI * 2, false)
//   ctx!.stroke()
//   // 画一个太阳
//   ctx!.drawImage(sun, 0, 0, 500, 500)
//   window.requestAnimationFrame(draw)
// }

// init()

// 高级动画，加上物理引擎
// 1. 绘制小球
const ball = {
  x: 100,
  y: 100,
  vx: 1,
  vy: 3,
  radius: 25,
  color: 'blue',
  draw () {
    ctx!.beginPath()
    ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx!.closePath()
    ctx!.fillStyle = this.color
    ctx!.fill()
  }
}
// ball.draw()

// 2. 速率：通过给小球添加速率矢量进行移动。
// 用requestAnimationFrame() 方法来实现，在每一帧里面，依旧用clear 清理掉之前帧里旧的圆形

function draw () {
  // ctx!.clearRect(0, 0, canvas.width, canvas.height)
  // 拖尾效果
  ctx!.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx!.fillRect(0, 0, canvas.width, canvas.height)
  ball.draw()
  // 添加加速度
  ball.vy *= 0.99
  ball.vy += 0.25

  // 3. 边界：反弹
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx
  }

  // 4. 添加速率
  ball.x += ball.vx
  ball.y += ball.vy

  window.requestAnimationFrame(draw)
}
// window.requestAnimationFrame(draw)

// 保存图片
const img = document.getElementById('img') as HTMLImageElement
const btn = document.getElementById('btn')

btn?.addEventListener('click', () => {
  const url = canvas.toDataURL('image/png')
  img.src = url

  // 将base64转换为文件对象
  const arr = url.split(',')
  const [firstItem] = arr
  const [, mime] = firstItem.match(/:(.*?);/) as RegExpMatchArray // 此处得到的为文件类型
  const bstr = atob(arr[1]) // 此处将base64解码
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  // 通过以下方式将以上变量生成文件对象，三个参数分别为文件内容、文件名、文件类型
  const file = new File([u8arr], 'filename', { type: mime })
  // 将文件对象通过a标签下载
  const aDom = document.createElement('a') // 创建一个 a 标签
  aDom.download = file.name // 设置文件名
  const href = URL.createObjectURL(file) // 将file对象转成 UTF-16 字符串
  aDom.href = href // 放入href
  document.body.appendChild(aDom) // 将a标签插入 body
  aDom.click() // 触发 a 标签的点击
  document.body.removeChild(aDom) // 移除刚才插入的 a 标签
  URL.revokeObjectURL(href) // 释放刚才生成的 UTF-16 字符串
})

// 反向颜色

const originalEl = document.getElementById('original')
const grayscaleEl = document.getElementById('grayscale')
const invertedEl = document.getElementById('inverted')

const img1 = new Image()
img1.crossOrigin = 'anonymous'
img1.src = 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF'
img1.onload = function () {
  ctx!.drawImage(img1, 0, 0)
}
const original = function () {
  ctx!.drawImage(img1, 0, 0)
}
const invert = function () {
  ctx!.drawImage(img1, 0, 0)
  const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height)
  const { data } = imageData
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i] // red
    data[i + 1] = 255 - data[i + 1] // green
    data[i + 2] = 255 - data[i + 2] // blue
  }
  ctx!.putImageData(imageData, 0, 0)
}

const grayscale = function () {
  ctx!.drawImage(img1, 0, 0)
  const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height)
  const { data } = imageData
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
    data[i] = avg // red
    data[i + 1] = avg // green
    data[i + 2] = avg // blue
  }
  ctx!.putImageData(imageData, 0, 0)
}
originalEl!.addEventListener('click', (evt) => {
  original()
})
grayscaleEl!.addEventListener('click', (evt) => {
  grayscale()
})
invertedEl!.addEventListener('click', (evt) => {
  invert()
})
