interface IBasePosition {
  sx: number;
  sy: number;
  ex: number;
  ey: number;
}

interface IStraightLine extends IBasePosition {
  lineWidth?: number;
  lineCap?: 'butt' | 'round' | 'square';
}

interface IDashedLine extends IStraightLine {
  segments: Array<number>;
  lineDashOffset?: number;
}
interface ITriangle {
  Ax: number; // A点x
  Ay: number; // A点y
  Bx: number; // B点x
  By: number; // B点y
  Cx: number; // C点x
  Cy: number; // C点y
  lineWidth?: number;
  lineJoin?: 'bevel' | 'round' | 'miter';
  miterLimit?: number;
}

interface IPosition {
  x: number;
  y: number;
  width: number;
  height: number;
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
  lineCap?: 'butt' | 'round' | 'square';
}

interface IBezierCurveTo extends IBasePosition {
  cpx1: number;
  cpy1: number;
  cpx2: number;
  cpy2: number;
  lineWidth?: number;
  lineCap?: 'butt' | 'round' | 'square';
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
    const { sx, sy, ex, ey, lineWidth = 1, lineCap = 'butt' } = options
    ctx.beginPath()
    ctx.setLineDash([])
    ctx.lineWidth = lineWidth
    ctx.lineCap = lineCap
    ctx.moveTo(sx, sy)
    ctx.lineTo(ex, ey)
    ctx.stroke()
  }

  /**
   * 画虚线
   * @param {IDashedLine} options
   */
  dashedLine (options: IDashedLine) {
    const { ctx } = this
    const {
      sx,
      sy,
      ex,
      ey,
      lineWidth = 1,
      lineCap = 'butt',
      segments = [],
      lineDashOffset = 0
    } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.lineCap = lineCap
    ctx.setLineDash(segments)
    ctx.lineDashOffset = lineDashOffset
    ctx.moveTo(sx, sy)
    ctx.lineTo(ex, ey)
    ctx.stroke()
    ctx.beginPath()
  }

  /**
   * 画三角形
   * @param {ITriangle} options 三角形顶点位置
   */
  triangle (options: ITriangle) {
    const { ctx } = this
    const {
      Ax,
      Ay,
      Bx,
      By,
      Cx,
      Cy,
      lineWidth = 1,
      lineJoin = 'miter',
      miterLimit = 10
    } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.lineJoin = lineJoin
    ctx.miterLimit = miterLimit
    ctx.moveTo(Ax, Ay)
    ctx.lineTo(Bx, By)
    ctx.lineTo(Cx, Cy)
    ctx.closePath()
    ctx.stroke()
  }

  /**
   * 画矩形
   * @param {IPosition} position 矩形位置
   * @param {boolean} isFill 是否填充
   */
  rectangle (
    position: IPosition,
    isFill = false,
    fillStyle = 'black',
    strokeStyle = '#000'
  ) {
    const { ctx } = this
    const { x, y, width, height } = position
    if (isFill) {
      ctx.fillStyle = fillStyle
      ctx.fillRect(x, y, width, height)
    } else {
      ctx.strokeStyle = strokeStyle
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
  arc (
    options: IArc,
    isFill = false,
    fillStyle = 'black',
    strokeStyle = '#000',
    globalAlpha = 1
  ) {
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
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.lineWidth = lineWidth
    ctx.globalAlpha = globalAlpha
    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)
    ctx.stroke()
    isFill && ctx.fill()
  }

  /**
   * 画椭圆
   * @param {IEllipse} options 绘制路径
   * @param {boolean} 是否填充
   */
  ellipse (options: IEllipse, isFill = false) {
    const { ctx } = this
    const {
      x,
      y,
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
  }

  /**
   * 画二次贝塞尔曲线
   * @param {IQuadraticCurveTo} options 绘制路径
   */
  quadraticCurveTo (options: IQuadraticCurveTo) {
    const { ctx } = this
    const {
      sx,
      sy,
      cpx,
      cpy,
      ex,
      ey,
      lineWidth = 1,
      lineCap = 'butt'
    } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.lineCap = lineCap
    ctx.moveTo(sx, sy)
    ctx.quadraticCurveTo(cpx, cpy, ex, ey)
    ctx.stroke()
  }

  /**
   * 画三次贝塞尔曲线
   * @param {IBezierCurveTo} options 绘制路径
   */
  bezierCurveTo (options: IBezierCurveTo) {
    const { ctx } = this
    const {
      sx,
      sy,
      cpx1,
      cpy1,
      cpx2,
      cpy2,
      ex,
      ey,
      lineWidth = 1,
      lineCap = 'butt'
    } = options
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.lineCap = lineCap
    ctx.moveTo(sx, sy)
    ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, ex, ey)
    ctx.stroke()
  }
}

export default Draw
