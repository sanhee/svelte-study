
<script>
    let objects = [
        {id: 1, name: "사과"},
        {id: 2, name: "사과"},
        {id: 3, name: "바나나"},
        {id: 4, name: "오렌지"}
    ]
</script>

<button on:click = {() => {objects = objects.slice(1)}}> 삭제</button>


<ul>
    {#each objects as fruit (fruit.id)}
        <li>{fruit.name}</li>
    {/each}
</ul>