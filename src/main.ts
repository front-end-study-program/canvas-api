import Draw from './Draw'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')

const draw = new Draw(ctx!)

// 画直线
// draw.straightLine(0, 50, 100, 200)

// 画三角形
// draw.triangle({ Ax: 50, Ay: 50, Bx: 200, By: 200, Cx: 200, Cy: 50 })

// 画矩形
draw.rectangle({ x: 50, y: 50, width: 200, height: 100 }, true)

// 清除指定矩形区域
draw.clearRect({x: 75, y: 75, width: 100, height: 70})