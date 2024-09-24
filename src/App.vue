<template>
<div>
  <Line :data="data" :options="options" />
</div>
</template>

<script lang="ts">
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';
import * as chartConfig from './chartConfig.js';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

export default {
name: 'App',
components: {
  Line,
},
data() {
  return {
    ...chartConfig, // Spread the imported config into the data object
  };
},
};
</script>
