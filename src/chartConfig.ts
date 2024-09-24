export const data = {
  labels: ['09:30', '09:45', '10:00', '10:15'], // Time data goes here
  datasets: [
    {
      label: 'CE Decay Rate (Strike 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      data: [0.3167, 0.35, 0.2977, 0.2267], // CE decay rate (Strike 1)
    },
    {
      label: 'PE Decay Rate (Strike 1)',
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      data: [0.1167, 0.06, -0.0767, 0.15], // PE decay rate (Strike 1)
    },
    {
      label: 'CE Decay Rate (Strike 2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      data: [0.1833, 0.25, 0.32, 0.2467], // CE decay rate (Strike 2)
    },
    {
      label: 'PE Decay Rate (Strike 2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      data: [0.06, 0.0867, 0.0467, 0.1267], // PE decay rate (Strike 2)
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'category', // Change to 'category' as you are using fixed labels
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Decay Rate',
      },
    },
  },
};
