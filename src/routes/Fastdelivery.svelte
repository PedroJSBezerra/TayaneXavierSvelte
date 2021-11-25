<script>
  import { apiData } from "../stores/notion";

  $: $apiData.map(item => {

    let {image} = item.properties
    
    if(image.files[0] != undefined){
      console.log(image)
    }
  })

</script>

<ul class="list">

  <h3 class="title list__title">Pronta entrega</h3>
  
  {#each $apiData as item}
    <li class="item">
      {#if item.properties.img_local_w600.files[0]}
        <img src="{item.properties.img_local_w600.files[0].file.url}" alt="">
      {:else}
        <h3>Sem imagem</h3>
      {/if}

      <p>Tipo: {item.properties.tipo.select.name}</p>
      <p>Aplicação: {item.properties.aplicacao.select.name}</p>
      <p>Linha: {item.properties.linha.title[0].plain_text}</p>
      <p>Nome: {item.properties.nome.rich_text[0].plain_text}</p>
      <p>Aroma: {item.properties.aroma.rich_text[0].plain_text}</p>
      <p>Preço: {item.properties.preco.number}</p>
      <p>Sexo: {item.properties.sexo.select.name}</p>
      <p>Volume: {item.properties.volume.rich_text[0].plain_text}</p>
      <p>Quantidade: {item.properties.qt.number}</p>
    </li>
  {/each}
</ul>

<style type="text/scss">
  .list {
    background: rgba(255,255,255,.9);
    border-radius: 10px 10px 0 0;
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0 16px;
    list-style: none;
    color: #333;

    li {
      background: #fff;
      padding: 10px;
      border-radius: 10px;
      margin: 0 0 10px 0px;

      img {
        max-width: 100%;
        max-height: 60vw;
        margin: 0 auto;
        display: block;
      }

      p {
        margin: 0;
      }
    }
  }
</style>
