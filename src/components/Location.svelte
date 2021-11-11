<script>
	import {location} from 'svelte-spa-router'
  export let color = '#333'
</script>
<small style="color: {color};">{$location}</small>