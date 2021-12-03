export default class Vector {
  x: number;
  y: number;
  dx: number;
  dy: number;
  speed: number;
  angle: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speed = Math.ceil(Math.random() * 10);
    this.angle = Math.random() * Math.PI * 2;
    this.dx = Math.cos(this.angle) * this.speed;
    this.dy = Math.sin(this.angle) * this.speed;
  }
}
