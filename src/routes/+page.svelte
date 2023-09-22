<script>
    export let data
    const { orders } = data
</script>

<ul>
    {#each orders as order}
        <li>Order op {order.date}</li>
    {/each}
</ul>