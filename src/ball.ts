import Vector from "./vector";

export default class Ball {
  position: Vector;
  radius: number;
  canvas: HTMLCanvasElement;

  constructor(position: Vector, canvas: HTMLCanvasElement) {
    this.position = position;
    this.radius = 5 + Math.ceil(Math.random() * 10);
    this.canvas = canvas;
  }

  update(delta: number) {
    if (
      this.position.x + this.position.dx > this.canvas.width - this.radius ||
      this.position.x + this.position.dx < this.radius
    ) {
      this.position.dx = -this.position.dx;
    }
    if (
      this.position.y + this.position.dy < this.radius ||
      this.position.y + this.position.dy > this.canvas.height - this.radius
    ) {
      this.position.dy = -this.position.dy;
    }

    this.position.x += this.position.dx * delta;
    this.position.y += this.position.dy * delta;
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = "#eee";
    context.fill();
    context.closePath();
  }
}
