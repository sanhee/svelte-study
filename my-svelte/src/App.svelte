<script>
    let active = true
    let valid = false
    let camelCase = true

    function multi() {
        return 'active multiple-class'
    }
</script>

<div class={active ? 'active' : ''}>
    3항 연산자 보간
</div>

<div class:active={active}>
    Class Directive(지시어) 바인딩
</div>

<!-- 이름과 속성이 같다면 바인딩 단축 가능 -->
<div class:active>
    Class 지시어 바인딩 단축 형태
</div>

<!-- valid는 false라 class이름 생성되지 않음 -->
<div class:active
     class:valid
     class:camelCase
     class:camel-case = {camelCase}>
    다중 Class 지시어 바인딩    
</div>

<div class={multi()}>
    함수 실행
</div>

