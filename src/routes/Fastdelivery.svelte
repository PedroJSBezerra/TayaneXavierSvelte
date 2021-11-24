<script>
  import { apiData } from "../stores/notion";

</script>

<h3>Fast Delivery page</h3>
<ul class="list">
  {#each $apiData as item}
    <li class="item">
      <p>{item.linha}</p>
      <p>{item.nome}</p>
      <p>{item.preco}</p>
      <p>{item.aplicacao}</p>
    </li>
  {/each}
</ul>

<style type="text/scss">
</style>
