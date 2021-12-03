import Vector from "./vector";
import Ball from "./ball";

export default class Drawing {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  frameRequestHandle: number;
  ball: Ball;
  delta: number = 0;
  startTime: number;

  constructor() {
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d")!;
    this.startTime = Date.now();

    setInterval(function () {
      window.location.reload();
    }, 10000);

    this.frameRequestHandle = window.requestAnimationFrame(this.draw);

    this.ball = new Ball(new Vector(this.canvas), this.canvas);
  }

  draw = () => {
    this.frameRequestHandle = window.requestAnimationFrame(this.draw);
    const currentTime = Date.now();
    this.delta = (currentTime - this.startTime)*0.06;
    this.startTime = currentTime;
    this.ball.update(this.delta);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.render(this.context);
  };

}

window.addEventListener("load", () => {
  new Drawing();
});
