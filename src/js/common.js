import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import Alpine from 'alpinejs';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

window.Alpine = Alpine;

Alpine.data('app', () => ({
    rule: true,
    showMenu: true,
    matchMedia() {
        this.showMenu = window.matchMedia('(min-width: 1200px)').matches;
    },
    init() {
        this.matchMedia();
    },
}));

Alpine.start();

const splideCta = document.querySelector('.splide-cta');

if (splideCta) {
    new Splide('.splide-cta', {
        type: 'loop',
        arrows: false,
        pagination: true,
        autoplay: true,
        interval: 5000,
        breakpoints: {
            640: {
                height: 220,
            },
        },
    }).mount();
}

const splideProduct = document.querySelector('.splide-product');

if (splideProduct) {
    const splide = new Splide('.splide-product', {
        type: 'loop',
        arrows: false,
        pagination: false,
        autoplay: true,
        interval: 5000,
    }).mount();

    const btnPrev = document.querySelector('.js-btn-prev'),
        btnNext = document.querySelector('.js-btn-next');

    btnPrev.addEventListener('click', () => splide.go('<'));
    btnNext.addEventListener('click', () => splide.go('>'));
}

Fancybox.bind();
