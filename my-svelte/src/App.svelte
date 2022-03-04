<script>
    
    function a() {
        return new Promise((resolove) =>{
            console.log('a')
            resolove()
        })
    }
    function b() {
        return new Promise((resolove) =>{
            console.log('b')
            resolove()
        })
    }
    function c() {
        return new Promise((resolove) =>{
            console.log('c')
            resolove()
        })
    }
    function d() {
        return new Promise((resolove) =>{
            console.log('d')
            resolove()
        })
    }

    // a()
    //     .then(()=>b())
    //     .then(()=>c())
    //     .then(()=>d())

 async function asyncFn(){
    await a()
    await b()
    await c()
    await d()
 }
 
 asyncFn()

</script>