<script>
let active = false
let color = 'tomato'
let white = 'white'

let color2 = {
    t: 'tomato',
    w: '#FFF'
}
let letterSpacing = 'letter-spacing: 5px;'
</script>

<button on:click={() => {active = !active}}>
    Toggle!
</button>

<!-- <div class={active ? 'hello' : ''}> -->
<!-- class:는 속성이 아님. 스벨트의 지시어임 -->
<!-- div 태그에 hello라는 클래스를 붙일 건데 그 기준이 active -->
<div class:hello={active}>
    Hello
</div>

<h2 style ="background-color: {color2.t}; color: {color2.w}; {letterSpacing}">
    Heropy!
</h2>


<style>
div {
    width: 120px;
    height: 200px;
    background: royalblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    transition: .4s;
}

.hello {
    width: 250px;
    background: tomato;
}
</style>
