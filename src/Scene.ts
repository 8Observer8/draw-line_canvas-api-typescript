
export class Scene
{
    private _ctx: CanvasRenderingContext2D;

    public constructor(canvasName: string)
    {
        // Get a context
        let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
        this._ctx = canvas.getContext("2d");

        // Draw a rectangle
        this._ctx.beginPath();
        this._ctx.rect(128, 64, 64, 64);
        this._ctx.fillStyle = "#00FF00";
        this._ctx.fill();
        this._ctx.closePath();
    }
}