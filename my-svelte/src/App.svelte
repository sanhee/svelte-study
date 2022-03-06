<script>
import axios from 'axios'

let apikey = '9d38c929'
let title = ''
let promise = Promise.resolve([])

function search() {
    return new Promise((resolve, reject) => {
        const res = axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
            .then((response) => resolve(response.data.Search))
            .catch((err) => {
                reject(err)
            })
    })
}
</script>

<h2>{title}</h2>
<input bind:value={title}/>
<button on:click={() => {
    promise = search()
    }}>검색</button>

{#await promise}
<p style="color:red">loading....</p>
{:then movies}
<ul>
    {#each movies as movie}
    <li>
        {movie.Title}
    </li>
    {/each}
</ul>
{:catch error}
<p style="color:green">{error.message}</p>
{/await}

<!--
{#if loading}
<p style="color:red">loading....</p>
{:else if movies}
<ul>
    {#each movies as movie}
    <li>
        {movie.Title}
    </li>
    {/each}
</ul>
{:else if error}
<p style="color:green">{error.message}</p>
{:else}
<p>검색결과 없음.</p>
{/if}
-->
