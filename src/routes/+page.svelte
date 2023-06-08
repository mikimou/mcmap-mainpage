<script>
	import Counter from './Counter.svelte';
	import logo from '$lib/images/airisp.png';
	import { redirect } from '@sveltejs/kit';

	async function redirectt() {
		window.location.assign("/api");
	}

	let ip="";
	let mcver="";
	let mapa="";
	let prikaz="";

	var option= 0;

	const vyber = () => {
		option 
	}

</script>

<svelte:head>
	<title>MC portal</title>
	<meta name="description" content="Sieťové vzdelanie" />
</svelte:head>

<section>
	
	<div class="welcome">
		<!-- <picture>
			<img src={logo} alt="" />
		</picture> -->
		<h1 class="drac-text drac-text-cyan-green drac-text-bold">Vyber server:</h1>
		<br><br>
		<div style="position: relative">
			<select class="drac-select drac-select-white" bind:value={option} on:change={vyber}>
			  <option value={0} >1.20 (jun 2023)</option>
			  <option value={1}>1.19.4 (marec asi 2023)</option>
			  <option value={2}>1.19.2 (september 2022)</option>
			</select>
			<div class="drac-select-arrow drac-text-white">
			  <svg
				viewBox="0 0 24 24"
				focusable="false"
				role="presentation"
				aria-hidden="true"
			  >
				<path
				  fill="currentColor"
				  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
				></path>
			  </svg>
			</div>
		</div>
		<div style="height: 6em"></div>
		<center>
		<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green drac-text-bold">Pripoj sa na server a zadaj prikaz nizsie!</p><br><br><br>
		<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green">IP servera: </p>
		{#if option >= 0}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">mc.michalhicz.eu</p><br><br>
		{/if}
		<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green">MC verzia: </p>
		{#if option === 0}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">1.20</p><br><br>
		{:else if option === 1}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">1.19.4</p><br><br>
		{:else if option === 2}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">1.19.2</p><br><br>
		{/if}
		<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green">Mapa: </p>
		{#if option === 0}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">ziadna</p><br><br>
		{:else if option === 1}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white"><a href="https://mcmap2.michalhicz.eu/">mcmap2.michalhicz.eu</a></p><br><br>
		{:else if option === 2}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white"><a href="https://mcmap1.michalhicz.eu/">mcmap1.michalhicz.eu</a></p><br><br>
		{/if}
		<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green">Prikaz: </p>
		<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">/server</p>
		{#if option === 0}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">jun</p><br><br>
		{:else if option === 1}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">djnacnuty</p><br><br>
		{:else if option === 2}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">old</p><br><br>
		{/if}
		
		
		</center>
	</div>
	
	

	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 4rem;
	}

	@media only screen and (max-width: 450px) {
		h1 {
			font-size: 3.5rem;
		}
	}

	.welcome {
		display: block;
		position: relative;
		padding: 0 0 0 0;
		align-items: center;
	}

	.welcome img {
		height: 8em;
		margin: auto;
		display: block;
		pointer-events: none;
	
	}
</style>
