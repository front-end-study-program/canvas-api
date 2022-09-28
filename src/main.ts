// import Draw from './Draw'
import image from './image/logo.png'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight
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

ctx!.font = '50px serif' // 设置文案大小和字体
ctx!.shadowColor = '#cccccc' //  设置阴影颜色
ctx!.fillStyle = '#ee7934' //  设置填充颜色
ctx!.shadowOffsetX = 10 // X轴上的阴影
ctx!.shadowOffsetY = 10 // Y轴上的阴影
ctx!.shadowBlur = 5 // 阴影的模糊程度
ctx!.fillText('Hi Canvas !', 100, 50)
ctx!.fillRect(100, 100, 200, 100)
ctx!.shadowOffsetX = -10
ctx!.shadowOffsetY = -10
ctx!.shadowBlur = 5
ctx!.fillText('Hi Canvas !', 100, 300)
ctx!.fillRect(100, 350, 200, 100)
