class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
}
class Line {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  render(context) {
    context.beginPath();
    context.moveTo(this.from.x,this.from.y);
    context.lineTo(this.to.x,this.to.y);
    context.stroke();
  }
}
function drawSquare(context) {
  // Note: in a web browser canvas, the y axis goes down the page
  const origin = new Point(10,10);
  const point1 = new Point(110,10);
  const point2 = new Point(110,110);
  const point3 = new Point(10,110);

  const line1 = new Line(origin, point1);
  line1.render(context);
  const line2 = new Line(point1, point2);
  line2.render(context);
  const line3 = new Line(point2, point3);
  line3.render(context);
  const line4 = new Line(point3, origin);
  line4.render(context);
}