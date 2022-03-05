<script>
import axios from 'axios'

let apikey = '9d38c929'
let title = ''
let movies = null
let error = null
let loading = false

function search() {
    loading = true;
    error = null;
    movies = null;

    const res = axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
                   .then((response) => {
                       movies = response.data.Search
                       loading = false;
                    })
                   .catch((err) => {error = err})
    
}
</script>

<h2>{title}</h2>
<input bind:value={title}/>
<button on:click={search}>검색</button>

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
