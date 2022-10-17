$(document).ready(function(){
    $('a').addClass('filter')
    $('button').addClass('filter')
    
    $('.extended').click(function(){
        let icon = this.childNodes[1].childNodes[3].childNodes[0];

        $(this.childNodes[3]).slideToggle(100).toggleClass('hidden')
        
        $(this.childNodes[1].childNodes[1]).toggleClass('text-primary')

        if(icon.textContent==="add"){
            icon.textContent = 'remove'
        }else{
            icon.textContent = 'add'
        }
    })

    $('.btn_price').click(function(){

        $('.btn-primary--unActive').removeClass('btn-primary')
        $(this).addClass('btn-primary')


        $('.people').text(this.dataset.people)

        if(this.dataset.people !== '>25000'){
            let num = this.dataset.people;
            $('.price_basic').text(num *0.06)
            $('.price_standard').text(num *0.16)
        }else{
            $('.price_basic').text('>1500')
            $('.price_standard').text('>4000')
        }

    })

    $('.scroll_btn').click(function(){
        $('html').animate({
            scrollTop:0
        },300)
    })

})

var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
  });