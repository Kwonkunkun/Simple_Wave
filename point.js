export class Point {
    constructor(x, y, radius, amplitude) {
        this.init(x, y, radius, amplitude);
    }

    init(x, y, radius, amplitude) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.amplitude = amplitude;
        this.t = 0;
        this.dy = 0;
    }

    //sin이용해서 계속 변경
    draw(ctx) {
        //여기서 y를 바꾼다.
        this.dy = this.amplitude * Math.sin(Math.PI * 2 * this.t);
        this.t += 0.01;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y + this.dy, this.radius, 0, 2 * Math.PI);
        // ctx.fill();
        // ctx.closePath();
    }
}
