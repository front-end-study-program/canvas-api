import Draw from './Draw'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight
const ctx = canvas.getContext('2d')

const draw = new Draw(ctx!)

// 画直线
draw.straightLine({
  sx: 10,
  sy: 200,
  ex: 100,
  ey: 200,
  lineWidth: 20,
  lineCap: 'round'
})

// 画三角形
draw.triangle({
  Ax: 50,
  Ay: 50,
  Bx: 200,
  By: 200,
  Cx: 200,
  Cy: 50,
  lineWidth: 10,
  // lineJoin: 'miter',
  miterLimit: 3
})

draw.triangle({
  Ax: 350,
  Ay: 250,
  Bx: 400,
  By: 300,
  Cx: 400,
  Cy: 250,
  lineWidth: 5,
  lineJoin: 'bevel'
})

// 画矩形
draw.rectangle({
  x: 300,
  y: 50,
  width: 200,
  height: 100
}, true)

// 清除指定矩形区域
draw.clearRect({
  x: 325,
  y: 75,
  width: 100,
  height: 70
})

// 画圆弧与圆
draw.arc({
  x: 400,
  y: 400,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI * 2,
  counterclockwise: false
})

// 画填充圆和填充圆弧
draw.arc({
  x: 600,
  y: 600,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI * 2,
  counterclockwise: false
}, true)

// 画椭圆
draw.ellipse({
  x: 250,
  y: 350,
  radiusX: 50,
  radiusY: 100,
  rotation: 0,
  startAngle: 0,
  endAngle: Math.PI * 2,
  lineWidth: 10
})

// 画二次贝塞尔曲线
draw.quadraticCurveTo({
  sx: 400,
  sy: 500,
  cpx: 450,
  cpy: 650,
  ex: 500,
  ey: 500,
  lineWidth: 20
})

// 画三次贝塞尔曲线
draw.bezierCurveTo({
  sx: 50,
  sy: 200,
  cpx1: 150,
  cpy1: 50,
  cpx2: 250,
  cpy2: 350,
  ex: 350,
  ey: 200
})

// 画虚线
draw.dashedLine({
  sx: 400,
  sy: 20,
  ex: 700,
  ey: 40,
  segments: [15, 3, 3, 3]
})
