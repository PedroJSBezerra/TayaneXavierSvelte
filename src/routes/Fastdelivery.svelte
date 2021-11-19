<script>
	import {getDatabase} from '../notion'
  let data = []

  async function getList(){
    let list = await getDatabase()
    data = list
  }

</script>
<h3>Fast Delivery page</h3>
<button on:click="{()=> getList()}">Obter Lista</button>

{#each data as item}

  <li>{item}hahah</li>

{/each}