<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useData } from "vitepress";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const { isDark } = useData();
const canvasRef = ref(null);
const mean = ref(0);
const stdDev = ref(1);
let chartInstance = null;

// 🎨 Definir colores según el modo (light/dark)
const chartColors = computed(() => ({
  line: isDark.value ? "cyan" : "blue",
  background: isDark.value ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 0, 255, 0.2)",
  text: isDark.value ? "white" : "black",
  grid: isDark.value ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
  inputBorder: isDark.value ? "cyan" : "blue" // 🟢 Bordes de input dinámicos
}));

const generateNormalData = (mean, stdDev) => {
  const data = [];
  for (let x = mean - 4 * stdDev; x <= mean + 4 * stdDev; x += 0.1) {
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
    data.push({ x, y });
  }
  return data;
};

const renderChart = () => {
  if (chartInstance) chartInstance.destroy();
  const ctx = canvasRef.value.getContext("2d");
  const normalData = generateNormalData(mean.value, stdDev.value);

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: normalData.map((d) => d.x.toFixed(2)),
      datasets: [
        {
          label: "Distribución Normal",
          data: normalData.map((d) => d.y),
          borderColor: chartColors.value.line,
          borderWidth: 2,
          fill: true,
          backgroundColor: chartColors.value.background,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: "X", color: chartColors.value.text },
          ticks: { color: chartColors.value.text },
          grid: { color: chartColors.value.grid }
        },
        y: {
          title: { display: true, text: "Densidad", color: chartColors.value.text },
          ticks: { color: chartColors.value.text },
          grid: { color: chartColors.value.grid }
        }
      },
      plugins: {
        legend: { labels: { color: chartColors.value.text } }
      }
    }
  });
};

// 🔄 Redibujar cuando cambian los valores o el tema
onMounted(renderChart);
watch([mean, stdDev, isDark], renderChart);
</script>

<template>
  <div>
    <div class="controls">
      <label>
        Media (µ):
        <input v-model="mean" type="number" step="0.1" :style="{ borderColor: chartColors.inputBorder }" />
      </label>
      <label>
        Desviación estándar (σ):
        <input v-model="stdDev" type="number" step="0.1" min="0.1" :style="{ borderColor: chartColors.inputBorder }" />
      </label>
    </div>
    <div class="chart-container">
      <canvas ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.controls label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.controls input {
  width: 90px;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px; /* 🔵 Bordes redondeados */
  border: 2px solid;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  text-align: center;
  outline: none;
  transition: border 0.3s ease-in-out;
}
.controls input:focus {
  border-width: 3px; /* ✨ Resalta más al enfocar */
}
.chart-container {
  width: 100%;
  height: 400px;
  background: transparent;
}
</style>
