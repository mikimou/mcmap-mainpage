<script>
	var option= 1;

	const vyber = () => {
		option 
	}

</script>

<svelte:head>
	<title>MC portal</title>
	<meta name="description" content="MC portal" />
</svelte:head>

<section>
	
	<div class="welcome">
		<h1 style="pointer-events: none; user-select: none;" class="drac-text drac-text-cyan-green drac-text-bold">Vyber server:</h1>
		<br><br>
		<div style="position: relative;">
			<select class="drac-select drac-select-white " bind:value={option} on:change={vyber}>
			  <option value={0}>1.20.1 (jun 2023)</option>
			  <option value={1}>1.20.2 (oktober 2023) [new]</option>
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
		<p style="display: inline; pointer-events: none; user-select: none;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green drac-text-bold">Ku konkrétnej verzii serveru treba<br> konkrétnu verziu klienta!</p><br><br><br>
		<p style="display: inline; pointer-events: none; user-select: none;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green">IP servera: </p>
		{#if option >= 0}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">mc.michalhicz.eu</p><br><br>
		{/if}
		<p style="display: inline; pointer-events: none; user-select: none;" class="drac-text drac-text-lg drac-line-height drac-text-cyan-green">MC verzia: </p>
		{#if option === 0}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">1.20.1</p><br><br>
		{:else if option === 1}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">1.20.2</p><br><br>
		{:else if option === 2}
			<p style="display: inline;" class="drac-text drac-text-lg drac-line-height drac-text-white">1.19.2</p><br><br>
		{/if}
		
		{#if option === 0}
			<a style="text-decoration: none; width:5em;  margin: 0.5em; color:black; " href="https://mcmap3.michalhicz.eu" class="drac-btn drac-bg-cyan-green drac-btn-sm">MAPA</a>
		{:else if option === 1}
			<a style="text-decoration: none; width:5em;  margin: 0.5em; color:black; " href="https://mcmap2.michalhicz.eu" class="drac-btn drac-bg-cyan-green drac-btn-sm">MAPA</a>
			<a style="text-decoration: none; width:5em;  margin: 0.5em; color:black; " href="https://mcprofiler.michalhicz.eu/" class="drac-btn drac-bg-cyan-green drac-btn-sm">STATS</a>
		{:else if option === 2}
			<a style="text-decoration: none; width:5em;  margin: 0.5em; color:black; " href="https://mcmap1.michalhicz.eu" class="drac-btn drac-bg-cyan-green drac-btn-sm">MAPA</a>
		{/if}
		
		
		</center>
	</div>
	
	

	
</section>

<style>
	a {
		color: black;
		text-decoration: none; 
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.3;
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
		max-width: 40em;
	}

	.welcome img {
		height: 8em;
		margin: auto;
		display: block;
		pointer-events: none;
	
	}
</style>
