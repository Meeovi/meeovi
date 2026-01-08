<template>
  <v-card class="calculator-card" elevation="3">
    <v-card-title>Graphing Calculator</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4">
          <v-card variant="outlined" class="pa-3">
            <v-card-title>Functions</v-card-title>
            
            <div v-for="(func, index) in functions" :key="index" class="mb-2">
              <v-row dense>
                <v-col cols="2" class="d-flex align-center">
                  <v-checkbox
                    v-model="func.visible"
                    :color="func.color"
                    hide-details
                    density="compact"
                    @change="drawGraph"
                  ></v-checkbox>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="func.expression"
                    :label="`f${index+1}(x) =`"
                    variant="outlined"
                    density="compact"
                    hide-details
                    @update:model-value="drawGraph"
                  ></v-text-field>
                </v-col>
                <v-col cols="2" class="d-flex align-center">
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        icon
                        size="small"
                        :color="func.color"
                        v-bind="props"
                      >
                        <v-icon>mdi-circle</v-icon>
                      </v-btn>
                    </template>
                    <v-card min-width="200">
                      <v-card-text>
                        <v-color-picker
                          v-model="func.color"
                          hide-inputs
                          @update:model-value="drawGraph"
                        ></v-color-picker>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </v-col>
              </v-row>
            </div>
            
            <v-btn
              block
              color="primary"
              variant="outlined"
              class="mt-2"
              @click="addFunction"
              :disabled="functions.length >= 5"
              tabindex="0"
              @keyup.enter="addFunction"
              @keyup.space="addFunction"
            >
              Add Function
            </v-btn>
            
            <v-divider class="my-4"></v-divider>
            
            <v-card-title>Graph Settings</v-card-title>
            
            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="xMin"
                  label="X Min"
                  type="number"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="mb-2"
                  @update:model-value="drawGraph"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="xMax"
                  label="X Max"
                  type="number"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="mb-2"
                  @update:model-value="drawGraph"
                ></v-text-field>
              </v-col>
            </v-row>
            
            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="yMin"
                  label="Y Min"
                  type="number"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="mb-2"
                  @update:model-value="drawGraph"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="yMax"
                  label="Y Max"
                  type="number"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="mb-2"
                  @update:model-value="drawGraph"
                ></v-text-field>
              </v-col>
            </v-row>
            
            <v-btn block color="primary" class="mt-2" @click="resetView" tabindex="0" @keyup.enter="resetView" @keyup.space="resetView">Reset View</v-btn>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="8">
          <v-card variant="outlined" class="graph-container">
            <canvas ref="graphCanvas" class="graph-canvas"></canvas>
          </v-card>
          
          <v-card variant="outlined" class="mt-3 pa-3">
            <div class="text-subtitle-1">Examples:</div>
            <div class="text-body-2">
              <ul>
                <li><code>x^2</code> - Parabola</li>
                <li><code>sin(x)</code> - Sine wave</li>
                <li><code>cos(x)</code> - Cosine wave</li>
                <li><code>tan(x)</code> - Tangent</li>
                <li><code>x^3-2*x^2+1</code> - Cubic function</li>
                <li><code>sqrt(x)</code> - Square root</li>
                <li><code>log(x)</code> - Natural logarithm</li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      functions: [
        { expression: 'x^2', color: '#FF0000', visible: true },
        { expression: 'sin(x)', color: '#0000FF', visible: true }
      ],
      xMin: -10,
      xMax: 10,
      yMin: -10,
      yMax: 10,
      canvas: null,
      ctx: null,
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.canvas = this.$refs.graphCanvas;
    this.ctx = this.canvas.getContext('2d');
    
    // Set canvas size
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);
    
    // Initial draw
    this.drawGraph();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvas);
  },
  methods: {
    resizeCanvas() {
      const container = this.canvas.parentElement;
      this.width = container.clientWidth;
      this.height = container.clientHeight;
      
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      
      this.drawGraph();
    },
    
    drawGraph() {
      if (!this.ctx) return;
      
      // Clear canvas
      this.ctx.clearRect(0, 0, this.width, this.height);
      
      // Draw grid
      this.drawGrid();
      
      // Draw axes
      this.drawAxes();
      
      // Draw functions
      this.functions.forEach(func => {
        if (func.visible && func.expression) {
          this.drawFunction(func.expression, func.color);
        }
      });
      
      this.saveToHistory();
    },
    
    saveToHistory() {
      const visibleFuncs = this.functions.filter(f => f.visible && f.expression);
      if (!visibleFuncs.length) return;
      const summary = visibleFuncs.map((f, i) => `f${i+1}(x) = ${f.expression} [${f.color}]`).join('; ');
      const entry = {
        type: 'Graphing',
        summary: `${summary} | X: [${this.xMin}, ${this.xMax}] Y: [${this.yMin}, ${this.yMax}]`,
        timestamp: new Date().toLocaleString()
      };
      let history = [];
      try {
        history = JSON.parse(localStorage.getItem('meeovi-math-history')) || [];
      } catch {}
      history.unshift(entry);
      localStorage.setItem('meeovi-math-history', JSON.stringify(history.slice(0, 100)));
    },
    
    drawGrid() {
      const { ctx, width, height } = this;
      const xRange = this.xMax - this.xMin;
      const yRange = this.yMax - this.yMin;
      
      // Draw grid lines
      ctx.strokeStyle = '#EEEEEE';
      ctx.lineWidth = 1;
      
      // Vertical grid lines (x-axis)
      const xStep = Math.ceil(xRange / 20);
      for (let x = Math.ceil(this.xMin / xStep) * xStep; x <= this.xMax; x += xStep) {
        const canvasX = this.xToCanvas(x);
        ctx.beginPath();
        ctx.moveTo(canvasX, 0);
        ctx.lineTo(canvasX, height);
        ctx.stroke();
        
        // Draw x-axis labels
        ctx.fillStyle = '#666666';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(x.toString(), canvasX, height - 5);
      }
      
      // Horizontal grid lines (y-axis)
      const yStep = Math.ceil(yRange / 20);
      for (let y = Math.ceil(this.yMin / yStep) * yStep; y <= this.yMax; y += yStep) {
        const canvasY = this.yToCanvas(y);
        ctx.beginPath();
        ctx.moveTo(0, canvasY);
        ctx.lineTo(width, canvasY);
        ctx.stroke();
        
        // Draw y-axis labels
        ctx.fillStyle = '#666666';
        ctx.font = '10px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(y.toString(), 15, canvasY - 5);
      }
    },
    
    drawAxes() {
      const { ctx, width, height } = this;
      
      // Draw x-axis
      const yZero = this.yToCanvas(0);
      if (yZero >= 0 && yZero <= height) {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, yZero);
        ctx.lineTo(width, yZero);
        ctx.stroke();
      }
      
      // Draw y-axis
      const xZero = this.xToCanvas(0);
      if (xZero >= 0 && xZero <= width) {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(xZero, 0);
        ctx.lineTo(xZero, height);
        ctx.stroke();
      }
    },
    
    drawFunction(expression, color) {
      const { ctx, width } = this;
      
      try {
        // Compile the expression
        const fn = this.compileExpression(expression);
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        let lastY = null;
        const step = (this.xMax - this.xMin) / width;
        
        for (let i = 0; i <= width; i++) {
          const x = this.xMin + i * step;
          let y;
          
          try {
            y = fn(x);
          } catch (e) {
            // Skip invalid points
            lastY = null;
            continue;
          }
          
          // Skip NaN, Infinity, and very large values
          if (isNaN(y) || !isFinite(y) || Math.abs(y) > 1e10) {
            lastY = null;
            continue;
          }
          
          const canvasX = i;
          const canvasY = this.yToCanvas(y);
          
          if (lastY === null || Math.abs(canvasY - lastY) > height) {
            ctx.moveTo(canvasX, canvasY);
          } else {
            ctx.lineTo(canvasX, canvasY);
          }
          
          lastY = canvasY;
        }
        
        ctx.stroke();
      } catch (e) {
        console.error('Error drawing function:', e);
      }
    },
    
    compileExpression(expression) {
      // Replace common math functions and operators
      const jsExpression = expression
        .replace(/\^/g, '**')                // Replace ^ with **
        .replace(/sin\(/g, 'Math.sin(')      // Replace sin with Math.sin
        .replace(/cos\(/g, 'Math.cos(')      // Replace cos with Math.cos
        .replace(/tan\(/g, 'Math.tan(')      // Replace tan with Math.tan
        .replace(/sqrt\(/g, 'Math.sqrt(')    // Replace sqrt with Math.sqrt
        .replace(/log\(/g, 'Math.log(')      // Replace log with Math.log
        .replace(/exp\(/g, 'Math.exp(')      // Replace exp with Math.exp
        .replace(/abs\(/g, 'Math.abs(')      // Replace abs with Math.abs
        .replace(/pi/g, 'Math.PI');          // Replace pi with Math.PI
      
      // Create a function from the expression
      return new Function('x', `return ${jsExpression};`);
    },
    
    xToCanvas(x) {
      return (x - this.xMin) / (this.xMax - this.xMin) * this.width;
    },
    
    yToCanvas(y) {
      return this.height - (y - this.yMin) / (this.yMax - this.yMin) * this.height;
    },
    
    addFunction() {
      if (this.functions.length < 5) {
        const colors = ['#FF0000', '#0000FF', '#00FF00', '#FF00FF', '#FFA500'];
        const usedColors = this.functions.map(f => f.color);
        const availableColors = colors.filter(c => !usedColors.includes(c));
        
        this.functions.push({
          expression: '',
          color: availableColors[0] || colors[this.functions.length % colors.length],
          visible: true
        });
      }
    },
    
    resetView() {
      this.xMin = -10;
      this.xMax = 10;
      this.yMin = -10;
      this.yMax = 10;
      this.drawGraph();
    }
  }
}
</script>

<style scoped>
.calculator-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-card-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.graph-container {
  width: 100%;
  height: 400px;
  position: relative;
}

.graph-canvas {
  width: 100%;
  height: 100%;
}

@media (max-width: 959px) {
  .graph-container {
    height: 300px;
  }
}
</style>