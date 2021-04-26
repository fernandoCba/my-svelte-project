import FerTest from './FerTest.svelte';

const app = new FerTest({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;