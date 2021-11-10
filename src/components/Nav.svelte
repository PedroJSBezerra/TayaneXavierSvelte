<script>
  export let links = []

</script>

<nav>
  <a href="/#/"><h3>Logo</h3></a>
  <ul class="menu">
    {#each links as link}
      <li><a href="{link.url}">{link.name}</a></li>
    {/each}
  </ul>
</nav>