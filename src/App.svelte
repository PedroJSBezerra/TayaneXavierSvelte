<script>
	import Router, {location} from 'svelte-spa-router'
	import Location from './components/Location.svelte'
	import Nav from './components/Nav.svelte'
	import Home from './routes/Home.svelte'
	import Fastdelivery from './routes/Fastdelivery.svelte'
	import Contact from './routes/Contact.svelte'
	import About from './routes/About.svelte'

	const links = [
		{name: 'Home Page', url: '/#/'},
		{name: 'Pronta Entrega', url: '/#/fastdelivery'},
		{name: 'Contato', url: '/#/contact'},
		{name: 'Sobre', url: '/#/about'},
	]
	
	const routes = {
		'/': Home,
		'/fastdelivery': Fastdelivery,
		'/contact': Contact,
		'/about': About
	}
		
</script>

<Nav {links} />
<Location {location} />
<Router {routes} />