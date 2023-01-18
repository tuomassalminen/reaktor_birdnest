<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import PilotList from './components/PilotList.svelte';
	import utils from './util/utils';
	let pilots = undefined;

	const backendUri = 'http://localhost:5000/api/pilots' // add "http://localhost:5000 at the beginning when developing"

	// Poll the backend server every two seconds for new pilots
	onMount(async () => {
		const pollNewPilots = async () => {
			try {
				const response = await axios(backendUri);
				const result = await response;
				pilots = result.data;
			} catch (e) {
				console.error("Polling error", e);
			}
			setTimeout(pollNewPilots, 2000);
		}
		pollNewPilots();
	})
</script>

<main class="container">
	<h1>Birdnest drone pilot violations for the last 10 minutes</h1>
	<PilotList pilots={pilots} />
</main>

<style>
	.container {
		margin: 3rem auto;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>