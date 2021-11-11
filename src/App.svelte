<script>
	import Router from 'svelte-spa-router'
	import Location from './components/Location.svelte'
	import Nav from './components/Nav.svelte'
	import Home from './routes/Home.svelte'
	import Fastdelivery from './routes/Fastdelivery.svelte'
	import Gifts from './routes/Gifts.svelte'
	import Contact from './routes/Contact.svelte'
	import About from './routes/About.svelte'
	import Login from './routes/Login.svelte'
	import Admin from './routes/Admin.svelte'

	const links = [
		{name: 'Home Page', url: '/#/'},
		{name: 'Pronta Entrega', url: '/#/fastdelivery'},
		{name: 'Lembrancinhas', url: '/#/gifts'},
		{name: 'Contato', url: '/#/contact'},
		{name: 'Sobre', url: '/#/about'},
	]
	
	const routes = {
		'/': Home,
		'/fastdelivery': Fastdelivery,
		'/gifts': Gifts,
		'/contact': Contact,
		'/about': About,
		'/login': Login,
		'/admin': Admin
	}
		
</script>

<Nav {links} />
<Router {routes} />