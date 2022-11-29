<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { PATH } from '../routes/path'

  onMount(() => navigate(PATH.HOME))
</script>
