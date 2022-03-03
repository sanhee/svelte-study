import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'
import { writable } from 'svelte/store'

export function lifecycle() {
    onMount(() => {
        console.log('Mounted?')
    })
    onDestroy(()=>{
        console.log('Before destory!')
    })
    beforeUpdate(()=>{
        console.log('Before update!')
    })
    afterUpdate(()=>{
        console.log('After update!')
    })
}

export function delayRender(delay = 3000) { // ms
    let render = writable(false)
    onMount(() => {
        setTimeout(() => {
           // $render = true; -- svelte 확장자에서만 사용가능
           console.log(render) // set, update, subscribe
           render.set(true)
        }, delay)
    })
    return render
}