<script>
    let innerHTML = ''
    let textContent = 'Hello world!'
</script>

<!-- innerHTML, textContent 는 스벨트(contenteditable)에서 제공하는 속성-->
<div contenteditable
    bind:innerHTML
    bind:textContent>
</div>

<div>{innerHTML}</div>  <!-- html 해석 x -->
<div>{textContent}</div>
<div>{@html innerHTML}</div> <!-- html 해석 o -->

<style>
    div{
        border: 1px solid red;
        margin-bottom: 10px;
    }
</style>