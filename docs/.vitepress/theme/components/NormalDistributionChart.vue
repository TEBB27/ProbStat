<script setup>
import { ref, watch, onMounted } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const canvasRef = ref(null);
const mean = ref(0);
const stdDev = ref(1);
let chartInstance = null;

const generateNormalData = (mean, stdDev) => {
  const data = [];
  for (let x = mean - 4 * stdDev; x <= mean + 4 * stdDev; x += 0.1) {
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
    data.push({ x, y });
  }
  return data;
};

const renderChart = () => {
  if (chartInstance) chartInstance.destroy(); // Eliminar gráfico anterior
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
          borderColor: "cyan", // 💠 Color brillante
          borderWidth: 2,
          fill: true,
          backgroundColor: "rgba(0, 255, 255, 0.2)" // 🔵 Relleno semi-transparente
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: "X", color: "white" }, // 🏁 Texto en blanco
          ticks: { color: "white" }, // 🏷 Números en blanco
          grid: { color: "rgba(255, 255, 255, 0.2)" } // 📏 Grid tenue
        },
        y: {
          title: { display: true, text: "Densidad", color: "white" },
          ticks: { color: "white" },
          grid: { color: "rgba(255, 255, 255, 0.2)" }
        }
      },
      plugins: {
        legend: { labels: { color: "white" } } // 🎨 Texto de la leyenda en blanco
      }
    }
  });
};

onMounted(renderChart);
watch([mean, stdDev], renderChart); // Redibujar cuando cambian los valores
</script>

<template>
  <div>
    <div class="controls">
      <label>
        Media (µ):
        <input v-model="mean" type="number" step="0.1" />
      </label>
      <label>
        Desviación estándar (σ):
        <input v-model="stdDev" type="number" step="0.1" min="0.1" />
      </label>
    </div>
    <div class="chart-container">
      <canvas ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<style>
.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.controls label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: white; /* 🎨 Texto blanco para fondo oscuro */
}
.controls input {
  width: 80px;
  padding: 5px;
  font-size: 16px;
  background: black; /* 🖤 Fondo oscuro */
  color: white; /* 🎨 Texto blanco */
  border: 1px solid cyan; /* 💠 Resaltado */
}
.chart-container {
  width: 100%;
  height: 400px;
  background: transparent;
}
</style>
