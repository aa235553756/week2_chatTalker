
$(document).ready(function(){
    $('.extended').click(function(){
        $(this.childNodes[3]).slideToggle(100).toggleClass('hidden')
    })
})
