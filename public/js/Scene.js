define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scene = /** @class */ (function () {
        function Scene(canvasName) {
            // Get a context
            var canvas = document.getElementById(canvasName);
            this._ctx = canvas.getContext("2d");
            // Draw a rectangle
            this._ctx.beginPath();
            this._ctx.rect(128, 64, 64, 64);
            this._ctx.fillStyle = "#00FF00";
            this._ctx.fill();
            this._ctx.closePath();
        }
        return Scene;
    }());
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map