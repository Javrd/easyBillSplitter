var IdCrop=function(c){function I(n){if(t[n])return t[n].exports;var g=t[n]={i:n,l:!1,exports:{}};return c[n].call(g.exports,g,g.exports,I),g.l=!0,g.exports}var t={};return I.m=c,I.c=t,I.d=function(n,g,e){I.o(n,g)||Object.defineProperty(n,g,{configurable:!1,enumerable:!0,get:e})},I.n=function(n){var g=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(g,"a",g),g},I.o=function(n,g){return Object.prototype.hasOwnProperty.call(n,g)},I.p="",I(I.s=3)}([function(module,exports,__webpack_require__){"use strict";eval(`

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  findAngle(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;

    return Math.atan2(dx, dy);
  }

  move(xStep, yStep) {
    this.x += xStep;
    this.y += yStep;
  }

  static findCenter(points) {
    let x = 0;
    let y = 0;

    for (const point of points) {
      x += point.x;
      y += point.y;
    }

    return new Point(x / points.length, y / points.length);
  }

  static sort(points) {
    const center = this.findCenter(points);

    return points.sort(function(a, b) {
      const aa = a.findAngle(center);
      const ab = b.findAngle(center);
      return aa > ab;
    });
  }
}

module.exports = exports = Point;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvUG9pbnQuanM/NWJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZmluZEFuZ2xlKG90aGVyKSB7XG4gICAgY29uc3QgZHggPSB0aGlzLnggLSBvdGhlci54O1xuICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gb3RoZXIueTtcblxuICAgIHJldHVybiBNYXRoLmF0YW4yKGR4LCBkeSk7XG4gIH1cblxuICBtb3ZlKHhTdGVwLCB5U3RlcCkge1xuICAgIHRoaXMueCArPSB4U3RlcDtcbiAgICB0aGlzLnkgKz0geVN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZmluZENlbnRlcihwb2ludHMpIHtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICAgIHggKz0gcG9pbnQueDtcbiAgICAgIHkgKz0gcG9pbnQueTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBvaW50KHggLyBwb2ludHMubGVuZ3RoLCB5IC8gcG9pbnRzLmxlbmd0aCk7XG4gIH1cblxuICBzdGF0aWMgc29ydChwb2ludHMpIHtcbiAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmZpbmRDZW50ZXIocG9pbnRzKTtcblxuICAgIHJldHVybiBwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBjb25zdCBhYSA9IGEuZmluZEFuZ2xlKGNlbnRlcik7XG4gICAgICBjb25zdCBhYiA9IGIuZmluZEFuZ2xlKGNlbnRlcik7XG4gICAgICByZXR1cm4gYWEgPiBhYjtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQb2ludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2pzL2lkY3JvcC9Qb2ludC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///0
`)},function(module,exports,__webpack_require__){"use strict";eval(`

const Point = __webpack_require__(/*! ./Point.js */ 0);

class Polygon {
  constructor(container, canvas) {
    this.container = container;
    this.canvas = canvas;
  }

  drawWithOverlay(
    points,
    overlayColor,
    stroke,
    strokeColor,
    strokeDashed,
    strokeWeight,
    fillColor = "",
    img = ""
  ) {
    const context = this.canvas.getContext("2d");
    // Save context for clipping and clear canvas.
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.save();
    // Draw overlay
    context.fillStyle = overlayColor;
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    context.restore();
    // Draw quadrilateral.
    context.save();
    if (strokeDashed) context.setLineDash([5, 3]);
    context.strokeStyle = strokeColor;
    context.lineWidth = strokeWeight;
    this.draw(context, points);
    // Create a "hole" on the overlay inside the quadrilateral.
    context.clip();
    if (!img && !fillColor) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    } else if (!img && fillColor) {
      context.fillStyle = fillColor;
      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } else {
      context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    }
    // Add stroke outside the cleared area.
    if (stroke) context.stroke();
    // Remove clipping mask.
    context.restore();
  }

  draw(context, points) {
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    let coordinates = [];
    for (const point of points.slice(1)) {
      context.lineTo(point.x, point.y);
      coordinates.push([point.x, point.y]);
    }
    context.closePath();
  }

  startResizing(event, points, config) {
    if (!this.isDrawing && event.target.className === "idwall-handle") {
      const handle = event.target;
      const hdim = handle.offsetWidth;
      const direction = parseInt(handle.id.substr(10), 10);
      const bounds = this.canvas.getBoundingClientRect();

      let that = this;
      document.onmousemove = function(event) {
        let x = event.clientX;
        let y = event.clientY;

        if (x < bounds.left) x = bounds.left;
        if (x > bounds.right - hdim) x = bounds.right - hdim;
        if (y < bounds.top) y = bounds.top;
        if (y > bounds.bottom - hdim) y = bounds.bottom - hdim;

        that.resize(handle, direction, points, x, y, config);
      };
    }
  }

  resize(target, direction, points, x, y, config) {
    const cbounds = this.canvas.getBoundingClientRect();
    const dbounds = this.container.getBoundingClientRect();
    const hdim = target.offsetWidth;

    const displayX = x - dbounds.left;
    const displayY = y - dbounds.top;
    const canvasX = x - cbounds.left + hdim / 2;
    const canvasY = y - cbounds.top + hdim / 2;

    target.style.left = displayX + "px";
    target.style.top = displayY + "px";

    points[direction] = new Point(canvasX, canvasY);
    this.drawWithOverlay(
      points,
      config.overlayColor,
      config.stroke,
      config.strokeColor,
      config.strokeDashed,
      config.strokeWeight
    );

    var resized = new CustomEvent("resized", { detail: [canvasX, canvasY] });
    document.dispatchEvent(resized);
  }
}

module.exports = exports = Polygon;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvUG9seWdvbi5qcz9iYjBkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBQb2ludCA9IHJlcXVpcmUoXCIuL1BvaW50LmpzXCIpO1xuXG5jbGFzcyBQb2x5Z29uIHtcbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBjYW52YXMpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGRyYXdXaXRoT3ZlcmxheShcbiAgICBwb2ludHMsXG4gICAgb3ZlcmxheUNvbG9yLFxuICAgIHN0cm9rZSxcbiAgICBzdHJva2VDb2xvcixcbiAgICBzdHJva2VEYXNoZWQsXG4gICAgc3Ryb2tlV2VpZ2h0LFxuICAgIGZpbGxDb2xvciA9IFwiXCIsXG4gICAgaW1nID0gXCJcIlxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIFNhdmUgY29udGV4dCBmb3IgY2xpcHBpbmcgYW5kIGNsZWFyIGNhbnZhcy5cbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAvLyBEcmF3IG92ZXJsYXlcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG92ZXJsYXlDb2xvcjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIC8vIERyYXcgcXVhZHJpbGF0ZXJhbC5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBpZiAoc3Ryb2tlRGFzaGVkKSBjb250ZXh0LnNldExpbmVEYXNoKFs1LCAzXSk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlV2VpZ2h0O1xuICAgIHRoaXMuZHJhdyhjb250ZXh0LCBwb2ludHMpO1xuICAgIC8vIENyZWF0ZSBhIFwiaG9sZVwiIG9uIHRoZSBvdmVybGF5IGluc2lkZSB0aGUgcXVhZHJpbGF0ZXJhbC5cbiAgICBjb250ZXh0LmNsaXAoKTtcbiAgICBpZiAoIWltZyAmJiAhZmlsbENvbG9yKSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKCFpbWcgJiYgZmlsbENvbG9yKSB7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIC8vIEFkZCBzdHJva2Ugb3V0c2lkZSB0aGUgY2xlYXJlZCBhcmVhLlxuICAgIGlmIChzdHJva2UpIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgLy8gUmVtb3ZlIGNsaXBwaW5nIG1hc2suXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3KGNvbnRleHQsIHBvaW50cykge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHBvaW50cy5zbGljZSgxKSkge1xuICAgICAgY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKFtwb2ludC54LCBwb2ludC55XSk7XG4gICAgfVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cblxuICBzdGFydFJlc2l6aW5nKGV2ZW50LCBwb2ludHMsIGNvbmZpZykge1xuICAgIGlmICghdGhpcy5pc0RyYXdpbmcgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJpZHdhbGwtaGFuZGxlXCIpIHtcbiAgICAgIGNvbnN0IGhhbmRsZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IGhkaW0gPSBoYW5kbGUub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBwYXJzZUludChoYW5kbGUuaWQuc3Vic3RyKDEwKSwgMTApO1xuICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBsZXQgeSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgaWYgKHggPCBib3VuZHMubGVmdCkgeCA9IGJvdW5kcy5sZWZ0O1xuICAgICAgICBpZiAoeCA+IGJvdW5kcy5yaWdodCAtIGhkaW0pIHggPSBib3VuZHMucmlnaHQgLSBoZGltO1xuICAgICAgICBpZiAoeSA8IGJvdW5kcy50b3ApIHkgPSBib3VuZHMudG9wO1xuICAgICAgICBpZiAoeSA+IGJvdW5kcy5ib3R0b20gLSBoZGltKSB5ID0gYm91bmRzLmJvdHRvbSAtIGhkaW07XG5cbiAgICAgICAgdGhhdC5yZXNpemUoaGFuZGxlLCBkaXJlY3Rpb24sIHBvaW50cywgeCwgeSwgY29uZmlnKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKHRhcmdldCwgZGlyZWN0aW9uLCBwb2ludHMsIHgsIHksIGNvbmZpZykge1xuICAgIGNvbnN0IGNib3VuZHMgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkYm91bmRzID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgaGRpbSA9IHRhcmdldC5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IGRpc3BsYXlYID0geCAtIGRib3VuZHMubGVmdDtcbiAgICBjb25zdCBkaXNwbGF5WSA9IHkgLSBkYm91bmRzLnRvcDtcbiAgICBjb25zdCBjYW52YXNYID0geCAtIGNib3VuZHMubGVmdCArIGhkaW0gLyAyO1xuICAgIGNvbnN0IGNhbnZhc1kgPSB5IC0gY2JvdW5kcy50b3AgKyBoZGltIC8gMjtcblxuICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gZGlzcGxheVggKyBcInB4XCI7XG4gICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGRpc3BsYXlZICsgXCJweFwiO1xuXG4gICAgcG9pbnRzW2RpcmVjdGlvbl0gPSBuZXcgUG9pbnQoY2FudmFzWCwgY2FudmFzWSk7XG4gICAgdGhpcy5kcmF3V2l0aE92ZXJsYXkoXG4gICAgICBwb2ludHMsXG4gICAgICBjb25maWcub3ZlcmxheUNvbG9yLFxuICAgICAgY29uZmlnLnN0cm9rZSxcbiAgICAgIGNvbmZpZy5zdHJva2VDb2xvcixcbiAgICAgIGNvbmZpZy5zdHJva2VEYXNoZWQsXG4gICAgICBjb25maWcuc3Ryb2tlV2VpZ2h0XG4gICAgKTtcblxuICAgIHZhciByZXNpemVkID0gbmV3IEN1c3RvbUV2ZW50KFwicmVzaXplZFwiLCB7IGRldGFpbDogW2NhbnZhc1gsIGNhbnZhc1ldIH0pO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQocmVzaXplZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUG9seWdvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2pzL2lkY3JvcC9Qb2x5Z29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///1
`)},function(module,exports){eval(`function loadImage(src) {
  var img = new Image();
  /* eslint-disable */
  img.src = src.substring(0, 1) === "\\"" ? src.substring(1, src.length - 1) : src;
  /* eslint-enable */
  return new Promise(function(resolve, reject) {
    img.onload = () => resolve(img);
    img.onerror = error => reject(error);
  });
}

function dataURIFromSrc(src) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  return loadImage(src).then(function(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
  });
}

function getBgSource(element) {
  const style = element.currentStyle || window.getComputedStyle(element, false);
  return style.backgroundImage.slice(4, -1);
}

function fakeInput(input, fakeInput) {
  input.style.display = "none";
  fakeInput.addEventListener("click", function(event) {
    event = event || window.event;
    event.preventDefault();
    input.click();
  });
}

function dragDropInput(input, dragArea, filenameArea, self) {
  dragArea.addEventListener("dragenter", function() {
    dragArea.classList.add("hovered");
  });
  dragArea.addEventListener("dragleave", function() {
    dragArea.classList.remove("hovered");
  });
  dragArea.addEventListener("dragover", function(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });
  dragArea.addEventListener("drop", function(event) {
    event.preventDefault();
    dragArea.classList.remove("hovered");
    getFile(event).then(data => {
      filenameArea.innerHTML = data.filename;
      self.startCroppingArea(data.base64, self);
    });
  });
  input.addEventListener("change", function(event) {
    getFile(event).then(data => {
      filenameArea.innerHTML = data.filename;
      self.startCroppingArea(data.base64, self);
    });
  });
}

function getFile(event) {
  event.preventDefault();
  const file =
    typeof event.target.files !== "undefined"
      ? event.target.files[0]
      : event.dataTransfer.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise(function(resolve, reject) {
    reader.onload = event =>
      resolve({
        filename: file.name,
        base64: event.target.result
      });
    reader.onerror = error => reject(error);
  });
}

module.exports = exports = {
  loadImage,
  dataURIFromSrc,
  getBgSource,
  fakeInput,
  dragDropInput,
  getFile
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvaGVscGVycy5qcz9kOTlhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBpbWcuc3JjID0gc3JjLnN1YnN0cmluZygwLCAxKSA9PT0gXCJcXFwiXCIgPyBzcmMuc3Vic3RyaW5nKDEsIHNyYy5sZW5ndGggLSAxKSA6IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkYXRhVVJJRnJvbVNyYyhzcmMpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgcmV0dXJuIGxvYWRJbWFnZShzcmMpLnRoZW4oZnVuY3Rpb24oaW1nKSB7XG4gICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmdTb3VyY2UoZWxlbWVudCkge1xuICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIGZhbHNlKTtcbiAgcmV0dXJuIHN0eWxlLmJhY2tncm91bmRJbWFnZS5zbGljZSg0LCAtMSk7XG59XG5cbmZ1bmN0aW9uIGZha2VJbnB1dChpbnB1dCwgZmFrZUlucHV0KSB7XG4gIGlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZmFrZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdEcm9wSW5wdXQoaW5wdXQsIGRyYWdBcmVhLCBmaWxlbmFtZUFyZWEsIHNlbGYpIHtcbiAgZHJhZ0FyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICBkcmFnQXJlYS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgfSk7XG4gIGRyYWdBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgZHJhZ0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gIH0pO1xuICBkcmFnQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XG4gIH0pO1xuICBkcmFnQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJhZ0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gICAgZ2V0RmlsZShldmVudCkudGhlbihkYXRhID0+IHtcbiAgICAgIGZpbGVuYW1lQXJlYS5pbm5lckhUTUwgPSBkYXRhLmZpbGVuYW1lO1xuICAgICAgc2VsZi5zdGFydENyb3BwaW5nQXJlYShkYXRhLmJhc2U2NCwgc2VsZik7XG4gICAgfSk7XG4gIH0pO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZ2V0RmlsZShldmVudCkudGhlbihkYXRhID0+IHtcbiAgICAgIGZpbGVuYW1lQXJlYS5pbm5lckhUTUwgPSBkYXRhLmZpbGVuYW1lO1xuICAgICAgc2VsZi5zdGFydENyb3BwaW5nQXJlYShkYXRhLmJhc2U2NCwgc2VsZik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGZpbGUgPVxuICAgIHR5cGVvZiBldmVudC50YXJnZXQuZmlsZXMgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICA6IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWFkZXIub25sb2FkID0gZXZlbnQgPT5cbiAgICAgIHJlc29sdmUoe1xuICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBiYXNlNjQ6IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgIH0pO1xuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHtcbiAgbG9hZEltYWdlLFxuICBkYXRhVVJJRnJvbVNyYyxcbiAgZ2V0QmdTb3VyY2UsXG4gIGZha2VJbnB1dCxcbiAgZHJhZ0Ryb3BJbnB1dCxcbiAgZ2V0RmlsZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2pzL2lkY3JvcC9oZWxwZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///2
`)},function(module,exports,__webpack_require__){"use strict";eval(`

const Point = __webpack_require__(/*! ./Point.js */ 0);
const Handle = __webpack_require__(/*! ./Handle.js */ 4);
const Polygon = __webpack_require__(/*! ./Polygon.js */ 1);
const CropArea = __webpack_require__(/*! ./CropArea.js */ 5);

const helpers = __webpack_require__(/*! ./helpers.js */ 2);

class IdCrop {
  constructor(config) {
    this.config = {
      numPoints: typeof config.numPoints !== "undefined" ? config.numPoints : 4,
      allowUpload:
        typeof config.allowUpload !== "undefined" ? config.allowUpload : true,
      closeButtonSelector:
        typeof config.closeButtonSelector !== "undefined" 
        ? config.closeButtonSelector 
        : false,
      containers: {
        displayArea: document.querySelector(config.displaySelector),
        toolbarArea: config.toolbarSelector
          ? document.querySelector(config.toolbarSelector)
          : "",
        previewArea: config.previewSelector
          ? document.querySelector(config.previewSelector)
          : ""
      },
      croppingArea: {
        overlayColor:
          typeof config.croppingArea !== "undefined" &&
          typeof config.croppingArea.overlayColor !== "undefined"
            ? config.croppingArea.overlayColor
            : "rgba(0, 0, 0, 0.7)",
        stroke:
          typeof config.croppingArea !== "undefined" &&
          typeof config.croppingArea.stroke !== "undefined"
            ? config.croppingArea.stroke
            : true,
        strokeColor:
          typeof config.croppingArea !== "undefined" &&
          typeof config.croppingArea.strokeColor !== "undefined"
            ? config.croppingArea.strokeColor
            : "white",
        strokeDashed:
          typeof config.croppingArea !== "undefined" &&
          typeof config.croppingArea.strokeDashed !== "undefined"
            ? config.croppingArea.strokeDashed
            : true,
        strokeWeight:
          typeof config.croppingArea !== "undefined" &&
          typeof config.croppingArea.strokeWeight !== "undefined"
            ? config.croppingArea.strokeWeight
            : 2
      },
      crop: {
        overlayColor:
          typeof config.crop !== "undefined" &&
          typeof config.crop.overlayColor !== "undefined"
            ? config.crop.overlayColor
            : "rgba(0, 0, 0, 0)",
        fillColor:
          typeof config.crop !== "undefined" &&
          typeof config.crop.fillColor !== "undefined"
            ? config.crop.fillColor
            : false,
        showImage:
          typeof config.crop !== "undefined" &&
          typeof config.crop.showImage !== "undefined"
            ? config.crop.showImage
            : true,
        stroke:
          typeof config.crop !== "undefined" &&
          typeof config.crop.stroke !== "undefined"
            ? config.crop.stroke
            : true,
        strokeColor:
          typeof config.crop !== "undefined" &&
          typeof config.crop.strokeColor !== "undefined"
            ? config.crop.strokeColor
            : false,
        strokeDashed:
          typeof config.crop !== "undefined" &&
          typeof config.crop.strokeDashed !== "undefined"
            ? config.crop.strokeDashed
            : false,
        strokeWeight:
          typeof config.crop !== "undefined" &&
          typeof config.crop.strokeWeight !== "undefined"
            ? config.crop.strokeWeight
            : 0
      },
      handles: {
        class:
          typeof config.handles !== "undefined" &&
          typeof config.handles.class !== "undefined"
            ? config.handles.class
            : "",
        defaultStyles:
          typeof config.handles !== "undefined" &&
          typeof config.handles.defaultStyles !== "undefined"
            ? config.handles.defaultStyles
            : true
      }
    };

    this.handles = [];
    this.points = [];
  }

  init() {
    const self = this;
    const c = this.config.containers;

    c.displayArea.classList.add("idwall-display");

    if (c.previewArea) c.previewArea.classList.add("idwall-preview");

    if (c.toolbarArea) {
      if (this.config.numPoints === Infinity) {
        var closeButton = "";
        if (this.config.closeButtonSelector) {
          closeButton = document.querySelector(this.config.closeButtonSelector)
        } else {
          closeButton = document.createElement("button");
          var closeButtonText = document.createTextNode("Close path");
          closeButton.appendChild(closeButtonText);
          c.toolbarArea.appendChild(closeButton);
        }
        closeButton.addEventListener("click", function() {
          self.startCroppingPolygon();
        });
      }
    }

    if (c.toolbarArea && this.config.allowUpload) {
      var hint = document.createElement("p");
      var hintText = document.createTextNode("Drop files here or ");
      var fakeInput = document.createElement("a");
      var fakeInputText = document.createTextNode("Browse...");
      fakeInput.title = "Browse";
      fakeInput.href = "";
      fakeInput.appendChild(fakeInputText);
      hint.appendChild(hintText);
      hint.appendChild(fakeInput);
      c.displayArea.appendChild(hint);

      var filenameArea = document.createElement("p");
      filenameArea.appendChild(document.createTextNode("No file selected."));
      c.toolbarArea.appendChild(filenameArea);

      var input = document.createElement("input");
      input.type = "file";
      c.toolbarArea.appendChild(input);
      helpers.fakeInput(input, fakeInput);
      helpers.dragDropInput(input, c.displayArea, filenameArea, this);
    }

    if (!c.toolbarArea || !this.config.allowUpload) {
      var src = helpers.getBgSource(c.displayArea);
      helpers.dataURIFromSrc(src).then(function(base64) {
        self.startCroppingArea(base64, self);
      });
    }

    window.addEventListener("mouseup", function() {
      if (self.config.containers.previewArea) self.drawPreview(self);
      document.onmousemove = function() {};
    });

    var created = new CustomEvent("created", { detail: self.config });
    document.dispatchEvent(created);
  }

  startCroppingArea(base64, self) {
    const displayArea = self.config.containers.displayArea;

    self.cropArea = new CropArea(displayArea, base64);
    self.cropArea.create().then(function(img) {
      self.image = img;
      displayArea.style.backgroundImage = "url('" + base64 + "')";
    });

    for (const handle of self.handles) {
      handle.deleteNode();
    }

    self.handles = [];
    self.cropArea.canvas.addEventListener("mousedown", function(event) {
      self.createHandles(event, self);
    });
  }

  createHandles(event, self) {
    if (self.cropArea.isDrawing) {
      const cbounds = self.cropArea.canvas.getBoundingClientRect();
      const x = event.clientX - cbounds.left,
        y = event.clientY - cbounds.top;

      let point = new Point(x, y),
        handle = new Handle(
          self.config.containers.displayArea,
          self.image.left,
          self.image.top,
          point
        );

      handle.init(self.config.handles.defaultStyles, self.config.handles.class);
      self.handles.push(handle);
      self.points.push(point);

      if (self.handles.length == self.config.numPoints) {
        self.startCroppingPolygon(self);
      }
    }
  }

  startCroppingPolygon(self = this) {
    const c = self.config.croppingArea;

    self.points = Point.sort(self.points);
    self.cropArea.isDrawing = false;

    self.cropPolygon = new Polygon(
      self.config.containers.displayArea,
      self.cropArea.canvas
    );
    self.cropPolygon.drawWithOverlay(
      self.points,
      c.overlayColor,
      c.stroke,
      c.strokeColor,
      c.strokeDashed,
      c.strokeWeight
    );

    for (const handle of self.handles) {
      const config = self.config.croppingArea;
      handle.direction = handle.setDirection(self.points);
      handle.node.addEventListener("mousedown", function(event) {
        self.cropPolygon.startResizing(event, self.points, config);
      });
    }

    self.drawPreview(self);
  }

  drawPreview(self) {
    if (
      typeof this.cropArea !== "undefined" &&
      this.cropArea.isDrawing == false
    ) {
      const base64 = this.cropArea.crop(
        this.image.img,
        this.config.containers.previewArea,
        this.points,
        this.config.crop
      );
      self.config.containers.previewArea.style.backgroundImage =
        "url('" + base64 + "')";
    }
  }

  reset() {
    this.cropArea = undefined;
    this.cropPolygon = undefined;
    
    this.handles = [];
    this.points = [];
    this.image = "data:image/jpeg;base64,";

    if (this.previewArea) this.previewArea.style.backgroundImage = "";

    this.init();
  }

  getPoints() {
    let realPoints = [];
    for (const point of this.points) {
      realPoints.push(
        new Point(point.x * this.image.ratio, point.y * this.image.ratio)
      );
    }
    return realPoints;
  }
}

module.exports = exports = IdCrop;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvSWRDcm9wLmpzP2FlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFBvaW50ID0gcmVxdWlyZShcIi4vUG9pbnQuanNcIik7XG5jb25zdCBIYW5kbGUgPSByZXF1aXJlKFwiLi9IYW5kbGUuanNcIik7XG5jb25zdCBQb2x5Z29uID0gcmVxdWlyZShcIi4vUG9seWdvbi5qc1wiKTtcbmNvbnN0IENyb3BBcmVhID0gcmVxdWlyZShcIi4vQ3JvcEFyZWEuanNcIik7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzLmpzXCIpO1xuXG5jbGFzcyBJZENyb3Age1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIG51bVBvaW50czogdHlwZW9mIGNvbmZpZy5udW1Qb2ludHMgIT09IFwidW5kZWZpbmVkXCIgPyBjb25maWcubnVtUG9pbnRzIDogNCxcbiAgICAgIGFsbG93VXBsb2FkOlxuICAgICAgICB0eXBlb2YgY29uZmlnLmFsbG93VXBsb2FkICE9PSBcInVuZGVmaW5lZFwiID8gY29uZmlnLmFsbG93VXBsb2FkIDogdHJ1ZSxcbiAgICAgIGNsb3NlQnV0dG9uU2VsZWN0b3I6XG4gICAgICAgIHR5cGVvZiBjb25maWcuY2xvc2VCdXR0b25TZWxlY3RvciAhPT0gXCJ1bmRlZmluZWRcIiBcbiAgICAgICAgPyBjb25maWcuY2xvc2VCdXR0b25TZWxlY3RvciBcbiAgICAgICAgOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lcnM6IHtcbiAgICAgICAgZGlzcGxheUFyZWE6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmRpc3BsYXlTZWxlY3RvciksXG4gICAgICAgIHRvb2xiYXJBcmVhOiBjb25maWcudG9vbGJhclNlbGVjdG9yXG4gICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy50b29sYmFyU2VsZWN0b3IpXG4gICAgICAgICAgOiBcIlwiLFxuICAgICAgICBwcmV2aWV3QXJlYTogY29uZmlnLnByZXZpZXdTZWxlY3RvclxuICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucHJldmlld1NlbGVjdG9yKVxuICAgICAgICAgIDogXCJcIlxuICAgICAgfSxcbiAgICAgIGNyb3BwaW5nQXJlYToge1xuICAgICAgICBvdmVybGF5Q29sb3I6XG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wcGluZ0FyZWEgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3BwaW5nQXJlYS5vdmVybGF5Q29sb3IgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gY29uZmlnLmNyb3BwaW5nQXJlYS5vdmVybGF5Q29sb3JcbiAgICAgICAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIDAuNylcIixcbiAgICAgICAgc3Ryb2tlOlxuICAgICAgICAgIHR5cGVvZiBjb25maWcuY3JvcHBpbmdBcmVhICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wcGluZ0FyZWEuc3Ryb2tlICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGNvbmZpZy5jcm9wcGluZ0FyZWEuc3Ryb2tlXG4gICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIHN0cm9rZUNvbG9yOlxuICAgICAgICAgIHR5cGVvZiBjb25maWcuY3JvcHBpbmdBcmVhICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wcGluZ0FyZWEuc3Ryb2tlQ29sb3IgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gY29uZmlnLmNyb3BwaW5nQXJlYS5zdHJva2VDb2xvclxuICAgICAgICAgICAgOiBcIndoaXRlXCIsXG4gICAgICAgIHN0cm9rZURhc2hlZDpcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3BwaW5nQXJlYSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIHR5cGVvZiBjb25maWcuY3JvcHBpbmdBcmVhLnN0cm9rZURhc2hlZCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBjb25maWcuY3JvcHBpbmdBcmVhLnN0cm9rZURhc2hlZFxuICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBzdHJva2VXZWlnaHQ6XG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wcGluZ0FyZWEgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3BwaW5nQXJlYS5zdHJva2VXZWlnaHQgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gY29uZmlnLmNyb3BwaW5nQXJlYS5zdHJva2VXZWlnaHRcbiAgICAgICAgICAgIDogMlxuICAgICAgfSxcbiAgICAgIGNyb3A6IHtcbiAgICAgICAgb3ZlcmxheUNvbG9yOlxuICAgICAgICAgIHR5cGVvZiBjb25maWcuY3JvcCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgIHR5cGVvZiBjb25maWcuY3JvcC5vdmVybGF5Q29sb3IgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gY29uZmlnLmNyb3Aub3ZlcmxheUNvbG9yXG4gICAgICAgICAgICA6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxuICAgICAgICBmaWxsQ29sb3I6XG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wLmZpbGxDb2xvciAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBjb25maWcuY3JvcC5maWxsQ29sb3JcbiAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHNob3dJbWFnZTpcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3AgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3Auc2hvd0ltYWdlICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGNvbmZpZy5jcm9wLnNob3dJbWFnZVxuICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBzdHJva2U6XG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wLnN0cm9rZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBjb25maWcuY3JvcC5zdHJva2VcbiAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgc3Ryb2tlQ29sb3I6XG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wLnN0cm9rZUNvbG9yICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGNvbmZpZy5jcm9wLnN0cm9rZUNvbG9yXG4gICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBzdHJva2VEYXNoZWQ6XG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZy5jcm9wLnN0cm9rZURhc2hlZCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBjb25maWcuY3JvcC5zdHJva2VEYXNoZWRcbiAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHN0cm9rZVdlaWdodDpcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3AgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmNyb3Auc3Ryb2tlV2VpZ2h0ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICA/IGNvbmZpZy5jcm9wLnN0cm9rZVdlaWdodFxuICAgICAgICAgICAgOiAwXG4gICAgICB9LFxuICAgICAgaGFuZGxlczoge1xuICAgICAgICBjbGFzczpcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmhhbmRsZXMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmhhbmRsZXMuY2xhc3MgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gY29uZmlnLmhhbmRsZXMuY2xhc3NcbiAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgZGVmYXVsdFN0eWxlczpcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmhhbmRsZXMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICB0eXBlb2YgY29uZmlnLmhhbmRsZXMuZGVmYXVsdFN0eWxlcyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBjb25maWcuaGFuZGxlcy5kZWZhdWx0U3R5bGVzXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVzID0gW107XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgYyA9IHRoaXMuY29uZmlnLmNvbnRhaW5lcnM7XG5cbiAgICBjLmRpc3BsYXlBcmVhLmNsYXNzTGlzdC5hZGQoXCJpZHdhbGwtZGlzcGxheVwiKTtcblxuICAgIGlmIChjLnByZXZpZXdBcmVhKSBjLnByZXZpZXdBcmVhLmNsYXNzTGlzdC5hZGQoXCJpZHdhbGwtcHJldmlld1wiKTtcblxuICAgIGlmIChjLnRvb2xiYXJBcmVhKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcubnVtUG9pbnRzID09PSBJbmZpbml0eSkge1xuICAgICAgICB2YXIgY2xvc2VCdXR0b24gPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xvc2VCdXR0b25TZWxlY3Rvcikge1xuICAgICAgICAgIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5jbG9zZUJ1dHRvblNlbGVjdG9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICB2YXIgY2xvc2VCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDbG9zZSBwYXRoXCIpO1xuICAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uVGV4dCk7XG4gICAgICAgICAgYy50b29sYmFyQXJlYS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RhcnRDcm9wcGluZ1BvbHlnb24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGMudG9vbGJhckFyZWEgJiYgdGhpcy5jb25maWcuYWxsb3dVcGxvYWQpIHtcbiAgICAgIHZhciBoaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB2YXIgaGludFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkRyb3AgZmlsZXMgaGVyZSBvciBcIik7XG4gICAgICB2YXIgZmFrZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB2YXIgZmFrZUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQnJvd3NlLi4uXCIpO1xuICAgICAgZmFrZUlucHV0LnRpdGxlID0gXCJCcm93c2VcIjtcbiAgICAgIGZha2VJbnB1dC5ocmVmID0gXCJcIjtcbiAgICAgIGZha2VJbnB1dC5hcHBlbmRDaGlsZChmYWtlSW5wdXRUZXh0KTtcbiAgICAgIGhpbnQuYXBwZW5kQ2hpbGQoaGludFRleHQpO1xuICAgICAgaGludC5hcHBlbmRDaGlsZChmYWtlSW5wdXQpO1xuICAgICAgYy5kaXNwbGF5QXJlYS5hcHBlbmRDaGlsZChoaW50KTtcblxuICAgICAgdmFyIGZpbGVuYW1lQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZmlsZW5hbWVBcmVhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTm8gZmlsZSBzZWxlY3RlZC5cIikpO1xuICAgICAgYy50b29sYmFyQXJlYS5hcHBlbmRDaGlsZChmaWxlbmFtZUFyZWEpO1xuXG4gICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dC50eXBlID0gXCJmaWxlXCI7XG4gICAgICBjLnRvb2xiYXJBcmVhLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIGhlbHBlcnMuZmFrZUlucHV0KGlucHV0LCBmYWtlSW5wdXQpO1xuICAgICAgaGVscGVycy5kcmFnRHJvcElucHV0KGlucHV0LCBjLmRpc3BsYXlBcmVhLCBmaWxlbmFtZUFyZWEsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmICghYy50b29sYmFyQXJlYSB8fCAhdGhpcy5jb25maWcuYWxsb3dVcGxvYWQpIHtcbiAgICAgIHZhciBzcmMgPSBoZWxwZXJzLmdldEJnU291cmNlKGMuZGlzcGxheUFyZWEpO1xuICAgICAgaGVscGVycy5kYXRhVVJJRnJvbVNyYyhzcmMpLnRoZW4oZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAgIHNlbGYuc3RhcnRDcm9wcGluZ0FyZWEoYmFzZTY0LCBzZWxmKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLmNvbmZpZy5jb250YWluZXJzLnByZXZpZXdBcmVhKSBzZWxmLmRyYXdQcmV2aWV3KHNlbGYpO1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbigpIHt9O1xuICAgIH0pO1xuXG4gICAgdmFyIGNyZWF0ZWQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjcmVhdGVkXCIsIHsgZGV0YWlsOiBzZWxmLmNvbmZpZyB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZWQpO1xuICB9XG5cbiAgc3RhcnRDcm9wcGluZ0FyZWEoYmFzZTY0LCBzZWxmKSB7XG4gICAgY29uc3QgZGlzcGxheUFyZWEgPSBzZWxmLmNvbmZpZy5jb250YWluZXJzLmRpc3BsYXlBcmVhO1xuXG4gICAgc2VsZi5jcm9wQXJlYSA9IG5ldyBDcm9wQXJlYShkaXNwbGF5QXJlYSwgYmFzZTY0KTtcbiAgICBzZWxmLmNyb3BBcmVhLmNyZWF0ZSgpLnRoZW4oZnVuY3Rpb24oaW1nKSB7XG4gICAgICBzZWxmLmltYWdlID0gaW1nO1xuICAgICAgZGlzcGxheUFyZWEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgYmFzZTY0ICsgXCInKVwiO1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGUgb2Ygc2VsZi5oYW5kbGVzKSB7XG4gICAgICBoYW5kbGUuZGVsZXRlTm9kZSgpO1xuICAgIH1cblxuICAgIHNlbGYuaGFuZGxlcyA9IFtdO1xuICAgIHNlbGYuY3JvcEFyZWEuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHNlbGYuY3JlYXRlSGFuZGxlcyhldmVudCwgc2VsZik7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVzKGV2ZW50LCBzZWxmKSB7XG4gICAgaWYgKHNlbGYuY3JvcEFyZWEuaXNEcmF3aW5nKSB7XG4gICAgICBjb25zdCBjYm91bmRzID0gc2VsZi5jcm9wQXJlYS5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNib3VuZHMubGVmdCxcbiAgICAgICAgeSA9IGV2ZW50LmNsaWVudFkgLSBjYm91bmRzLnRvcDtcblxuICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KHgsIHkpLFxuICAgICAgICBoYW5kbGUgPSBuZXcgSGFuZGxlKFxuICAgICAgICAgIHNlbGYuY29uZmlnLmNvbnRhaW5lcnMuZGlzcGxheUFyZWEsXG4gICAgICAgICAgc2VsZi5pbWFnZS5sZWZ0LFxuICAgICAgICAgIHNlbGYuaW1hZ2UudG9wLFxuICAgICAgICAgIHBvaW50XG4gICAgICAgICk7XG5cbiAgICAgIGhhbmRsZS5pbml0KHNlbGYuY29uZmlnLmhhbmRsZXMuZGVmYXVsdFN0eWxlcywgc2VsZi5jb25maWcuaGFuZGxlcy5jbGFzcyk7XG4gICAgICBzZWxmLmhhbmRsZXMucHVzaChoYW5kbGUpO1xuICAgICAgc2VsZi5wb2ludHMucHVzaChwb2ludCk7XG5cbiAgICAgIGlmIChzZWxmLmhhbmRsZXMubGVuZ3RoID09IHNlbGYuY29uZmlnLm51bVBvaW50cykge1xuICAgICAgICBzZWxmLnN0YXJ0Q3JvcHBpbmdQb2x5Z29uKHNlbGYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0Q3JvcHBpbmdQb2x5Z29uKHNlbGYgPSB0aGlzKSB7XG4gICAgY29uc3QgYyA9IHNlbGYuY29uZmlnLmNyb3BwaW5nQXJlYTtcblxuICAgIHNlbGYucG9pbnRzID0gUG9pbnQuc29ydChzZWxmLnBvaW50cyk7XG4gICAgc2VsZi5jcm9wQXJlYS5pc0RyYXdpbmcgPSBmYWxzZTtcblxuICAgIHNlbGYuY3JvcFBvbHlnb24gPSBuZXcgUG9seWdvbihcbiAgICAgIHNlbGYuY29uZmlnLmNvbnRhaW5lcnMuZGlzcGxheUFyZWEsXG4gICAgICBzZWxmLmNyb3BBcmVhLmNhbnZhc1xuICAgICk7XG4gICAgc2VsZi5jcm9wUG9seWdvbi5kcmF3V2l0aE92ZXJsYXkoXG4gICAgICBzZWxmLnBvaW50cyxcbiAgICAgIGMub3ZlcmxheUNvbG9yLFxuICAgICAgYy5zdHJva2UsXG4gICAgICBjLnN0cm9rZUNvbG9yLFxuICAgICAgYy5zdHJva2VEYXNoZWQsXG4gICAgICBjLnN0cm9rZVdlaWdodFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZSBvZiBzZWxmLmhhbmRsZXMpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHNlbGYuY29uZmlnLmNyb3BwaW5nQXJlYTtcbiAgICAgIGhhbmRsZS5kaXJlY3Rpb24gPSBoYW5kbGUuc2V0RGlyZWN0aW9uKHNlbGYucG9pbnRzKTtcbiAgICAgIGhhbmRsZS5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgc2VsZi5jcm9wUG9seWdvbi5zdGFydFJlc2l6aW5nKGV2ZW50LCBzZWxmLnBvaW50cywgY29uZmlnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuZHJhd1ByZXZpZXcoc2VsZik7XG4gIH1cblxuICBkcmF3UHJldmlldyhzZWxmKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHRoaXMuY3JvcEFyZWEgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHRoaXMuY3JvcEFyZWEuaXNEcmF3aW5nID09IGZhbHNlXG4gICAgKSB7XG4gICAgICBjb25zdCBiYXNlNjQgPSB0aGlzLmNyb3BBcmVhLmNyb3AoXG4gICAgICAgIHRoaXMuaW1hZ2UuaW1nLFxuICAgICAgICB0aGlzLmNvbmZpZy5jb250YWluZXJzLnByZXZpZXdBcmVhLFxuICAgICAgICB0aGlzLnBvaW50cyxcbiAgICAgICAgdGhpcy5jb25maWcuY3JvcFxuICAgICAgKTtcbiAgICAgIHNlbGYuY29uZmlnLmNvbnRhaW5lcnMucHJldmlld0FyZWEuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJ1cmwoJ1wiICsgYmFzZTY0ICsgXCInKVwiO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuY3JvcEFyZWEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jcm9wUG9seWdvbiA9IHVuZGVmaW5lZDtcbiAgICBcbiAgICB0aGlzLmhhbmRsZXMgPSBbXTtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuaW1hZ2UgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCI7XG5cbiAgICBpZiAodGhpcy5wcmV2aWV3QXJlYSkgdGhpcy5wcmV2aWV3QXJlYS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgbGV0IHJlYWxQb2ludHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMucG9pbnRzKSB7XG4gICAgICByZWFsUG9pbnRzLnB1c2goXG4gICAgICAgIG5ldyBQb2ludChwb2ludC54ICogdGhpcy5pbWFnZS5yYXRpbywgcG9pbnQueSAqIHRoaXMuaW1hZ2UucmF0aW8pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVhbFBvaW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBJZENyb3A7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9qcy9pZGNyb3AvSWRDcm9wLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///3
`)},function(module,exports,__webpack_require__){"use strict";eval(`

const Point = __webpack_require__(/*! ./Point.js */ 0);

/*
 * TODO: Change this class to extend HTMLElement when it's stabilized and
 * available in most browsers. Right now it only works in Chrome.
 * https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements
 */

class Handle {
  constructor(parent, offsetX, offsetY, point) {
    this.parent = parent;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.point = new Point(point.x + offsetX, point.y + offsetY);

    this.node = document.createElement("div");
  }

  init(defaultStyles, additionalClasses) {
    if (defaultStyles) this.node.className = "idwall-handle";
    if (additionalClasses) this.node.classList.add(additionalClasses);
    this.parent.appendChild(this.node);
    this.node.style.left = this.point.x - this.node.offsetWidth / 2 + "px";
    this.node.style.top = this.point.y - this.node.offsetWidth / 2 + "px";

    var handleCreated = new CustomEvent("handleCreated", {
      detail: [this.point.x, this.point.y]
    });
    document.dispatchEvent(handleCreated);
  }

  setDirection(points) {
    for (const [index, point] of points.entries()) {
      if (
        point.x === this.point.x - this.offsetX &&
        point.y === this.point.y - this.offsetY &&
        this.node.id === ""
      ) {
        this.node.id = "direction-" + index;
      }
    }
  }

  delete() {
    this.parent.removeChild(this.node);
    this.node = document.createElement("div");
  }
}

module.exports = exports = Handle;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvSGFuZGxlLmpzPzhmNjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFBvaW50ID0gcmVxdWlyZShcIi4vUG9pbnQuanNcIik7XG5cbi8qXG4gKiBUT0RPOiBDaGFuZ2UgdGhpcyBjbGFzcyB0byBleHRlbmQgSFRNTEVsZW1lbnQgd2hlbiBpdCdzIHN0YWJpbGl6ZWQgYW5kXG4gKiBhdmFpbGFibGUgaW4gbW9zdCBicm93c2Vycy4gUmlnaHQgbm93IGl0IG9ubHkgd29ya3MgaW4gQ2hyb21lLlxuICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvY3VzdG9tLWVsZW1lbnRzLmh0bWwjY3VzdG9tLWVsZW1lbnRzXG4gKi9cblxuY2xhc3MgSGFuZGxlIHtcbiAgY29uc3RydWN0b3IocGFyZW50LCBvZmZzZXRYLCBvZmZzZXRZLCBwb2ludCkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XG4gICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcbiAgICB0aGlzLnBvaW50ID0gbmV3IFBvaW50KHBvaW50LnggKyBvZmZzZXRYLCBwb2ludC55ICsgb2Zmc2V0WSk7XG5cbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB9XG5cbiAgaW5pdChkZWZhdWx0U3R5bGVzLCBhZGRpdGlvbmFsQ2xhc3Nlcykge1xuICAgIGlmIChkZWZhdWx0U3R5bGVzKSB0aGlzLm5vZGUuY2xhc3NOYW1lID0gXCJpZHdhbGwtaGFuZGxlXCI7XG4gICAgaWYgKGFkZGl0aW9uYWxDbGFzc2VzKSB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChhZGRpdGlvbmFsQ2xhc3Nlcyk7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICB0aGlzLm5vZGUuc3R5bGUubGVmdCA9IHRoaXMucG9pbnQueCAtIHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIgKyBcInB4XCI7XG4gICAgdGhpcy5ub2RlLnN0eWxlLnRvcCA9IHRoaXMucG9pbnQueSAtIHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIgKyBcInB4XCI7XG5cbiAgICB2YXIgaGFuZGxlQ3JlYXRlZCA9IG5ldyBDdXN0b21FdmVudChcImhhbmRsZUNyZWF0ZWRcIiwge1xuICAgICAgZGV0YWlsOiBbdGhpcy5wb2ludC54LCB0aGlzLnBvaW50LnldXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChoYW5kbGVDcmVhdGVkKTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbihwb2ludHMpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcG9pbnQueCA9PT0gdGhpcy5wb2ludC54IC0gdGhpcy5vZmZzZXRYICYmXG4gICAgICAgIHBvaW50LnkgPT09IHRoaXMucG9pbnQueSAtIHRoaXMub2Zmc2V0WSAmJlxuICAgICAgICB0aGlzLm5vZGUuaWQgPT09IFwiXCJcbiAgICAgICkge1xuICAgICAgICB0aGlzLm5vZGUuaWQgPSBcImRpcmVjdGlvbi1cIiArIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gSGFuZGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvanMvaWRjcm9wL0hhbmRsZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///4
`)},function(module,exports,__webpack_require__){"use strict";eval(`

const BgImage = __webpack_require__(/*! ./BgImage.js */ 6);
const Polygon = __webpack_require__(/*! ./Polygon.js */ 1);
const Point = __webpack_require__(/*! ./Point.js */ 0);

const helpers = __webpack_require__(/*! ./helpers.js */ 2);

class CropArea {
  constructor(container, base64) {
    this.container = container;
    this.base64 = base64;

    this.canvas = document.createElement("canvas");
    this.isDrawing = false;
    this.img = "";
  }

  clearCanvas() {
    this.isDrawing = true;

    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  create() {
    this.clearCanvas();

    this.container.innerHTML = "";
    this.container.style.backgroundImage = "url(" + this.base64 + ")";
    this.container.appendChild(this.canvas);

    let that = this;
    return helpers.loadImage(this.base64).then(function(img) {
      that.img = new BgImage(img, that.container);
      that.canvas.width = that.img.width;
      that.canvas.height = that.img.height;
      that.canvas.style.left = that.img.left + "px";
      that.canvas.style.top = that.img.top + "px";
      return that.img;
    });
  }

  crop(img, preview, points, config) {
    const auxCanvas = document.createElement("canvas");

    auxCanvas.width = this.img.realWidth;
    auxCanvas.height = this.img.realHeight;

    let realPoints = [];
    for (const point of points) {
      realPoints.push(
        new Point(point.x * this.img.ratio, point.y * this.img.ratio)
      );
    }

    const renderer = new Polygon(preview, auxCanvas);
    renderer.drawWithOverlay(
      realPoints,
      config.overlayColor,
      config.stroke,
      config.strokeColor,
      config.strokeDashed,
      config.strokeWeight,
      config.fillColor,
      config.showImage ? img : config.showImage
    );

    var base64 = auxCanvas.toDataURL();
    var crop = new CustomEvent("crop", { detail: base64 });
    document.dispatchEvent(crop);

    return base64;
  }
}

module.exports = exports = CropArea;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvQ3JvcEFyZWEuanM/YzJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQmdJbWFnZSA9IHJlcXVpcmUoXCIuL0JnSW1hZ2UuanNcIik7XG5jb25zdCBQb2x5Z29uID0gcmVxdWlyZShcIi4vUG9seWdvbi5qc1wiKTtcbmNvbnN0IFBvaW50ID0gcmVxdWlyZShcIi4vUG9pbnQuanNcIik7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzLmpzXCIpO1xuXG5jbGFzcyBDcm9wQXJlYSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgYmFzZTY0KSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5iYXNlNjQgPSBiYXNlNjQ7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmltZyA9IFwiXCI7XG4gIH1cblxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmlzRHJhd2luZyA9IHRydWU7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyB0aGlzLmJhc2U2NCArIFwiKVwiO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gaGVscGVycy5sb2FkSW1hZ2UodGhpcy5iYXNlNjQpLnRoZW4oZnVuY3Rpb24oaW1nKSB7XG4gICAgICB0aGF0LmltZyA9IG5ldyBCZ0ltYWdlKGltZywgdGhhdC5jb250YWluZXIpO1xuICAgICAgdGhhdC5jYW52YXMud2lkdGggPSB0aGF0LmltZy53aWR0aDtcbiAgICAgIHRoYXQuY2FudmFzLmhlaWdodCA9IHRoYXQuaW1nLmhlaWdodDtcbiAgICAgIHRoYXQuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGF0LmltZy5sZWZ0ICsgXCJweFwiO1xuICAgICAgdGhhdC5jYW52YXMuc3R5bGUudG9wID0gdGhhdC5pbWcudG9wICsgXCJweFwiO1xuICAgICAgcmV0dXJuIHRoYXQuaW1nO1xuICAgIH0pO1xuICB9XG5cbiAgY3JvcChpbWcsIHByZXZpZXcsIHBvaW50cywgY29uZmlnKSB7XG4gICAgY29uc3QgYXV4Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgIGF1eENhbnZhcy53aWR0aCA9IHRoaXMuaW1nLnJlYWxXaWR0aDtcbiAgICBhdXhDYW52YXMuaGVpZ2h0ID0gdGhpcy5pbWcucmVhbEhlaWdodDtcblxuICAgIGxldCByZWFsUG9pbnRzID0gW107XG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICAgIHJlYWxQb2ludHMucHVzaChcbiAgICAgICAgbmV3IFBvaW50KHBvaW50LnggKiB0aGlzLmltZy5yYXRpbywgcG9pbnQueSAqIHRoaXMuaW1nLnJhdGlvKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBQb2x5Z29uKHByZXZpZXcsIGF1eENhbnZhcyk7XG4gICAgcmVuZGVyZXIuZHJhd1dpdGhPdmVybGF5KFxuICAgICAgcmVhbFBvaW50cyxcbiAgICAgIGNvbmZpZy5vdmVybGF5Q29sb3IsXG4gICAgICBjb25maWcuc3Ryb2tlLFxuICAgICAgY29uZmlnLnN0cm9rZUNvbG9yLFxuICAgICAgY29uZmlnLnN0cm9rZURhc2hlZCxcbiAgICAgIGNvbmZpZy5zdHJva2VXZWlnaHQsXG4gICAgICBjb25maWcuZmlsbENvbG9yLFxuICAgICAgY29uZmlnLnNob3dJbWFnZSA/IGltZyA6IGNvbmZpZy5zaG93SW1hZ2VcbiAgICApO1xuXG4gICAgdmFyIGJhc2U2NCA9IGF1eENhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB2YXIgY3JvcCA9IG5ldyBDdXN0b21FdmVudChcImNyb3BcIiwgeyBkZXRhaWw6IGJhc2U2NCB9KTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGNyb3ApO1xuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBDcm9wQXJlYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2pzL2lkY3JvcC9Dcm9wQXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///5
`)},function(module,exports,__webpack_require__){"use strict";eval(`

class BgImage {
  constructor(img, container) {
    this.container = container;
    this.img = img;
  }

  get realWidth() {
    return this.img.width;
  }

  get realHeight() {
    return this.img.height;
  }

  get left() {
    return this.calcDimensions().left;
  }

  get top() {
    return this.calcDimensions().top;
  }

  get width() {
    return this.calcDimensions().width;
  }

  get height() {
    return this.calcDimensions().height;
  }

  get ratio() {
    return this.realHeight / this.height;
  }

  calcDimensions() {
    const bounds = this.container.getBoundingClientRect();

    // Possible resized width and height.
    const height = this.realHeight * bounds.width / this.realWidth;
    const width = this.realWidth * bounds.height / this.realHeight;

    if (height <= bounds.height) {
      return {
        width: bounds.width,
        height: height,
        top: (bounds.height - height) / 2,
        left: 0
      };
    } else {
      return {
        height: bounds.height,
        width: width,
        top: 0,
        left: (bounds.width - width) / 2
      };
    }
  }
}

module.exports = exports = BgImage;
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9qcy9pZGNyb3AvQmdJbWFnZS5qcz9iNTk3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBCZ0ltYWdlIHtcbiAgY29uc3RydWN0b3IoaW1nLCBjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgfVxuXG4gIGdldCByZWFsV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1nLndpZHRoO1xuICB9XG5cbiAgZ2V0IHJlYWxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1nLmhlaWdodDtcbiAgfVxuXG4gIGdldCBsZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmNhbGNEaW1lbnNpb25zKCkubGVmdDtcbiAgfVxuXG4gIGdldCB0b3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY0RpbWVuc2lvbnMoKS50b3A7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY0RpbWVuc2lvbnMoKS53aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY0RpbWVuc2lvbnMoKS5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhbEhlaWdodCAvIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgY2FsY0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3NzaWJsZSByZXNpemVkIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5yZWFsSGVpZ2h0ICogYm91bmRzLndpZHRoIC8gdGhpcy5yZWFsV2lkdGg7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJlYWxXaWR0aCAqIGJvdW5kcy5oZWlnaHQgLyB0aGlzLnJlYWxIZWlnaHQ7XG5cbiAgICBpZiAoaGVpZ2h0IDw9IGJvdW5kcy5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBib3VuZHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB0b3A6IChib3VuZHMuaGVpZ2h0IC0gaGVpZ2h0KSAvIDIsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogYm91bmRzLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IChib3VuZHMud2lkdGggLSB3aWR0aCkgLyAyXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBCZ0ltYWdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvanMvaWRjcm9wL0JnSW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///6
`)}]);
