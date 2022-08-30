interface ITriangle {
  Ax: number; // A点x
  Ay: number; // A点y
  Bx: number; // B点x
  By: number; // B点y
  Cx: number; // C点x
  Cy: number; // C点y
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
}

class Draw {
  ctx: CanvasRenderingContext2D
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }
  /**
   * 画直线
   * @param {number} sx 起点x 
   * @param {number} sy 起点y
   * @param {number} ex 终点x
   * @param {number} ey 终点y
   */
  straightLine(sx: number, sy: number, ex: number, ey: number) {
    const { ctx } = this
    ctx.beginPath()
    ctx.moveTo(sx, sy)
    ctx.lineTo(ex, ey)
    ctx.stroke()
  }
  /**
   * 画三角形
   * @param {ITriangle} options 三角形顶点位置
   */
  triangle(options: ITriangle) {
    const { ctx } = this
    const { Ax, Ay, Bx, By, Cx, Cy } = options
    ctx.beginPath()
    ctx.moveTo(Ax, Ay)
    ctx.lineTo(Bx, By)
    ctx.lineTo(Cx, Cy)
    ctx.lineTo(Ax, Ay)
    ctx.stroke()
  }
  /**
   * 画矩形
   * @param {IPosition} position 矩形位置
   * @param {boolean} isFill 是否填充 
   */
  rectangle(position: IPosition, isFill = false) {
    const { ctx } = this
    const { x, y, width, height } = position
    if(isFill) {
      ctx.fillRect(x, y, width, height)
    } else {
      ctx.strokeRect(x, y, width, height)
    }
  }
  /**
   * 清除指定矩形区域
   * @param {IPosition} position 矩形位置
   */
  clearRect(position: IPosition) {
    const { x, y, width, height } = position
    this.ctx.clearRect(x, y, width, height)
  }
  /**
   * 画圆弧或圆
   * @param {IArc} options 绘制路径
   * @param {boolean} isFill 是否填充
   */
  arc(options: IArc, isFill = false) {
    const { x, y, radius, startAngle, endAngle, counterclockwise } = options
    const { ctx } = this
    ctx.beginPath()
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
  ellipse(options: IEllipse, isFill = false) {
    const { ctx } = this
    const { x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise } = options
    ctx.beginPath()
    ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
    ctx.stroke()
    isFill && ctx.fill()
    ctx.closePath()
  }
}


export default Draw