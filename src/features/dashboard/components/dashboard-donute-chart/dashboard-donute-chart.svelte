<script>
  import { Doughnut } from 'svelte-chartjs'

  export let analyses

  export const data = {
    labels: ['Real', 'Fake'],
    datasets: [
      {
        data: [analyses?.fakeNews || 10, analyses?.realNews || 20],
        backgroundColor: ['#3FD2D7', '#636366'],
        hoverBackgroundColor: ['#179296', '#545454'],
      },
    ],
  }

  console.log(analyses)

  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, ArcElement, CategoryScale)
</script>

<Doughnut {data} options={{ responsive: true }} />
