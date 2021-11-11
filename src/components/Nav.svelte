<script>
  export let links = []
  let open = false
  const menuToggle = () => {
    open = !open
  }
</script>

<nav>
  <a href="{links[0].url}">
    <img src="./images/logo.png" alt="">
  </a>
  <button  on:click="{menuToggle}"><span></span></button>
  <ul on:click="{menuToggle}" class="{open?'menu--open':'menu'}">
    {#each links as link}
      <li>
        <a href="{link.url}"><h4>{link.name}</h4></a>
      </li>
    {/each}
  </ul>
</nav>

<style type="text/scss">
  $nav-height: 70px;
  
  :global(body) {
    padding-top: $nav-height;
  }
  
  nav {
    background: #fff;
    height: 70px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;

    > a {
      flex: 1;
      margin: 0 80px 0 1rem;
    }
    
    @import '../styles/components/burguer.scss';

    .menu {
      bottom: 0;
      background: #fff;
      display: flex;
      flex-direction: column;
      left: -70%;
      position: fixed;
      top: 0;
      transition: left .3s ease;
      width: 70%;
      overflow: hidden;

      &--open {
        @extend .menu;
        left: 0;

        &:after{
          content: "";
          position: fixed;
          top: 0;
          bottom: 0;
          width: 100%;
          right: 0;
          z-index: -1;
          opacity: 0;
        }
      }

      li {
        box-shadow: 0px 1px 1px 0px #ccc;

        &:hover {
          background: #ec91cd;
        }

        a {
          display: block;
          padding: 1rem;
          color: #333;
        }
      }
    }
  }
</style>