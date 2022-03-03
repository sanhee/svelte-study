<script>
    let name  = 'Heropy'
    let fruits = ['Apple', 'Banana', 'Cherry']
    let user = {
        name: 'Heropy',
        depth: {
            a: 'b'
        },
        numbers: [1, 2]
    }
    let numbers = user.numbers

    // 할당 연산자를 사용해야지만 반응성을 얻을 수 있다.
    function assign(){
        name = 'Neo'
        fruits = [...fruits, 'Orange']
        user.name = 'Neo'
        user.depth.a = 'c'
        // await tick()
        // 메서드가 끝나면 갱신되는데, 그때 푸쉬된 것도 반영돼서 그럼.
        // 위 user.name, user.depth.a 가 없다면 반응성을 못얻어서 반영안됨.
        user.numbers.push(3)
        numbers = numbers
    }
</script>

<button on:click ={assign}>Assign!</button>
<h2>name: {name}</h2>
<h2>fruits: {fruits}</h2>
<h2>user name: {user.name}</h2>
<h2>user depth a: {user.depth.a}</h2>
<h2>user numbers: {user.numbers}</h2>
<h2>numbers: {numbers}</h2>