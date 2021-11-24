<script>
	import Router from 'svelte-spa-router'
	import Header from './components/Header.svelte'
	import Home from './routes/Home.svelte'
	import Fastdelivery from './routes/Fastdelivery.svelte'
	import Contact from './routes/Contact.svelte'

	const links = [
		{name: 'Home Page', url: '/#/'},
		{name: 'Pronta Entrega', url: '/#/fastdelivery'},
		{name: 'Contato', url: '/#/contact'},
	]
	
	const routes = {
		'/': Home,
		'/fastdelivery': Fastdelivery,
		'/contact': Contact,
	}
		
</script>

<div class="app">
	<Header {links} />
	<Router {routes} />
</div>

<style type="text/scss">
	.app{
		color: white;
	}
</style>