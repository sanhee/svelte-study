<script>
    import { onMount, onDestroy } from 'svelte'

    onMount(() => {
        console.log('Mounted! 컴포넌트가 화면에 연결되면~!')
        // const h1 = document.querySelector('h1')
        // console.log(h1.innerText)
        return () => {
            console.log('Destroy in mount')
        }
    })

    onDestroy(() =>{
        console.log('Before destroy~ 컴포넌트가 화면에서 사라지기 직전에 처리할 로직 작성')
        // const h1 = document.querySelector('h1')
        // console.log(h1.innerText)
    })
</script>

<h1>Something</h1>