import { Wave } from "./wave.js";

const colors = [
    "rgba(102,255,212,0.5)",
    "rgba(91,207,227,0.5)",
    "rgba(113,175,250,0.5)",
    "rgba(91,97,227,0.5)",
    "rgba(159,102,255,0.5)",
];

export class WaveGroup {
    constructor(stageWidth, stageHeight, numOfWave) {
        this.init(stageWidth, stageHeight, numOfWave);
    }
    init(stageWidth, stageHeight, numOfWave) {
        this.waves = new Array();
        (() => {
            for (let i = 0; i < numOfWave; i++) {
                const wave = new Wave(
                    stageWidth,
                    stageHeight,
                    11,
                    colors[i],
                    parseFloat(i / numOfWave)
                );
                this.waves.push(wave);
            }
        })();
    }

    resize(stageWidth, stageHeight) {}

    draw(ctx) {
        for (let i = 0; i < this.waves.length; i++) {
            this.waves[i].draw(ctx);
        }
    }
}
