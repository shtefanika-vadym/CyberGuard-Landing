<script>
  import Chart from 'svelte-frappe-charts'

  let data = {
    lineOptions: {
      regionFill: 1, // default: 0
    },
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        values: [10, 12, 3, 9, 8, 15, 9],
      },
    ],
  }
  let colors = ['#8645FF', '#ffa3ef', 'light-blue']
</script>

<Chart {data} type="line" height="170" {colors} />
