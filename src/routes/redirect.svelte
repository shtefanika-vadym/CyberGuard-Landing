<script lang="ts">
  import { onMount } from 'svelte'
  import { PATH } from '../routes/path'

  onMount(() => {
    window.location.replace(PATH.HOME)
  })
</script>
