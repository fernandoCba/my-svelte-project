<script>
    export let name;
    const createTime = new Date();
</script>

<b>{name}</b> <span>Llego a la fila a las {createTime.getHours()}:{createTime.getMinutes()}:{createTime.getSeconds()}  </span>