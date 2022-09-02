interface IBasePosition {
  sx: number;
  sy: number;
  ex: number;
  ey: number;
}

interface IStraightLine extends IBasePosition {
  lineWidth?: number
}

interface ITriangle {
  Ax: number; // A点x
  Ay: number; // A点y
  Bx: number; // B点x
  By: number; // B点y
  Cx: number; // C点x
  Cy: number; // C点y
  lineWidth?: number;
}

interface IPosition {
  x: number;
  y: number;
  width: number;
  height: number
}

interface IArc {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  counterclockwise?: boolean;
  lineWidth?: number;
}

interface IEllipse {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  rotation: number;
  startAngle: number;
  endAngle: number;
  counterclockwise?: boolean;
  lineWidth?: number;
}

interface IQuadraticCurveTo extends IBasePosition {
  cpx: number;
  cpy: number;
  lineWidth?: number;
}

interface IBezierCurveTo extends IBasePosition {
  cpx1: number;
  cpy1: number;
  cpx2: number;
  cpy2: number;
  lineWidth?: number;
}

class Draw {
  ctx: CanvasRenderingContext2D
  constructor (ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  /**
   * 画直线
   * @param {number} sx 起点x
   * @param {number} sy 起点y
   * @param {number} ex 终点x
   * @param {number} ey 终点y
   */
  straightLine (options: IStraightLine) {
    const { ctx } = this
    const { sx, sy, ex, ey, lineWidth = 1 } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.moveTo(sx, sy)
    ctx.lineTo(ex, ey)
    ctx.stroke()
    ctx.closePath()
  }

  /**
   * 画三角形
   * @param {ITriangle} options 三角形顶点位置
   */
  triangle (options: ITriangle) {
    const { ctx } = this
    const { Ax, Ay, Bx, By, Cx, Cy, lineWidth = 1 } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.moveTo(Ax, Ay)
    ctx.lineTo(Bx, By)
    ctx.lineTo(Cx, Cy)
    ctx.lineTo(Ax, Ay)
    ctx.stroke()
    ctx.closePath()
  }

  /**
   * 画矩形
   * @param {IPosition} position 矩形位置
   * @param {boolean} isFill 是否填充
   */
  rectangle (position: IPosition, isFill = false) {
    const { ctx } = this
    const { x, y, width, height } = position
    if (isFill) {
      ctx.fillRect(x, y, width, height)
    } else {
      ctx.strokeRect(x, y, width, height)
    }
  }

  /**
   * 清除指定矩形区域
   * @param {IPosition} position 矩形位置
   */
  clearRect (position: IPosition) {
    const { x, y, width, height } = position
    this.ctx.clearRect(x, y, width, height)
  }

  /**
   * 画圆弧或圆
   * @param {IArc} options 绘制路径
   * @param {boolean} isFill 是否填充
   */
  arc (options: IArc, isFill = false) {
    const {
      x,
      y,
      radius,
      startAngle,
      endAngle,
      counterclockwise,
      lineWidth = 1
    } = options
    const { ctx } = this
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)
    ctx.stroke()
    isFill && ctx.fill()
    ctx.closePath()
  }

  /**
   * 画椭圆
   * @param {IEllipse} options 绘制路径
   * @param {boolean} 是否填充
   */
  ellipse (options: IEllipse, isFill = false) {
    const { ctx } = this
    const {
      x, y,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle,
      counterclockwise,
      lineWidth = 1
    } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.ellipse(
      x,
      y,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle,
      counterclockwise
    )
    ctx.stroke()
    isFill && ctx.fill()
    ctx.closePath()
  }

  /**
   * 画二次贝塞尔曲线
   * @param {IQuadraticCurveTo} options 绘制路径
   */
  quadraticCurveTo (options: IQuadraticCurveTo) {
    const { ctx } = this
    const { sx, sy, cpx, cpy, ex, ey, lineWidth = 1 } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.moveTo(sx, sy)
    ctx.quadraticCurveTo(cpx, cpy, ex, ey)
    ctx.stroke()
    ctx.closePath()
  }

  /**
   * 画三次贝塞尔曲线
   * @param {IBezierCurveTo} options 绘制路径
   */
  bezierCurveTo (options: IBezierCurveTo) {
    const { ctx } = this
    const { sx, sy, cpx1, cpy1, cpx2, cpy2, ex, ey, lineWidth = 1 } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.moveTo(sx, sy)
    ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, ex, ey)
    ctx.stroke()
    ctx.closePath()
  }
}

export default Draw
