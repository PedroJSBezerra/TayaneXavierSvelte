<script>
  export let links = []
  let open = false
  const navToggle = () => {
    open = !open
  }
</script>

<header class="header">
  <a class="logo header__logo" href={links[0].url}>
    <img
      class="header__logo__img"
      src="./images/logo__white.png"
      alt="Tayane Xavier"
    />
  </a>

  <button class="burguer header__burguer" on:click={navToggle}>
    <span />
    <span />
    <span />
  </button>

  <h3 class="slogan header__slogan">Perfumaria e Cosmeticos</h3>

  <nav class="nav {open?'header__nav--open':'header__nav'}">
    <ul class="list nav__list">
      {#each links as link}
        <li class="item list__item"  on:click={navToggle}>
          <a class="link item__link" href={link.url}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style type="text/scss">
  @use "../styles/Header";
  @use "../styles/Burguer";
  @use "../styles/Nav";
</style>
