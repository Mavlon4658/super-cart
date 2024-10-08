let selects = document.querySelectorAll('.select');

if (selects.length) {
    selects.forEach(el => {
        const btn = el.querySelector('.select_btn');
        const text = el.querySelector('.select_btn span');
        const list = el.querySelectorAll('.select_list li');

        btn.onclick = () => {
            el.classList.toggle('active');
        }

        list.forEach(a => {
            if (a.classList.contains('selected')) {
                text.textContent = a.querySelector('span').textContent;
            }
            
            a.onclick = () => {
                list.forEach(b => {
                    if (a == b) {
                        text.textContent = b.querySelector('span').textContent;
                        b.classList.add('selected');
                    } else {
                        b.classList.remove('selected');
                    }
                })
                el.classList.remove('active');
            }
        })
    })
}

const examples = document.querySelectorAll('.example__card');

if (examples.length) {
    examples.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            navigation: {
                nextEl: el.querySelector('.swp_btn__next'),
                prevEl: el.querySelector('.swp_btn__prev'),
            }
        })
    })
}

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.review .swp_btn__next',
        prevEl: '.review .swp_btn__prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -1,
        depth: 10,
        modifier: 25
    },
    breakpoints: {
        1300: {
            spaceBetween: 90,
            effect: 'slide',
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 3,
            effect: 'slide',
        }
    }
})


var init = false;
var mallSwp;
function swiperMallCard() {
    if (window.innerWidth > 576) {
        if (!init) {
            init = true;
            mallSwp = new Swiper('.mall .swiper', {
                slidesPerView: 1,
                spaceBetween: 350,
                breakpoints: {
                    1100: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                },
                navigation: {
                    nextEl: '.mall .swp_btn__next',
                    prevEl: '.mall .swp_btn__prev',
                }
            })
        }
    } else if (init) {
        mallSwp.destroy();
        init = false;
    }
}

if (document.querySelector('.mall .swiper')) {
    swiperMallCard();
}
window.addEventListener("resize", function () {
    if (document.querySelector('.mall .swiper')) {
        swiperMallCard();
    }
});

document.addEventListener('click', (e) => {
    if (selects.length) {
        selects.forEach(el => {
            const isClickedInsideDiv = e.composedPath().includes(el)
            if (!isClickedInsideDiv) {
                el.classList.remove('active');
            }
        })
    }
})