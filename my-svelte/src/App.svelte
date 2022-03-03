<script>
    let count = 0
    // let double = 0

    // $: {
    //     double = count * 2
    // }

    $: double = count * 2

    function assign(){
        count += 1
        console.log(double)
    }
</script>

<button on:click={assign}>Assign!</button>
<h2>{count}</h2>
<h2>{double}</h2>