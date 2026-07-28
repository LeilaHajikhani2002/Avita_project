let customers = [
    {
        user_name : 'ایمان محمدی',
        user_job : 'مدیرعامل مپنا',
        user_comment : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و',
        user_image : '../images/customer_1.jpg'
    },
    {
        user_name : 'زهرا جوکار',
        user_job : 'موسس تخفیفان',
        user_comment : 'متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرهامتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و',
        user_image : '../images/customer_2.jpg'
    },
    {
        user_name : 'حسین محمدی',
        user_job : 'متخصص SEO',
        user_comment : ' ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و',
        user_image : '../images/customer_3.jpg'
    },
    {
        user_name : 'مینا رضایی',
        user_job : 'متخصص دیتابیس',
        user_comment : ' ابزارهای کاربردی می باشد، کتابهای زیادی در ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و',
        user_image : '../images/customer_4.jpg'
    }
];


function showMenu(){
    document.querySelector('#top-navigation ul').classList.toggle('show')

    document.querySelector('#open-close-menu i').classList.toggle('fa-bars')
}

const menuToggle = document.getElementById('menu-toggle')
const closeToggle=document.getElementById('close-toggle')
const fullscreenMenu=document.getElementById('fullscreen-menu')



menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    fullscreenMenu.classList.add('active');
});

closeToggle.addEventListener('click', function (e) {
    e.preventDefault();
    fullscreenMenu.classList.remove('active');
})



$(function (){
    $(".count").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text(),
                },
                {
                    duration: 5000,
                    easing: "swing",
                    step: function (now) {
                        now = Number(Math.ceil(now)).toLocaleString('en');
                        $(this).text(now);
                    },
                }
            );
    });

    let currentIndex = 0;

    $('#button_wrapper .fa-solid').click(function () {
        if ( $(this).is('.fa-angle-right') ){
            currentIndex ++;
            if (currentIndex > customers.length-1){
                currentIndex = 0
            }
        }else{
            currentIndex--;
            if (currentIndex< 0){
                currentIndex = customers.length - 1
            }
        }
        changePerson(currentIndex)
    })

    setInterval(function () {
        currentIndex ++;
        if (currentIndex > customers.length-1){
            currentIndex = 0
        }
        changePerson(currentIndex)
    },3000)


    function changePerson(index) {
        let person  = customers[index];

        $('#user_name').text(person.user_name)
        $('#user_job').text(person.user_job)
        $('#user_comment').text(person.user_comment)
        $('#user_image').attr('src' , person.user_image);

    }

    $('#filters a').click(function (){

        let className = $(this).attr('class');

        $('a.active').removeClass('active');
        $(this).addClass('active');

        if (className==='all'){
            $('.sample').fadeIn(200)
        }else{
            $('.sample').hide().filter('.'+className).fadeIn(200)
        }
        return false;
    });

    $('.bxslider').bxSlider({
        mode : 'horizontal',
        speed : 400,
        hideControlOnEnd : true,
        nextText: '<i class="fa-solid fa-angle-right"></i>',
        prevText: '<i class="fa-solid fa-angle-left"></i>',
        nextSelector : $('#nextSlide'),
        prevSelector : $('#prevSlide'),
        autoplay : true,
        autoplaySpeed : 1000
    });

    $('#team_wrapper').slick({
        rtl: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.acc-title').click(function () {

        $('.acc-title').children('i').addClass('fa-angle-down')

        if ($(this).next().is(':hidden')){
            $(this).children('i').removeClass('fa-angle-down')
        }else{
            $(this).children('i').addClass('fa-angle-down')
        }

        $(this).next().slideToggle(500).siblings('.acc-body').slideUp(500)
    })



    AOS.init();
})






