<script>
let isError = true

function a() {
    // 대기(pending): '이행'하거나 '거부'되지 않은 초기 상태.
    return new Promise((resolove, reject) => {
        if (isError) {
            // 거부(rejected): 연산이 실패함.
            reject(new Error('Sorry...'))
            return
        }
        setTimeout(() => {
            console.log('a')
            // 이행(fullfilled): 연산이 성공적으로 완료됨.
            resolove('Noeul')
        }, 1000);
    })
}

a()
    // 이행(fullfilled): 연산이 성공적으로 완료됨.
    .then((result) => {
        console.log(result) // Noeul
        console.log('b')
    })
    // 거부(rejected): 연산이 실패함.
    .catch((err) => {
        console.log(err.message)
    })
    .finally(() => {
        console.log("Done!")
    })

async function asyncFunc() {
    try {
        let result = await a()
        console.log(result)
        console.log('b')
    } catch (err) {
        console.log(err.message)
    } finally {
        console.log("Done!")
    }
}

asyncFunc()
</script>
