"use strict";
import { WaveGroup } from "./waveGroup.js";

class App {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.append(this.canvas);

        this.resize();
        this.waveGroup = new WaveGroup(this.stageWidth, this.stageHeight, 5);

        window.addEventListener("resize", this.resize.bind(this), false);
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        //레티나 디스플레이를 위해서
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        if (this.waveGroup !== undefined) {
            this.waveGroup.resize(this.stageWidth, this.stageHeight);
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx);
        window.requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = (() => {
    const app = new App();
})();
