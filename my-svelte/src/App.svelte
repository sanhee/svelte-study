<script>
import { tick } from "svelte";


    let isShow = false
    let inputEl

    async function toggle() {
        isShow = !isShow
        await tick()
        // const inputEl = document.querySelector('input')
        inputEl && inputEl.focus()
    }
</script>

<!-- 
    this: input element를 말함 
    inputEl: input요소와 바인딩할 데이터의 이름
-->
<button on:click = {toggle}>Edit!</button>
{#if isShow}
    <input bind:this={inputEl} />
{/if}