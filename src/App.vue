<template>
  <div>
    <h2>A Decay Rates</h2>
    <StockChart :chartData="stockAData" :chartOptions="chartOptions" />

    <h2>B Decay Rates</h2>
    <StockChart :chartData="stockBData" :chartOptions="chartOptions" />
  </div>
</template>

<script lang="ts">
import StockChart from './StockChart.vue'; // Import the StockChart component
import { reactive } from 'vue';

export default {
  name: 'App',
  components: {
    StockChart,
  },
  data() {
    return {
      stockAData: {
        labels: ['09:30', '09:45', '10:00', '10:15'],
        datasets: [
          {
            label: 'CE Decay Rate',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [0.3167, 0.35, 0.2977, 0.2267],
          },
          {
            label: 'PE Decay Rate',
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            data: [0.1167, 0.06, -0.0767, 0.15],
          },
        ],
      },
      stockBData: {
        labels: ['09:30', '09:45', '10:00', '10:15'],
        datasets: [
          {
            label: 'CE Decay Rate',
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            data: [0.1833, 0.25, 0.32, 0.2467],
          },
          {
            label: 'PE Decay Rate',
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            data: [0.06, 0.0867, 0.0467, 0.1267],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category', // X-axis will show time
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Decay Rate',
            },
          },
        },
      },
    };
  },
};
</script>
