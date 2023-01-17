<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import PilotList from './components/PilotList.svelte';
	const backedUri = 'http://localhost:3001/pilots';
	let pilots = undefined;

	onMount(async () => {
		const response = await axios(backedUri);
		const result = await response;
		pilots = result.data;
		console.log(pilots)

	})
</script>

<main class="container">
	<h1>Birdnest drone pilot violations for the last 10 minutes</h1>
	<PilotList pilots={pilots} />
</main>

<style>
	.container {
		margin: 10rem auto;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>