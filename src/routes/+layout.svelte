<script>
    import Header from './Header.svelte';
	import './styles.css';
	import 'dracula-ui/styles/dracula-ui.css'

	let teraz = new Date(), month, day, year;
	year = teraz.getFullYear();

</script>

<div class="app">
	<Header/>
	<main>
		<slot />
	</main>

	<footer>
		<p class="drac-text drac-text-white">{year} mikimou</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #111217!important;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
