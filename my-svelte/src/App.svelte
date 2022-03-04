<div class="box"></div>

<style>
:global(body) {
    padding: 60px;
}
.box {
    width: 100px;
    height: 100px;
    background-color: tomato;
    border-radius: 10px;
    animation: zoom .4s infinite alternate
}

/* @ At-rules : css 골뱅이 규칙 
   keyframes 규칙
   zoom이라는 이름의 keyframes 내용 생성
   keyframes 내용은 css 애니메이션 속성에 사용

   keyframes 내부에 사용할 수 있는 전역화 수식어 : -global-
*/
@keyframes -global-zoom {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.5);
    }
}
</style>
