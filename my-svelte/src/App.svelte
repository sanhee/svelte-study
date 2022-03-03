<script>
   import { tick } from 'svelte'

   let name = 'world' 
   
   // tick()은 promise를 반환하는 비동기 함수
   async function handler() {
       name = 'Heropy' // 반응성이 있어서, 변화가 생기면 바로 화면이 갱신될 것 같지만, 스벨트는 로직 다 끝나고 화면 갱신됨.
       await tick(); // 데이터가 갱신되고, 화면이 갱신될때까지 반응성을 기다려줄 수 있음. await가 기다리는 것 
       const h1 = document.querySelector('h1')
       console.log(h1.innerText)
   }
</script>

<h1 on:click={handler}>Hello {name}!</h1>