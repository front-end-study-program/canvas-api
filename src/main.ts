import Draw from './Draw'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight
const ctx = canvas.getContext('2d')

const draw = new Draw(ctx!)

// 画直线
draw.straightLine(0, 50, 100, 200)

// 画三角形
draw.triangle({ Ax: 50, Ay: 50, Bx: 200, By: 200, Cx: 200, Cy: 50 })

draw.triangle({ Ax: 250, Ay: 250, Bx: 300, By: 300, Cx: 400, Cy: 250 })

// 画矩形
draw.rectangle({ x: 300, y: 50, width: 200, height: 100 }, true)

// 清除指定矩形区域
draw.clearRect({x: 325, y: 75, width: 100, height: 70})

// 画圆弧与圆
draw.arc({
  x: 400,
  y: 400,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI * 2,
  counterclockwise: false
})

draw.arc({
  x: 600,
  y: 600,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI * 2,
  counterclockwise: false
}, true)