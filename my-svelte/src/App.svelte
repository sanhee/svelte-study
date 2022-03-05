<script>
let isError = false
//let promise = new Promise(resolve => resolve('Hmm..'))
let promise = Promise.resolve('Hmm...')

function fetchName() {
    return new Promise((resolve, reject) => {
        if ((isError)) {
            reject(new Error('Sorry....'))
        }
        setTimeout(() => {
            resolve('Noeul')
        }, 2000);
    })
}
</script>

<button on:click={() => {
    promise = fetchName()
}}>
    Fetch name!
</button>

{#await promise}
    <!-- 대기(pending...) -->
    <p>Loading...</p>
{:then name}
    <!-- 이행(fullfiled) -->
    <h1>{name}</h1>
{:catch error}
    <!-- 거부(rejected) -->
    <h1>{error.message}</h1>
{/await}