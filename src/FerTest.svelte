<script>

	import Fan from './Fan.svelte';
	let fans = [];
	let initialId = 1;
	let newFanName='';

	function addFan(){
		if(!!newFanName.trim()){
			console.log('hola');
			let newFan = {name:newFanName, id:initialId + 1};
			initialId +=1;
			fans = [...fans, newFan];
			newFanName = '';
		}
	}

	function abandonaFila(id){
		fans = fans.filter((fan)=> fan.id != id);
	}
</script>
<h1>Entrada al Recital</h1>
<h2>Fila</h2>
{#each fans as fan (fan.id)}
	<Fan name={fan.name} /><button on:click={abandonaFila(fan.id)}>Abandona</button>
	<br/>
{/each}

<br/>	
<br/>	
<input bind:value={newFanName} /><button on:click={addFan}>Add fan</button>